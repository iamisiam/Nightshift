# System Patterns: Nurse Tools & Tech

## Architecture Overview

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts
│   ├── page.tsx                  # Home page with hero/features
│   ├── globals.css               # Global styles and animations
│   ├── blogs/                    # Blog system
│   │   ├── page.tsx             # Blog listing
│   │   └── [slug]/page.tsx      # Individual blog posts
│   └── request-customer-product/ # Custom request form
│       └── page.tsx             # Contact form with email integration
├── components/                   # React components
└── public/                       # Static assets (PDFs, images)
    ├── free-nurse-tool.pdf      # Free PDF download
    ├── mockups/                 # App mockup images
    └── night-shift-nurse-bundle*.pdf # Premium PDF bundles
```

## Key Design Patterns

### 1. Mobile-First Responsive Design

All components designed mobile-first with progressive enhancement:
- Base styles for mobile (320px+)
- Tablet enhancements (768px+)
- Desktop optimizations (1024px+)
- Large screen refinements (1280px+)

### 2. Inline Styling with CSS-in-JS

Uses styled-jsx for component-scoped CSS:
```tsx
<style jsx>{`
  .hero {
    background: linear-gradient(135deg, #0c0a09 0%, #1c1917 25%);
  }
  @media (min-width: 768px) {
    .hero { padding: 120px 40px; }
  }
`}</style>
```

### 3. Client Components for Interactivity

Strategic use of `"use client"` for interactive elements:
- Navigation menus with mobile toggle
- Form handling and validation
- Hover effects and animations
- Modal dialogs and overlays

### 4. Form Handling Pattern

Complex forms use React state with TypeScript:
```tsx
const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
  requestType: 'app',
  message: ''
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Email submission logic
};
```

## Styling Conventions

### Design System
- **Colors**: Dark theme with green/blue accent gradients
- **Typography**: System fonts with clamp() for responsive sizing
- **Spacing**: 8px grid system (8, 16, 24, 32, 40, 60, 80px)
- **Borders**: Rounded corners (6px, 8px, 12px, 16px, 20px)
- **Shadows**: Subtle box-shadows with rgba colors

### Animation Patterns
- CSS keyframes for continuous animations (pulse, glow)
- Transform transitions for hover states
- Backdrop-filter blur effects for modern glassmorphism

### Component Patterns
- Feature cards with gradient borders and hover effects
- Navigation with mobile hamburger menu
- Hero sections with animated background elements
- Pill-shaped badges for feature highlights
## File Naming Conventions

- Components: PascalCase (`Button.tsx`, `Header.tsx`)
- Utilities: camelCase (`utils.ts`, `helpers.ts`)
- Pages/Routes: lowercase (`page.tsx`, `layout.tsx`)
- Directories: kebab-case (`api-routes/`) or lowercase (`components/`)

## State Management

For simple needs:
- `useState` for local component state
- `useContext` for shared state
- Server Components for data fetching

For complex needs (add when necessary):
- Zustand for client state
- React Query for server state
