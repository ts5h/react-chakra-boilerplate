# React Boilerplate with Chakra UI

A modern React application built with **Vite**, **TypeScript**, and **Chakra UI V3**. This project demonstrates a clean, maintainable setup with modern development tools and best practices.

## 🚀 Tech Stack

### Core Technologies
- **React 19** - Latest React with improved performance and features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool with HMR (Hot Module Replacement)

### UI & Styling
- **Chakra UI V3** - Modern, accessible component library
- **Emotion** - CSS-in-JS styling solution
- **SCSS** - Enhanced CSS with variables and nesting support
- **next-themes** - Dark/Light mode support

### Development Tools
- **Biome** - Fast formatter, linter, and import organizer (replaces ESLint/Prettier)
- **React Icons** - Popular icon library integration
- **pnpm** - Fast, disk space efficient package manager

## ✨ Features

- ⚡ **Lightning Fast** - Vite provides instant HMR and optimized builds
- 🎨 **Modern UI** - Beautiful, accessible components with Chakra UI V3
- 🌙 **Dark Mode** - Built-in theme switching with system preference detection
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔧 **Type Safe** - Full TypeScript support with strict configuration
- 🧹 **Clean Code** - Automated formatting and linting with Biome
- 📦 **Optimized** - Tree-shaking and code splitting for minimal bundle size

## 🛠️ Getting Started

### Prerequisites
- Node.js 20.x or higher
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chakra-test
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📝 Available Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Check code quality with Biome
- `pnpm lint:fix` - Fix auto-fixable linting issues
- `pnpm format` - Format code with Biome

## 🏗️ Project Structure

```
chakra-test/
├── src/
│   ├── components/
│   │   └── ui/           # Chakra UI provider and utilities
│   ├── assets/           # Static assets (images, icons)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.scss       # Global styles
├── public/              # Static files
├── biome.json          # Biome configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## 🎨 Chakra UI Integration

This project uses **Chakra UI V3** with the following setup:

- **Provider Configuration** - Custom provider with theme and color mode support
- **Component Library** - Pre-built, accessible components
- **Theme System** - Consistent design tokens and responsive utilities
- **Dark Mode** - Automatic system preference detection with manual toggle

### Key Components Used
- Layout components (`VStack`, `HStack`, `Box`)
- Typography (`Heading`, `Text`)
- Interactive elements (`Button`, `Link`, `Image`)
- Theme-aware styling with `_dark` prop

## 🔧 Development Tools Setup

### Biome Configuration
The project uses Biome for:
- **Formatting** - Consistent code style with 2-space indentation
- **Linting** - Code quality rules with TypeScript support
- **Import Organization** - Automatic import sorting and cleanup

### TypeScript Configuration
- Strict type checking enabled
- Path mapping configured (`@/*` → `./src/*`)
- Modern ES2020+ target with bundler module resolution

### Vite Configuration
- React plugin with Fast Refresh
- Path aliases for clean imports
- Optimized production builds

## 🌟 Best Practices Implemented

1. **Modern React Patterns** - Functional components with hooks
2. **Type Safety** - Comprehensive TypeScript integration
3. **Component Composition** - Reusable, composable UI patterns
4. **Performance** - Code splitting and tree-shaking
5. **Accessibility** - Chakra UI ensures WCAG compliance
6. **Developer Experience** - Fast builds, HMR, and automated tooling

## 📚 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Chakra UI V3 Docs](https://www.chakra-ui.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Biome Documentation](https://biomejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and formatting (`pnpm lint:fix && pnpm format`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).