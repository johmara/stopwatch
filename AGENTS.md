# Agent Guidelines for Multi-Stopwatch Timer

## Build/Test Commands
- **Dev server**: `npm start` (serves at http://localhost:4200)
- **Build**: `npm run build` (production build with budgets: 500kb/1mb initial, 20kb/40kb per component style)
- **Build with watch**: `npm run watch`
- **Tests**: `npm test` (no tests currently configured)

## Code Style
- **Framework**: Angular 19 LTS, module-based (NOT standalone components)
- **TypeScript**: Strict mode enabled, TypeScript 5.6 (`strict: true`, `noImplicitReturns`, `noFallthroughCasesInSwitch`)
- **Imports**: Angular core imports first, then interfaces, alphabetically within groups
- **Types**: Explicit types required; use interfaces for data models (e.g., `Stopwatch`)
- **Naming**: camelCase for properties/methods, PascalCase for classes/interfaces, kebab-case for CSS classes
- **Templates**: Use `$any()` for type casting in templates, `*ngIf`/`*ngFor` for structural directives
- **Styling**: CSS (not SCSS), CSS custom properties for theming (`:root` light, `.dark-mode` dark)
- **Error Handling**: Try-catch for localStorage operations, console.error for failures
- **Comments**: Brief inline comments for non-obvious logic, no JSDoc

## Theme Implementation
- Light theme: `:root` CSS variables matching johmara.github.io
- Dark theme: `.dark-mode` class on `document.documentElement`
- Theme service pattern: `isDarkMode` boolean, `toggleTheme()`, `applyTheme()` methods

## Deployment
- GitHub Actions auto-deploys to GitHub Pages on push to main
- Base href: `/stopwatch/` for GitHub Pages routing
