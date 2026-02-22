# ClearPath Systems Website

This repository contains the marketing website for **ClearPath Systems**.

## What This Site Is

This is a responsive business website that explains ClearPath Systems services and gives potential clients a clear path to get in touch.  
It includes:

- A homepage with service positioning and value proposition
- Service pages focused on practical business outcomes
- An about page describing delivery approach and business focus
- A contact page for enquiries

## About The Business

**ClearPath Systems** helps Australian small and medium businesses apply AI and data in practical, commercially useful ways.

Core focus areas:

- AI and workflow automation
- Data and analytics foundations
- Custom internal software and tools

The business positions itself as an end-to-end delivery partner, handling scoping through rollout so internal teams can stay focused on operations.

## Tech Stack

- **React 19** for UI components
- **TypeScript** for typed application code
- **Vite** for development server and production builds
- **React Router** for client-side routing
- **Tailwind CSS v4** for styling
- **PostCSS + Autoprefixer** for CSS processing
- **ESLint** for linting and code quality

## Project Structure

- `src/pages/` route-level pages (Home, About, Services, Contact, NotFound)
- `src/components/` reusable UI sections and layout components
- `src/assets/` images and static media used in the site

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```
