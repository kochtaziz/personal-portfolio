# Mohamed Aziz Kocht Portfolio

Professional portfolio website for Mohamed Aziz Kocht, built as a central hub for projects, certifications, skills, resume, blog structure, GitHub, LinkedIn, and contact.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel Analytics
- Vercel deployment

## Main Sections

- Home
- About
- Projects
- Certifications
- Skills
- Experience
- Resume
- Blog
- Contact

## Featured Projects

- AI Investment Research Platform
- Smart Electricity Outage Notification Platform
- Smart Bus Passenger Analytics System
- Enterprise IT Infrastructure Lab
- OnePark Reservation System
- Arduino RC Car
- Wireless Packet Monitor
- Wireless Packet Receiver

## Private Client Work

Some portfolio entries describe private freelance or client-owned projects. For those projects, source code, credentials, API details, database schemas, and deployment configuration are intentionally not published. Public case studies include only approved descriptions, architecture summaries, and non-sensitive media.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Contact Backend

The contact form posts to `/api/contact`. Email delivery can be enabled with these environment variables:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

See `CONTACT_BACKEND.md` for setup notes.

