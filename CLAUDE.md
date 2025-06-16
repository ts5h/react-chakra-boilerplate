# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager. Key commands:

- `pnpm dev` - Start development server (runs on http://localhost:5173)
- `pnpm build` - Build for production (runs TypeScript compilation then Vite build)
- `pnpm lint` - Check code with Biome linter
- `pnpm lint:fix` - Auto-fix linting issues with Biome
- `pnpm format` - Format code with Biome
- `pnpm preview` - Preview production build locally

## Architecture Overview

This is a **React 19 + Vite + Chakra UI V3** boilerplate with TypeScript and modern tooling.

### Key Architectural Patterns

**Provider Pattern for Chakra UI**:
- Main provider in `src/components/ui/provider.tsx` wraps ChakraProvider with ColorModeProvider
- Color mode management uses `next-themes` library integrated with Chakra UI V3
- Custom color mode utilities in `src/components/ui/color-mode.tsx` provide theme switching

**Path Aliases**:
- `@/*` maps to `./src/*` (configured in vite.config.ts and tsconfig)
- Use `@/components/ui/provider` instead of relative imports

**Styling Strategy**:
- Chakra UI V3 with built-in design system
- SCSS support for global styles (`src/index.scss`)
- Theme-aware components using `_dark` props
- System font stack: `system-ui, Avenir, Helvetica, Arial, sans-serif`

### Component Structure

**UI Components** in `src/components/ui/`:
- `provider.tsx` - Main app provider wrapper
- `color-mode.tsx` - Theme switching utilities and components
- Additional UI components should follow this pattern

**App Entry Points**:
- `src/main.tsx` - React app bootstrap with StrictMode and Provider
- `src/App.tsx` - Main application component

## Tool Configuration

**TypeScript**: Split configuration with app and node configs
- Main: `tsconfig.json` (references only)
- App: `tsconfig.app.json` (React app code)
- Node: `tsconfig.node.json` (Vite config)

**Biome**: Unified formatter/linter replacing ESLint+Prettier
- 2-space indentation, single quotes, minimal semicolons
- Organized imports enabled
- `noExplicitAny` rule disabled for flexibility

**Vite**: Fast build tool with React plugin and path aliases

## Key Dependencies

**UI & Styling**:
- `@chakra-ui/react` (V3) - Component library
- `@emotion/react` - CSS-in-JS (Chakra dependency)
- `next-themes` - Dark/light mode management
- `react-icons` - Icon library (uses Lucide icons: `LuMoon`, `LuSun`)

**Build & Dev**:
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React support for Vite
- `typescript` - Type checking
- `@biomejs/biome` - Formatting and linting
- `sass` - SCSS processing