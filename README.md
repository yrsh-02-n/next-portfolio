# nextjs-portfolio

Portfolio of frontend developer and web designer, built with Next.js 15, App Router, React 19, and the Sanity headless CMS. The site showcases the latest case studies, a concise resume, and supports light/dark theming with a responsive layout for both desktop and mobile visitors.

## Key Features
- Hero section powered by Sanity with a “typewriter” effect and keyboard navigation for CTA buttons.
- Latest projects slider (Swiper) with adaptive slide counts and skeleton placeholders while data is loading.
- “Resume” block sourced from Sanity, including stack, plans, experience timeline, and Portable Text content.
- Dynamic project pages (`/[category]/[slug]`) generated statically with a GROQ-driven block builder.
- Light and dark themes persisted in cookies via Server Actions and middleware.
- Social links and sidebar content pulled from Sanity and rendered across the layout.

## Tech Stack
- Next.js 15 (App Router, Server Components, Route Handlers, ISR)
- React 19 and TypeScript 5
- Tailwind CSS 4 with design tokens defined via CSS custom properties
- Framer Motion, Swiper, lucide-react, clsx
- react-typewriter-hook, react-hotkeys-hook, usehooks-ts
- Sanity v4, GROQ, `next-sanity`, `@sanity/vision`

## Prerequisites
- Node.js v20.10+ (latest LTS recommended)
- Yarn 1.22 (classic) or a compatible package manager
- Sanity CLI (`npm install -g @sanity/cli`) for running the studio locally

## Getting Started
1. Install dependencies:
   ```bash
   yarn install
   ```
2. Copy `.env` or create `.env.local` and provide the environment variables listed below.
3. Start the Next.js dev server:
   ```bash
   yarn dev
   ```
4. Open http://localhost:3000. To edit content, run the Sanity studio in another terminal:
   ```bash
   yarn dev:sanity
   ```

## Environment Variables
| Variable | Description |
| --- | --- |
| `SANITY_STUDIO_PROJECT_ID` | Sanity project ID |
| `SANITY_STUDIO_DATASET` | Sanity dataset name |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Optional Sanity API version, defaults to `2025-07-17` |

## Content Model
- **heroScreen** – hero section texts and CTA links.
- **socialLink** – social icons and URLs for the header/sidebar.
- **resumeType** – data for the resume section: stack, plans, experience timeline, Portable Text content.
- **portfolioCase** – project cards and pages. Content is structured via the `pageBuilder` array supporting `headingBlock`, `splitImage`, `caseOneImage`, `multipleCaseImages`, and `textOnlyBlock`.
- Launch the studio locally with `yarn dev:sanity`, or deploy it with `yarn sanity:deploy`.

## Project Structure
```text
src/
  app/              # routes, layout, API handlers
  components/       # UI (hero, portfolio, resume, navigation, etc.)
  hooks/            # custom hooks (keyboard navigation, slide count)
  providers/        # application providers
  server-actions/   # server actions and theme middleware
  types/            # project and Sanity typings
  utils/            # utilities (e.g., age calculation)
sanity/
  lib/              # Sanity client, GROQ queries, live API helpers
  schemaTypes/      # document schemas and block definitions
public/             # images, favicons, background patterns
```

## Available Scripts
- `yarn dev` — start the Next.js dev server (Turbopack).
- `yarn build` — create a production build.
- `yarn start` — run the production server.
- `yarn lint` — run ESLint.
- `yarn dev:sanity` — start the Sanity studio at http://localhost:3333.
- `yarn sanity:datasets` — list Sanity datasets.
- `yarn sanity:deploy` — deploy the studio to *.sanity.studio.
- `yarn sanity:schema` — deploy schema updates to Sanity.

## Deployment
1. Build the application:
   ```bash
   yarn build
   ```
2. Run the production server:
   ```bash
   yarn start
   ```
3. (Optional) Deploy the Sanity studio: `yarn sanity:deploy`.
4. A ready-to-use `Dockerfile` is available if you prefer containerization.