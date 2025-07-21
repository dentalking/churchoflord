# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a church website for "주님의교회" (Lord's Church), a Korean church near Gyeongju Station. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (uses Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Tech Stack
- **Next.js 15.3.1** with App Router
- **React 19.0.0** with concurrent features
- **TypeScript 5** with strict mode
- **Tailwind CSS 4.1.4** (latest version)
- **shadcn/ui** components built on Radix UI

### Key Directories
- `src/app/` - Next.js App Router pages (Korean church content)
- `src/components/navigation/` - Header, footer, main navigation
- `src/components/ui/` - Reusable shadcn/ui components
- `public/images/` - Church photos organized by category (hero/, pastors/, activities/, etc.)

### Important Pages
- Homepage (`app/page.tsx`) - Hero section with worship information
- Worship schedules (`app/worship/`) - Service times and types
- Sermons (`app/sermons/`) - YouTube video integration
- Activities (`app/activities/`) - Includes "콩과나무로" community project
- Contact forms (`app/contact/`) - Church communication

### Styling System
- Uses Tailwind CSS v4 with PostCSS configuration
- Component variants managed with `class-variance-authority`
- Conditional styling with `clsx` and `tailwind-merge`
- All text content is in Korean

### Form Handling
- React Hook Form with Zod validation
- TypeScript-first schema validation

## Development Notes

### Content Management
- Static content with images in `public/` directory
- No CMS - content updates require code changes
- Korean language throughout the application

### Image Organization
Images are categorized in `public/images/`:
- `hero/` - Homepage hero images
- `pastors/` - Church leadership photos
- `activities/` - Church activity images
- `bean-tree/` - "콩과나무로" project specific images
- `sermons/` - Sermon thumbnails

### Component Patterns
- Uses shadcn/ui component library extensively
- Radix UI primitives for accessibility
- Responsive design with mobile-first approach
- Next.js Image component for optimization

### Build Configuration
- TypeScript path aliases configured (`@/*` maps to `src/*`)
- ESLint with Next.js and TypeScript rules
- Turbopack enabled for development builds
- No testing framework currently configured