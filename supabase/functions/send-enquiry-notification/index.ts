type Enquiry = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  postcode?: string | null;
  preferred_date?: string | null;
  message?: string | null;
};

type WebhookPayload = {
  record?: Enquiry;
};

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

Deno.serve(async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const webhookSecret = Deno.env.get('ENQUIRY_WEBHOOK_SECRET');
  const resendApiKey = Deno.env.get('RESEND_API_KEY');

  if (!webhookSecret || !resendApiKey) {
    console.error('Missing ENQUIRY_WEBHOOK_SECRET or RESEND_API_KEY');
    return new Response('Server configuration error', { status: 500 });
  }

  if (request.headers.get('authorization') !== ['Bearer', webhookSecret].join(' ')) {
    return new Response('Unauthorized', { status: 401 });
  }

  let payload: WebhookPayload;
  try {
    payload = await request.json();
  } catch {
    return new Response('Invalid JSON payload', { status: 400 });
  }

  const enquiry = payload.record;
  if (!enquiry) return new Response('Missing enquiry record', { status: 400 });

  const customerEmail = String(enquiry.email ?? '').trim();
  const service = String(enquiry.service ?? 'Website enquiry').trim();
  const sender = Deno.env.get('ENQUIRY_EMAIL_FROM')
    ?? 'Landlord Certificates <enquiries@landlordcertificatesandremedials.com>';

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1f2937;line-height:1.6">
      <h2 style="color:#166534">New website enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.name)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(customerEmail)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.phone)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Service</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.service)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Postcode</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.postcode || 'Not provided')}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Preferred date</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.preferred_date || 'Not provided')}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb"><strong>Message</strong></td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(enquiry.message?.trim() || 'Not provided')}</td></tr>
      </table>
      ${enquiry.id ? `<p style="font-size:12px;color:#6b7280">Enquiry reference: ${escapeHtml(enquiry.id)}</p>` : ''}
    </div>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: ['Bearer', resendApiKey].join(' '),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: sender,
      to: ['info@landlordcertificatesandremedials.com'],
      reply_to: customerEmail,
      subject: `New website enquiry: ${service}`,
      html,
    }),
  });

  const responseText = await resendResponse.text();
  if (!resendResponse.ok) {
    console.error('Resend notification failed', resendResponse.status, responseText);
    return new Response('Email notification failed', { status: 502 });
  }

  console.log('Enquiry notification sent', enquiry.id);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
});
