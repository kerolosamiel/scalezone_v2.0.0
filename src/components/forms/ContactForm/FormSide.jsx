'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import 'react-phone-number-input/style.css';
import * as z from 'zod';

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { sendConfirmationEmail } from '@/actions/send-email';
import BaseFormSide from '../shared/BaseFormSide';
import ArabicSuccessModal from '@/components/modals/ArabicSuccessModal';
import { Dialog } from '@/components/ui/dialog';
import BaseSuccessModal from '@/components/modals/BaseSuccessModal';

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
  message: z.string(),
  zone: z.string(),
  service: z.string(),
});

export default function FormSide({ zones }) {
  const [zone, setZone] = useState('not-sure');
  const [open, setOpen] = useState(false);

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
      message: '',
      zone: 'Not Sure Yet',
      service: 'Not Sure Yet',
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
        subject: 'New Client From Contact Form',
        fromEmail: 'mouslem@scalezone.ae',
        toEmail: 'contact@scalezone.ae',
        component: 'notification',
        props: { clientInfo: data },
      });

      if (!sendNotification.success) {
        throw new Error(sendNotification.error);
      }

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <BaseFormSide zones={zones} values={values}>
        <BaseSuccessModal
          title="MESSAGE SENT"
          description="We'll follow up by email shortly."
          button={{ href: '/appointment', label: 'Book an Appoinment' }}
          setOpen={setOpen}
        />
        <Field className="col-start-1 col-end-3 max-lg:col-start-[unset] max-lg:col-end-[unset]">
          <FieldLabel htmlFor="message">
            Message <FieldDescription>(Optional)</FieldDescription>
          </FieldLabel>
          <Textarea
            id="message"
            className="resize-y h-128 text-[1.4rem]! p-10"
            placeholder="Tell us about your needs..."
            {...register('message')}
          />
        </Field>
      </BaseFormSide>
    </Dialog>
  );
}
