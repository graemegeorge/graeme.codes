# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 personal portfolio website** using the App Router pattern.

### Tech Stack
- Next.js 16 with React 19
- TypeScript 5
- Tailwind CSS 4
- lucide-react for icons

### Project Structure
- `src/app/` - App Router pages and layouts
- `src/app/components/` - Reusable React components
- `public/` - Static assets (SVGs, PDF resume)

### Key Patterns
- **Path alias**: Use `@/*` for imports from `src/*`
- **Server components by default**: Only use 'use client' when needed for interactivity
- **Static content**: Blog posts, portfolio projects, and contact info are hardcoded arrays in page files

### Design System: Brutalist-Refined
- **No rounded corners** — all elements use sharp, hard edges (`border-radius: 0 !important`)
- **No glassmorphism, no gradients, no blur effects**
- **Typography**: Space Grotesk (UI/body), Caveat (expressive accent/hero contrast)
- **Colors**: Dark mode (#000000 bg, #FFFFFF text), Light mode (#F5F0EB bg, #000000 text), Accent (#FF4D00)
- **CSS classes**: `btn-slab`, `btn-accent`, `card-block`, `grid-line`, `marker`, `idx`, `section-label`, `font-accent`
- **Layout**: Swiss grid system, 12-column grid on content pages, strong use of negative space
- **Borders**: Solid 1px borders using `border-theme` / `border-strong` classes
- **Philosophy**: Minimal, bold, engineered — not decorated
