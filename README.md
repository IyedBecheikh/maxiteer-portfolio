# Becheikh Software / Maxiteer Website

Public website for Becheikh Software, featuring independent Android apps published under the Maxiteer developer name.

Live domain: [findlogisticsjobs.com](https://findlogisticsjobs.com)  
Google Play developer profile: [Maxiteer on Google Play](https://play.google.com/store/apps/dev?id=7968531320746201492)

## Overview

This project is a small Next.js site for presenting:

- The Maxiteer Android app portfolio
- A simple supporter license page
- Terms of Service
- Privacy Policy
- Refund Policy
- Contact information

The site is intentionally straightforward, fast-loading, and easy to maintain.

## Stack

- Next.js 16
- React 19
- TypeScript
- ESLint

## Pages

- `/` - Homepage and app portfolio
- `/pricing` - Supporter license pricing
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy
- `/refund-policy` - Refund Policy
- `/contact` - Contact page

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

Start the production server locally:

```bash
npm run start
```

## Project Structure

```text
src/
  app/
    contact/
    pricing/
    privacy/
    refund-policy/
    terms/
    globals.css
    layout.tsx
    page.tsx
  components/
    app-card.tsx
    page-shell.tsx
    policy-page.tsx
  lib/
    site.ts
```

## Content Updates

Most site content is centralized in:

- `src/lib/site.ts` for app metadata, links, shared labels, and contact details
- `src/app/*/page.tsx` for page-specific copy
- `src/app/globals.css` for layout and styling

## License

This repository is currently unlicensed unless a license file is added separately.
