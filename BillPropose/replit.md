# Overview

This is a full-stack web application for legislative bill management and display, specifically featuring the "National Resilient Infrastructure Act of 2024". The application presents complex legislative content in an organized, tabbed interface that allows users to explore different aspects of infrastructure policy including climate resilience standards, cybersecurity requirements, workforce development, and innovation initiatives.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for full-stack type safety
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for bill management (`/api/bills`, `/api/bills/:id`)

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Schema**: Defined bill and user entities with JSON content storage for flexible legislative data
- **Migration**: Configured with Drizzle Kit for database schema management

## Development Architecture
- **Monorepo Structure**: Organized with `client/`, `server/`, and `shared/` directories
- **Shared Types**: Common TypeScript interfaces and schemas shared between frontend and backend
- **Hot Reload**: Vite development server with Express middleware integration
- **Path Aliases**: Configured TypeScript paths for clean imports (`@/`, `@shared/`)

## UI Component System
- **Design System**: shadcn/ui component library with Radix UI primitives
- **Theming**: CSS custom properties for consistent color scheme and spacing
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: Radix UI components ensure ARIA compliance and keyboard navigation

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and data fetching
- **express**: Node.js web framework for API endpoints

## UI and Styling Dependencies
- **@radix-ui/***: Comprehensive set of low-level UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for building variant-based component APIs
- **lucide-react**: Icon library with React components

## Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit

## Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation (via drizzle-zod)

## Date and Time
- **date-fns**: Modern JavaScript date utility library

## Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-zod**: Zod schema generation from Drizzle ORM schemas