import React from 'react';
import BaseSuccessModal from './BaseSuccessModal';
import { DialogDescription } from '../ui/dialog';

export default function AppointmentModal({
  title,
  description,
  button,
  props,
  date,
  time,
  setOpen,
}) {
  return (
    <BaseSuccessModal
      title={title}
      description={description}
      button={button}
      props={props}
      setOpen={setOpen}
    >
      <DialogDescription className="mb-12 text-[1.4rem]">{`${date.toDateString()} At ${time}`}</DialogDescription>
    </BaseSuccessModal>
  );
}
