'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail({ email, firstName }) {
  try {
    const res = await resend.emails.send({
      from: 'Scalezone <contact@scalezone.ae>',
      to: [email],
      subject: 'Thank you for reaching out to Scalezone!',
      html: `<p>Hi ${firstName},</p><p>We have received your message and our team will get back to you shortly.</p>`,
    });

    if (res.error) throw res.error;

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
