'use server';

export async function sendData(data) {
  const res = await fetch(
    'https://n8n-production-f1db.up.railway.app/webhook-test/event-registration',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  ).catch((err) => console.error('n8n Error:', err));

  return { success: true };
}
