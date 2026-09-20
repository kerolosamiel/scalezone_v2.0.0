'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';
import { sendConfirmationEmail } from '@/actions/send-email';

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(7, 'Please enter a valid phone number'),
  gender: z.string().min(1, 'Gender is required'),
  message: z.string(),
});

export default function FormSide() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      gender: '',
    },
  });

  const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  const onSubmit = async (data) => {
    try {
      const send = await sendConfirmationEmail({
        subject: 'Thank you for reaching out to Scalezone!',
        email: data.email,
        firstName: data.firstName,
      });

      if (!send.success) {
        throw send.error;
      }

      reset();
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
            <FieldLabel htmlFor="first-name">First Name</FieldLabel>
            <Input
              id="first-name"
              type="text"
              placeholder="Your first name"
              {...register('firstName')}
            />
            <FieldError errors={errors.firstName ? [errors.firstName] : []} />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input
              id="last-name"
              type="text"
              placeholder="Your last name"
              {...register('lastName')}
            />
            <FieldError errors={errors.lastName ? [errors.lastName] : []} />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="text" placeholder="Your Email Address" {...register('email')} />
            <FieldError errors={errors.email ? [errors.email] : []} />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">WhatsApp Number</FieldLabel>
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
          <Field className="max-xl:col-start-1 max-xl:col-end-3 max-lg:col-end-[unset]">
            <FieldLabel htmlFor="gender">Gender</FieldLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  items={gender}
                  onValueChange={onChange}
                  value={value}
                  key={value}
                  id="gender"
                >
                  <SelectTrigger className="bg-transparent! w-full">
                    <SelectValue placeholder="Select your gender" className="w-full" />
                  </SelectTrigger>

                  <SelectContent className="w-fit min-w-xs">
                    <SelectGroup>
                      {gender.map((g) => (
                        <SelectItem
                          key={g.value}
                          value={g.value}
                          className="[&_svg]:size-16  [&_svg]:text-accent [&_span]:right-5"
                        >
                          {g.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError errors={errors.gender ? [errors.gender] : []} />
          </Field>
          <Field className="row-start-4 col-start-1 col-end-3 max-lg:col-start-[unset] max-lg:col-end-[unset] max-lg:row-start-[unset]">
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
