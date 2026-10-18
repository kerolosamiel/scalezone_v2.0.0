'use client';

import { Controller } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
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
import { Spinner } from '@/components/ui/spinner';
import { useState } from 'react';
import ZoneSelector from '../shared/ZoneSelector';
import ServicesSelector from '../shared/ServicesSelector';

export default function BaseFormSide({ zones, values, children }) {
  const { register, handleSubmit, control, errors, isSubmitting, onSubmit, zone, setZone } = values;
  const [selectZone, setSelectZone] = useState(false);
  let specificZone = zones?.find((z) => z.slug === zone)?.services;

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

          <ZoneSelector
            zones={zones}
            register={register}
            setZone={setZone}
            setSelectZone={setSelectZone}
          />

          <div
            className={`col-start-1 col-end-3 transition-all duration-200  flex max-lg:col-end-2 ${
              zone === 'not-sure' || specificZone?.length === 0
                ? 'h-0 invisible'
                : !selectZone
                  ? 'h-50 visible justify-center items-center'
                  : 'h-auto visible'
            }`}
          >
            {!selectZone && zone != 'not-sure' ? (
              <Spinner />
            ) : (
              specificZone?.length > 0 && (
                <ServicesSelector services={specificZone} register={register} />
              )
            )}
          </div>

          {children}
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
