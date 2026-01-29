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
- **Styling**: Dark theme with glassmorphism effects, orange accent color (#e8a87c)
