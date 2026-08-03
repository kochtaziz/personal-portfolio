# Contact Backend

The contact form posts to `/api/contact`.

## Local Behavior

Without `RESEND_API_KEY`, the backend validates the form and returns a `202`
response so the UI can confirm that the backend received the message. It also
logs the submission metadata in the server console.

## Production Email Delivery

Set these environment variables in Vercel:

```text
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=kochtaziz8@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <your_verified_sender_domain>
```

`CONTACT_FROM_EMAIL` should use a sender verified in Resend before production
deployment.
