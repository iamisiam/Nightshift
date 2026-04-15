# Technical Context: Nurse Tools & Tech

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16.x    | React framework with App Router |
| React        | 19.x    | UI library with hooks           |
| TypeScript   | 5.9.x   | Type-safe JavaScript            |
| Tailwind CSS | 4.x     | Utility-first CSS               |
| Bun          | Latest  | Package manager & runtime       |
| styled-jsx   | Built-in| Scoped CSS-in-JS for components |

## Development Environment

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (for compatibility)

### Commands

```bash
bun install        # Install dependencies
bun dev            # Start dev server (http://localhost:3000)
bun build          # Production build
bun start          # Start production server
bun lint           # Run ESLint
bun typecheck      # Run TypeScript type checking
```

## Project Configuration

### Next.js Config (`next.config.ts`)

- App Router enabled
- TypeScript strict mode
- ESLint integration
- Optimized for static generation

### TypeScript Config (`tsconfig.json`)

- Strict mode enabled
- Path alias: `@/*` → `src/*`
- Target: ESNext with modern features
- React 19 JSX transform

### Styling Setup

- Tailwind CSS 4 with PostCSS
- CSS-in-JS via styled-jsx for component scoping
- Custom animations and gradients
- Mobile-first responsive design

### ESLint Config

- Next.js recommended rules
- TypeScript integration
- Code quality enforcement

## Key Dependencies

### Production Dependencies

```json
{
  "next": "^16.1.3",
  "react": "^19.2.3",
  "react-dom": "^19.2.3"
}
```

### Dev Dependencies

```json
{
  "typescript": "^5.9.3",
  "@types/node": "^24.10.2",
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@tailwindcss/postcss": "^4.1.17",
  "tailwindcss": "^4.1.17",
  "eslint": "^9.39.1",
  "eslint-config-next": "^16.0.0"
}
```

## File Structure

```
/
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── bun.lock                      # Bun lockfile
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS config for Tailwind
├── eslint.config.mjs             # ESLint configuration
├── .kilocode/                    # AI context and recipes
└── src/
    ├── app/                      # Next.js App Router
    │   ├── layout.tsx            # Root layout with fonts
    │   ├── page.tsx              # Home page (mobile-first)
    │   ├── globals.css           # Global styles + animations
    │   ├── blogs/                # Blog system
    │   │   ├── page.tsx          # Blog listing
    │   │   └── [slug]/page.tsx   # Individual posts
    │   └── request-customer-product/
    │       └── page.tsx          # Custom request form
    └── components/               # Shared components
        └── SamplePage.tsx        # Blog post template
└── public/                       # Static assets
    ├── favicon.ico               # Site icon
    ├── free-nurse-tool.pdf       # Free PDF download
    ├── mockups/                  # App mockup images
    └── night-shift-nurse-bundle*.pdf # Premium PDFs
```

## Technical Constraints

### Design Requirements

- Mobile-first responsive design
- Dark theme with gradient accents
- Smooth animations and transitions
- Professional healthcare branding
- Accessible form interactions

### Performance Goals

- Fast loading on mobile devices
- Optimized images and assets
- Efficient CSS with Tailwind purging
- Minimal JavaScript bundle

## Special Features

### Form Integration

- Custom product request form
- Email submission to leonptucker3886@gmail.com
- Success message display
- Form validation and error handling

### Content Management

- Blog system with 1500+ word articles
- Social sharing integration
- SEO-optimized content structure
- Mobile-friendly reading experience

### Asset Management

- PDF downloads for templates
- Image optimization for mockups
- Direct download links
- File organization in public directory
- Use `.env.local` for local development
