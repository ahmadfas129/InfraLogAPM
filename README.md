# InfraLogAPM

InfraLogAPM is an enterprise-grade SaaS monitoring platform inspired by Datadog and built with Next.js 15, TypeScript, Tailwind CSS, Prisma, SQLite, Stripe, and NextAuth.

## Features

- Modern observability landing page
- Authentication with roles and protected routes
- Admin and user dashboards
- Stripe subscription checkout and billing
- Prisma ORM data models for logs, metrics, notifications
- Responsive enterprise UI with animations

## Quick Start

1. Install dependencies
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example`
3. Generate Prisma client and migrate database
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run prisma:seed
   ```
4. Run development server
   ```bash
   npm run dev
   ```

## Admin Credentials

- Email: `admin@InfraLogAPM.com`
- Password: `@Abc123456`

## Deployment

### Vercel

1. Push your repository to GitHub.
2. Connect the repository to Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

### Docker

```bash
docker build -t infralogapm .
docker compose up -d
```

### Production commands

```bash
npm install
npm run build
npm start
```

## Stripe

- Checkout sessions and webhook support included.
- Configure `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, and `STRIPE_WEBHOOK_SECRET`.
