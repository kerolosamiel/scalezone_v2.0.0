'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import * as z from 'zod';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import { useState } from 'react';
import ZoneSelector from '../shared/ZoneSelector';
import { sendConfirmationEmail } from '@/actions/send-email';
// import { sendConfirmationEmail } from '@/actions/send-email';
// import { sendData } from '@/actions/send-data';

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
});

export default function FormSide({ zones }) {
  const [zone, setZone] = useState('not-sure');
  let specificZone = zones?.find((z) => z.slug === zone)?.services;

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

      reset();
      setZone('not-sure');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-48 max-md:p-32 max-sm:px-24 bg-card [&_input]:bg-transparent! [&_div]:bg-transparent! "
    >
      <FieldSet disabled={isSubmitting}>
        <FieldGroup className="grid grid-cols-2 max-lg:grid-cols-1 gap-32 grid-wrap">
          <Field>
            <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
            <Input
              id="full-name"
              type="text"
              placeholder="Your full name"
              {...register('fullName')}
            />
            <FieldError errors={errors.fullName ? [errors.fullName] : []} />
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="text" placeholder="Your Email Address" {...register('email')} />
            <FieldError errors={errors?.email ? [errors?.email] : []} />
          </Field>

          <Field>
            <FieldLabel htmlFor="company">
              Company <FieldDescription>(Optional)</FieldDescription>
            </FieldLabel>
            <Input
              id="company"
              type="text"
              placeholder="Your company name"
              {...register('company')}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInputWithCountry
                  id="phone"
                  international
                  defaultCountry="AE"
                  value={value ? value.toString() : ''}
                  onChange={onChange}
                  placeholder="Enter phone number"
                  className="h-fit px-16 py-12 w-full [&_select]:bg-card [&_.PhoneInputCountryIcon]:outline-0 [&_input]:outline-0 min-w-0 rounded-lg border border-input bg-transparent text-[1.4rem] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-accent aria-invalid:ring-3 aria-invalid:ring-accent/20  dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-accent/50 dark:aria-invalid:ring-accent/40"
                />
              )}
            />
            <FieldError errors={errors.phone ? [errors.phone] : []} />
          </Field>

          <ZoneSelector zones={zones} register={register} setZone={setZone} />

          <div
            className={`col-start-1 col-end-3 transition-all duration-500 ${
              zone === 'not-sure' ? 'h-0 invisible' : 'h-50 visible'
            }`}
          ></div>

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
        </FieldGroup>
      </FieldSet>

      <Button type="submit" className="py-16 px-32 w-full text-[1.6rem] h-fit my-36 flex gap-8">
        Submit
        {isSubmitting ? <Spinner className="text-foreground" /> : ''}
      </Button>

      <p className="text-[1.4rem] text-muted-foreground">
        By submitting, you agree to be contacted by Scalezone about your inquiry. We don&#39;t share
        your info with third parties.
      </p>
    </form>
  );
}
