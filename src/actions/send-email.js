'use server';

import { Resend } from 'resend';
import ConfirmationEmail from '../../emails/ConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail({ subject, email, firstName }) {
  try {
    const res = await resend.emails.send({
      from: 'Scalezone <contact@scalezone.ae>',
      to: [email],
      subject: subject,
      react: <ConfirmationEmail clientName={firstName.trim()} />,
    });

    if (res.error) throw res.error;

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
