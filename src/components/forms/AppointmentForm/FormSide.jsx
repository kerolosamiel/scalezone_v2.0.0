'use client';
import BaseFormSide from '../shared/BaseFormSide';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendConfirmationEmail } from '@/actions/send-email';
import { useState } from 'react';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Calendar } from '@/components/ui/calendar';
import TimeSelector from '../shared/TimeSelector';
import AppointmentModal from '@/components/modals/AppointmentModal';
import { Dialog } from '@/components/ui/dialog';

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters'),
  company: z.string(),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(7, 'Please enter a valid phone number'),
  zone: z.string(),
  service: z.string(),
  date: z.date(),
  time: z.string(),
});

export default function FormSide({ zones }) {
  const [zone, setZone] = useState('not-sure');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      phone: '',
      zone: 'Not Sure Yet',
      service: 'Not Sure Yet',
      date: new Date(),
      time: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const sendConfirmation = await sendConfirmationEmail({
        subject: 'Thank you for reaching out to Scalezone!',
        toEmail: data?.email,
        component: 'confirmation',
        props: { clientName: data?.fullName?.trim() },
      });

      if (!sendConfirmation.success) {
        throw sendConfirmation.error;
      }

      const sendNotification = await sendConfirmationEmail({
        subject: 'New Client From Appointment Form',
        fromEmail: 'mouslem@scalezone.ae',
        toEmail: 'contact@scalezone.ae',
        component: 'notification',
        props: { clientInfo: data },
      });

      if (!sendNotification.success) {
        throw new Error(sendNotification.error);
      }

      setDate(data?.date);
      setTime(data?.time);
      setOpen(true);
      reset();
      setZone('not-sure');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const values = {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    onSubmit,
    zone,
    setZone,
  };

  const times = ['8:00 AM', '11:00 AM', '01:00 PM', '2:00 PM', '03:00 PM', '04:00 PM'];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <BaseFormSide zones={zones} values={values}>
        <AppointmentModal
          title="YOU&#x2c;RE BOOKED"
          description="A confirmation is on its way to your email."
          button={{
            href: 'https://wa.me/971585828626',
            label: 'Chat with us',
          }}
          setOpen={setOpen}
          date={date}
          time={time}
        />
        <Field>
          <h3 className="text-[1.4rem] tracking-[6%] mb-16">Pick a date</h3>
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Calendar mode="single" id="date" selected={value} onSelect={onChange} />
            )}
          />
        </Field>

        <Field>
          <h3 className="text-[1.4rem] tracking-[6%] mb-16">Available times</h3>

          <TimeSelector times={times} register={register} />
        </Field>
      </BaseFormSide>
    </Dialog>
  );
}
