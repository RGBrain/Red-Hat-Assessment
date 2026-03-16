# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Red Hat Assessment webinar registration landing page. The following changes were made:

- **`instrumentation-client.ts`** (new) — Initialises PostHog client-side via Next.js 15's instrumentation hook. Enables automatic session replay, exception capture, and pageview tracking with no additional configuration.
- **`next.config.mjs`** — Added reverse-proxy rewrites (`/ingest/*` → `eu.i.posthog.com`) to improve event delivery reliability and reduce ad-blocker interference.
- **`src/lib/posthog-server.ts`** (new) — Singleton PostHog Node.js client for server-side event capture, ready for use in any future custom API routes.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` added.

| Event | Description | File |
|---|---|---|
| `registration_form_submitted` | Fired on successful webinar registration form submission. Calls `posthog.identify()` with the user's email. | `src/components/RegistrationForm.tsx` |
| `registration_form_submission_failed` | Fired when the form POST to Payload returns a non-OK response. Includes HTTP status code. | `src/components/RegistrationForm.tsx` |
| `register_button_clicked` | Fired when the Register CTA button in the header is clicked. | `src/components/Header.tsx` |
| `contact_email_clicked` | Fired when the contact email link in the "Get in Touch" section is clicked. | `src/components/SectionFive.tsx` |
| `privacy_policy_clicked` | Fired when the LeadaMarket Privacy Policy link in the footer is clicked. | `src/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://eu.posthog.com/project/141116/dashboard/568889)
- [Daily Registrations](https://eu.posthog.com/project/141116/insights/I1HKNV8C) — trend of successful registrations over time
- [Registration Conversion Funnel](https://eu.posthog.com/project/141116/insights/dGlIs2HN) — drop-off from Register button click to form submission
- [Form Submission Success vs Failure](https://eu.posthog.com/project/141116/insights/TTtr5hyt) — side-by-side comparison of successful vs failed submissions
- [Register Button & Contact Email Clicks](https://eu.posthog.com/project/141116/insights/lFHcvm30) — engagement with the two main CTAs

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
