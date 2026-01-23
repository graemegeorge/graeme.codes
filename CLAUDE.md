# CLAUDE.md - AI Assistant Guide for graeme.codes

> **Last Updated:** 2026-01-23
> **Purpose:** This document provides comprehensive guidance for AI assistants working on the graeme.codes codebase.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Architecture & Patterns](#architecture--patterns)
5. [Code Conventions](#code-conventions)
6. [Development Workflow](#development-workflow)
7. [Key Files Reference](#key-files-reference)
8. [Common Tasks](#common-tasks)
9. [Design System](#design-system)
10. [Important Notes for AI Assistants](#important-notes-for-ai-assistants)

---

## Project Overview

**graeme.codes** is a modern, minimalist personal portfolio landing page for Graeme George, a Senior Frontend Engineer. The site features a stunning dark theme with glassmorphic UI elements, smooth animations, and a clean, professional design.

### Project Type
- Single-page personal portfolio
- Static site with no backend
- Client-side rendered with Next.js App Router
- Production-ready modern frontend showcase

### Key Features
- Professional profile display
- Social media and professional network links (LinkedIn, Instagram, GitHub)
- Downloadable CV/Resume
- Dark theme with gradient orb backgrounds
- Glassmorphic card design with hover effects
- Fully responsive layout

---

## Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router (latest stable)
- **React 19.2.3** - Latest React version
- **TypeScript 5.x** - Full type safety with strict mode

### Styling
- **Tailwind CSS 4.x** - Latest version with utility-first approach
- **PostCSS** - CSS processing with @tailwindcss/postcss plugin
- **Custom CSS Variables** - Theme configuration

### UI Components
- **lucide-react 0.562.0** - Icon library for social/navigation icons

### Font System
- **Geist Sans** - Primary font (via next/font/google)
- **Geist Mono** - Monospace font
- **Inter** - Secondary sans-serif font

### Development Tools
- **ESLint 9.x** - Code linting with Next.js config
- **TypeScript Compiler** - Strict mode enabled
- **Git** - Version control

---

## Directory Structure

```
graeme.codes/
├── .git/                    # Git repository
├── .gitignore              # Git ignore patterns
├── README.md               # Project readme (minimal)
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependencies
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── postcss.config.mjs      # PostCSS configuration
│
├── public/                 # Static assets (served at root)
│   ├── Graeme_George_CV_2026_P.pdf  # Downloadable CV
│   ├── file.svg           # SVG icons
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
└── src/                    # Source code
    └── app/                # Next.js App Router directory
        ├── layout.tsx      # Root layout (fonts, metadata)
        ├── page.tsx        # Home page (main content)
        ├── globals.css     # Global styles and theme
        └── favicon.ico     # Site favicon
```

### File Count Summary
- **Total files:** 18
- **Root config files:** 8
- **Source files:** 4
- **Public assets:** 6

---

## Architecture & Patterns

### Next.js App Router Pattern
This project uses the **modern App Router** (not the legacy Pages Router):
- File-based routing convention
- Server Components by default (no explicit "use client" needed)
- Metadata API for SEO configuration
- Co-located styles with components

### Component Architecture

#### 1. **Single-Page Application Pattern**
- All content on one route: `/`
- No navigation between pages
- External links open in new tabs
- Future sections commented out (Blog, Work, Contact)

#### 2. **Configuration-Driven UI**
Data structures define the UI:

```typescript
const links = [
  { label: "LinkedIn", href: "...", icon: Linkedin },
  // ... more links
];
```

Components map over these arrays for rendering.

#### 3. **Composition Over Inheritance**
- Functional components only
- Props spread pattern for link attributes
- Icon components passed as data
- Inline styling with Tailwind utilities

#### 4. **Declarative Rendering**
```typescript
{links.map(({ label, icon: Icon, ...props }) => (
  <a key={label} {...props}>
    {/* ... */}
  </a>
))}
```

### Code Organization Principles

1. **Co-location**: Data defined near where it's used (in same file)
2. **Separation of Concerns**: Layout vs. Page vs. Styles
3. **Type Safety**: Full TypeScript with Next.js metadata types
4. **Static Data**: No client-side state management needed

---

## Code Conventions

### TypeScript Standards

#### Strict Mode Enabled
```json
{
  "strict": true,
  "noEmit": true,
  "esModuleInterop": true
}
```

#### Type Inference
- Rely on TypeScript inference where possible
- Explicit types for exported interfaces/types
- Use Next.js provided types (Metadata, etc.)

#### Path Aliases
```typescript
// Use @ alias for src imports
import Component from "@/components/Component";
```

### React/Next.js Conventions

#### 1. **Server Components Default**
All components are Server Components unless marked with `"use client"`.

**Current state:** No client components yet (all static).

#### 2. **File Naming**
- Routes: `page.tsx`
- Layouts: `layout.tsx`
- Global styles: `globals.css`
- Config files: kebab-case (e.g., `next.config.ts`)

#### 3. **Component Structure**
```typescript
// 1. Imports
import { Icon } from "lucide-react";

// 2. Data/Constants
const links = [...];

// 3. Component Export
export default function ComponentName() {
  return (/* JSX */);
}
```

### Styling Conventions

#### 1. **Tailwind Utility Classes**
- Use inline utilities (no @apply in CSS)
- Group related utilities: spacing → colors → effects
- Use arbitrary values for custom colors: `bg-[#0a0a0f]`

#### 2. **Color System**
All colors use hex codes (not Tailwind's default palette):

```typescript
// Background colors
bg-[#0a0a0f]      // Base dark background

// Gradient orbs
bg-[#1a1a2e]      // Purple-blue
bg-[#2d1f3d]      // Deep purple
bg-[#3d2a2a]      // Red-brown

// Text colors
text-[#e4e4e8]    // Off-white (primary text)
text-[#6a6a7a]    // Mid gray (secondary)
text-[#4a4a5a]    // Dark gray (tertiary)

// Accent
text-[#e8a87c]    // Warm orange (hover state)
```

#### 3. **Glassmorphism Pattern**
```typescript
className="bg-white/3 border border-white/6 backdrop-blur-sm
           hover:bg-white/6 hover:border-white/12
           transition-all duration-300"
```

#### 4. **Responsive Design**
- Mobile-first approach (Tailwind default)
- Currently single-column layout (no breakpoints needed)
- Use `px-8` for horizontal padding (responsive)

### Import Organization

```typescript
// 1. External packages
import { Component } from "package";

// 2. Next.js imports
import { Metadata } from "next";

// 3. Local imports (if any)
import Component from "@/components/Component";

// 4. Styles (in layout/page files)
import "./globals.css";
```

---

## Development Workflow

### Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Development Process

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Runs on http://localhost:3000
   - Hot reload enabled
   - Error overlay in browser

2. **Make Changes**
   - Edit files in `src/app/`
   - Changes reflect immediately
   - Check browser console for errors

3. **Lint Code**
   ```bash
   npm run lint
   ```
   - Check before committing
   - Fix any ESLint errors

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Validates TypeScript
   - Optimizes for production
   - Outputs to `.next/` directory

### Git Workflow

#### Current Branch
- **Development branch:** `claude/add-claude-documentation-OIYwc`
- **Always develop on feature branches**
- **Never push directly to main**

#### Commit Guidelines
```bash
# Stage specific files (not "git add .")
git add src/app/page.tsx

# Write clear commit messages
git commit -m "Add new feature description"

# Push to feature branch
git push -u origin claude/add-claude-documentation-OIYwc
```

#### Commit Message Format
- Use imperative mood: "Add feature" not "Added feature"
- Keep first line under 50 characters
- Add details in body if needed
- Reference issue numbers if applicable

### Testing Strategy

**Current state:** No automated tests yet.

**Future considerations:**
- Unit tests for utility functions (if added)
- Integration tests for components
- E2E tests with Playwright/Cypress
- Visual regression tests

---

## Key Files Reference

### Configuration Files

#### `package.json`
- **Purpose:** Dependencies, scripts, project metadata
- **Key scripts:** dev, build, start, lint
- **When to edit:** Adding/removing dependencies, updating scripts

#### `next.config.ts`
- **Purpose:** Next.js framework configuration
- **Current state:** Minimal config (defaults)
- **When to edit:** Adding redirects, environment variables, image config

#### `tsconfig.json`
- **Purpose:** TypeScript compiler options
- **Key settings:**
  - `strict: true` - Type safety enforced
  - `paths: { "@/*": ["./src/*"] }` - Import alias
  - `target: "ES2017"` - JavaScript target
- **When to edit:** Rarely (only for compiler options)

#### `eslint.config.mjs`
- **Purpose:** Code linting rules
- **Config type:** Flat config (modern ESLint)
- **Preset:** Next.js Core Web Vitals
- **When to edit:** Adding custom rules, disabling rules

#### `postcss.config.mjs`
- **Purpose:** CSS processing for Tailwind
- **Plugins:** `@tailwindcss/postcss`
- **When to edit:** Rarely (stable config)

#### `.gitignore`
- **Purpose:** Files to exclude from Git
- **Includes:** node_modules, .next, build artifacts, .env files
- **When to edit:** Adding new build outputs or secrets

### Source Files

#### `src/app/layout.tsx`
- **Purpose:** Root layout for all pages
- **Responsibilities:**
  - Font loading (Geist Sans, Geist Mono, Inter)
  - HTML structure
  - Metadata configuration
  - Global font variables
- **When to edit:**
  - Changing site title/description
  - Adding new fonts
  - Adding global providers

#### `src/app/page.tsx`
- **Purpose:** Home page content
- **Responsibilities:**
  - Main profile display
  - Navigation links
  - Background gradients
  - All visual content
- **When to edit:**
  - Updating links
  - Changing content
  - Adding new sections

#### `src/app/globals.css`
- **Purpose:** Global styles and theme
- **Contains:**
  - Tailwind imports
  - CSS custom properties (--background, --foreground)
  - Dark mode configuration
  - Tailwind theme overrides
- **When to edit:**
  - Changing global colors
  - Adding CSS variables
  - Modifying theme settings

### Asset Files

#### `public/Graeme_George_CV_2026_P.pdf`
- **Purpose:** Downloadable resume/CV
- **Accessed at:** `/Graeme_George_CV_2026_P.pdf`
- **When to update:** When CV content changes

#### `public/*.svg`
- **Purpose:** Icon assets
- **Current usage:** Limited (icons use lucide-react instead)
- **When to edit:** If replacing with custom icons

---

## Common Tasks

### 1. Adding a New Link

**File:** `src/app/page.tsx`

```typescript
// Add to the links array
const links = [
  // ... existing links
  {
    label: "Twitter",
    href: "https://twitter.com/username",
    icon: Twitter, // Import from lucide-react
  },
];
```

**Steps:**
1. Import icon from lucide-react
2. Add object to links array
3. Save (hot reload will update)

### 2. Changing Color Scheme

**File:** `src/app/page.tsx` (primary) and `src/app/globals.css` (secondary)

**Background gradients:**
```typescript
// In page.tsx, search for gradient orbs
<div className="absolute ... bg-[#1a1a2e] ..." />
// Change hex color values
```

**Text colors:**
```typescript
// Search for text-[#...] in page.tsx
className="text-[#e4e4e8]" // Change to new hex
```

**Global theme:**
```css
/* In globals.css */
:root {
  --background: #ffffff; /* Light mode */
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a; /* Dark mode */
    --foreground: #ededed;
  }
}
```

### 3. Updating Metadata (SEO)

**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Graeme George - Senior Frontend Engineer",
  description: "Portfolio of Graeme George, showcasing modern web development.",
  // Add more metadata:
  openGraph: {
    title: "Graeme George",
    description: "...",
    images: ["/og-image.png"],
  },
};
```

### 4. Enabling Commented Sections

**Files:** `src/app/page.tsx`

**Header (lines 63-65):**
```typescript
// Remove /* and */ to enable
<header className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6">
  <div className="text-2xl text-white font-inter">graeme.codes</div>
</header>
```

**Secondary links (lines 106-125):**
```typescript
// Remove /* and */ to enable Blog/Work/Contact section
<div className="flex items-center justify-center gap-8">
  {secondaryLinks.map(/* ... */)}
</div>
```

### 5. Adding a New Page

**Create:** `src/app/blog/page.tsx`

```typescript
export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <h1>Blog</h1>
      {/* Content */}
    </main>
  );
}
```

**Routing:** Automatically available at `/blog`

**Update navigation:**
```typescript
// In src/app/page.tsx
{
  label: "Blog",
  href: "/blog", // Internal link (remove target="_blank")
  icon: FileText,
}
```

### 6. Updating CV/Resume

**Steps:**
1. Replace `public/Graeme_George_CV_2026_P.pdf` with new file
2. Keep same filename OR update in `src/app/page.tsx`:
   ```typescript
   {
     label: "Download CV",
     href: "/New_Filename.pdf", // Update here
     download: true,
     icon: FileUser,
   }
   ```

### 7. Adding Environment Variables

**Create:** `.env.local`

```bash
NEXT_PUBLIC_ANALYTICS_ID=your-id-here
SECRET_API_KEY=your-secret
```

**Usage:**
```typescript
// Client-side (NEXT_PUBLIC_ prefix)
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

// Server-side (no prefix needed)
const apiKey = process.env.SECRET_API_KEY;
```

**Important:** Add `.env.local` to `.gitignore` (already done).

---

## Design System

### Color Palette

#### Background Colors
| Use Case | Hex Code | Tailwind |
|----------|----------|----------|
| Base background | `#0a0a0f` | `bg-[#0a0a0f]` |
| Gradient orb 1 | `#1a1a2e` | `bg-[#1a1a2e]` |
| Gradient orb 2 | `#2d1f3d` | `bg-[#2d1f3d]` |
| Gradient orb 3 | `#3d2a2a` | `bg-[#3d2a2a]` |

#### Text Colors
| Use Case | Hex Code | Tailwind |
|----------|----------|----------|
| Primary text | `#e4e4e8` | `text-[#e4e4e8]` |
| Secondary text | `#6a6a7a` | `text-[#6a6a7a]` |
| Tertiary text | `#4a4a5a` | `text-[#4a4a5a]` |
| Zinc 400 | N/A | `text-zinc-400` |

#### Accent Colors
| Use Case | Hex Code | Tailwind |
|----------|----------|----------|
| Hover state | `#e8a87c` | `text-[#e8a87c]` |

#### Opacity Variants
| Use Case | Tailwind |
|----------|----------|
| Card background | `bg-white/3` |
| Border default | `border-white/6` |
| Border hover | `border-white/12` |

### Typography

#### Font Families
```css
--font-geist-sans  /* Primary sans-serif */
--font-geist-mono  /* Monospace */
--font-inter       /* Secondary sans-serif (used for name/title) */
```

#### Font Sizes
| Element | Size | Tailwind |
|---------|------|----------|
| Name | 36px | `text-4xl` |
| Title | 20px | `text-xl` |
| Link label | 16px | `text-base` (default) |
| Footer | 14px | `text-sm` |

#### Font Weights
| Use Case | Weight | Tailwind |
|----------|--------|----------|
| Name | 500 | `font-medium` |
| Links | 500 | `font-medium` |
| Footer | 300 | `font-light` |

### Spacing

#### Component Gaps
```typescript
gap-2   // Profile section (name + title)
gap-3   // Link items spacing + icon/label gap
gap-4   // Secondary links (commented)
gap-8   // Section spacing
```

#### Padding
```typescript
px-5 py-4   // Link buttons
px-8        // Main container horizontal
py-12       // Profile section + footer vertical
```

#### Border Radius
```typescript
rounded-2xl    // Link cards (16px)
rounded-xl     // Secondary icons (12px)
rounded-full   // Gradient orbs (9999px)
```

### Effects

#### Glassmorphism
```typescript
className="bg-white/3 backdrop-blur-sm border border-white/6"
```

#### Hover States
```typescript
className="hover:bg-white/6 hover:border-white/12
           transition-all duration-300"
```

#### Gradient Blurs
```typescript
blur-[120px] opacity-60   // Large gradient orb
blur-[100px] opacity-30   // Medium gradient orb
```

#### Transitions
```typescript
transition-all duration-300      // Default
transition-colors duration-300   // Color-only
group-hover:translate-x-1        // Arrow slide
```

### Component Patterns

#### Link Card Pattern
```typescript
<a className="group flex items-center justify-between w-full
               px-5 py-4 rounded-2xl
               bg-white/3 border border-white/6 backdrop-blur-sm
               hover:bg-white/6 hover:border-white/12
               transition-all duration-300">
  <span className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-[#6a6a7a]
                     group-hover:text-[#e8a87c]
                     transition-colors duration-300" />
    <span className="text-[#e4e4e8] font-medium">{label}</span>
  </span>
  {/* Arrow SVG */}
</a>
```

#### Gradient Background Pattern
```typescript
<div className="absolute inset-0 bg-[#0a0a0f]" />
<div className="absolute top-0 -left-1/4 w-1/2 h-1/2
                bg-[#1a1a2e] rounded-full blur-[120px] opacity-60" />
{/* More gradient orbs */}
```

---

## Important Notes for AI Assistants

### What to Do

#### 1. **Read Before Modifying**
Always read the file before making changes. Never propose changes to code you haven't seen.

#### 2. **Use TypeScript**
All files should be TypeScript (`.ts`, `.tsx`). Maintain strict typing.

#### 3. **Follow Existing Patterns**
Match the code style already present:
- Inline data definitions
- Map-based rendering
- Tailwind utility classes
- Configuration-driven approach

#### 4. **Test Locally**
Suggest running `npm run dev` to verify changes before committing.

#### 5. **Preserve Design**
Maintain the glassmorphic, dark theme aesthetic. Don't change colors without explicit request.

#### 6. **Keep It Simple**
This is a simple, static site. Don't over-engineer:
- No state management needed (yet)
- No API routes needed (yet)
- No database needed
- Keep components simple and functional

#### 7. **Check ESLint**
Before committing, ensure `npm run lint` passes.

#### 8. **Use Path Aliases**
Import from `@/*` when referencing src files (if adding components).

### What Not to Do

#### 1. **Don't Over-Complicate**
- Don't add state management unless needed
- Don't create abstractions for single-use code
- Don't add dependencies without justification

#### 2. **Don't Break Conventions**
- Don't use Pages Router (use App Router)
- Don't use CSS modules (use Tailwind)
- Don't use custom webpack config unless necessary

#### 3. **Don't Ignore TypeScript Errors**
- Never use `@ts-ignore` or `any` type
- Fix type errors properly
- Use proper Next.js types

#### 4. **Don't Commit Build Artifacts**
- `.next/` directory (build output)
- `out/` directory (export output)
- `node_modules/`
- `.env.local` or secrets

#### 5. **Don't Change File Structure Without Reason**
The current structure works. Don't reorganize unless there's a clear benefit.

#### 6. **Don't Add Comments to Self-Evident Code**
The code is clean and readable. Only add comments for complex logic.

#### 7. **Don't Use Inline Styles**
Use Tailwind utilities. Only use style prop for dynamic values.

### When to Ask Clarifying Questions

1. **Unclear requirements** - "Should this link open in a new tab?"
2. **Design decisions** - "What color should the new section use?"
3. **Breaking changes** - "This would change the current layout. Proceed?"
4. **Missing information** - "What should the metadata description be?"
5. **Multiple approaches** - "Would you prefer X or Y approach?"

### Security Considerations

1. **External Links**
   - Always use `target="_blank"` with `rel="noopener noreferrer"`
   - Already implemented correctly in current code

2. **Environment Variables**
   - Public vars must have `NEXT_PUBLIC_` prefix
   - Never commit `.env.local` to Git

3. **Dependencies**
   - Only add trusted packages
   - Check for security vulnerabilities with `npm audit`

4. **XSS Prevention**
   - React escapes by default
   - Avoid `dangerouslySetInnerHTML` unless necessary

### Performance Considerations

1. **Image Optimization**
   - Use Next.js `<Image>` component for images
   - Define width/height to prevent layout shift
   - Use appropriate formats (WebP, AVIF)

2. **Font Optimization**
   - Already using next/font/google (optimal)
   - Fonts are automatically optimized and self-hosted

3. **Code Splitting**
   - Next.js handles automatically
   - Dynamic imports if needed: `const Component = dynamic(() => import('...'))`

4. **Bundle Size**
   - Check with: `npm run build`
   - Minimize dependencies
   - Tree-shaking happens automatically

### Deployment Notes

This project is likely deployed on **Vercel** (Next.js default platform).

**Deployment process:**
1. Push to Git repository
2. Vercel auto-deploys from main branch
3. Preview deployments for feature branches

**Environment variables on Vercel:**
- Add in Vercel dashboard under project settings
- Separate values for production/preview/development

**Custom domain:**
- Domain: graeme.codes
- Configure in Vercel dashboard

---

## Frequently Asked Questions

### Q: Can I use client-side state?
**A:** Yes, but it's not needed yet. If adding interactive features, use `"use client"` directive and React hooks.

### Q: Should I create a components folder?
**A:** Only if you have reusable components. Current single-page approach works fine for now.

### Q: Can I add a backend API?
**A:** Yes, Next.js supports API routes. Create `src/app/api/route.ts` files. But evaluate if you need one first.

### Q: How do I add animations?
**A:** Use Tailwind transitions (already used) or Framer Motion for complex animations.

### Q: Should I add tests?
**A:** Not required currently, but Jest + React Testing Library or Playwright are good choices.

### Q: Can I use Tailwind's default colors?
**A:** Yes, but this project uses custom hex colors for brand consistency. Check with the user first.

### Q: How do I handle forms?
**A:** Use HTML forms with Server Actions (Next.js 13+) or controlled components with state.

### Q: Should I use CSS modules?
**A:** No, stick with Tailwind utilities. Globals.css is for theme variables only.

---

## Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

### Related Guides
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/docs/v4-beta)
- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## Changelog

### 2026-01-23
- Initial CLAUDE.md creation
- Documented complete codebase structure
- Added comprehensive conventions and workflows
- Defined design system and color palette
- Created task guides for common operations

---

## Conclusion

This codebase is a clean, modern example of a Next.js 16 application using the latest web technologies. It follows best practices, maintains strong type safety, and has a clear, consistent structure.

When working on this project:
- **Read the code first** before making changes
- **Follow established patterns** for consistency
- **Keep it simple** - don't over-engineer
- **Ask questions** when requirements are unclear
- **Test your changes** with `npm run dev`
- **Respect the design** - maintain the aesthetic

Happy coding! 🚀
