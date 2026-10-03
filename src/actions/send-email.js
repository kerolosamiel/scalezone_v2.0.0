'use server';

import { Resend } from 'resend';
import ConfirmationEmail from '../../emails/ConfirmationEmail';
import NotificationEmail from '../../emails/NotificationEmail';
import ArabicConfirmationEmail from '../../emails/ArabicConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_TEMPLATES = {
  confirmation: ConfirmationEmail,
  confirmationar: ArabicConfirmationEmail,
  notification: NotificationEmail,
};

export async function sendConfirmationEmail({
  fromEmail = 'contact@scalezone.ae',
  toEmail,
  subject,
  component,
  props = {},
}) {
  try {
    const SelectedTemplate = EMAIL_TEMPLATES[component];

    if (!SelectedTemplate) {
      throw new Error(`Invalid email template: ${component}`);
    }

    const res = await resend.emails.send({
      from: `Scalezone <${fromEmail}>`,
      to: [toEmail],
      subject: subject,
      react: <SelectedTemplate {...props} />,
    });

    if (res.error) throw res.error;

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
