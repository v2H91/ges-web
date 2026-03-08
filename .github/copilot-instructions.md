# GES App - AI Coding Guidelines

## Architecture Overview
- **Angular 17 standalone application** with Server-Side Rendering (SSR) enabled
- **Feature-based structure**: 
  - `features/` - Page-level components (e.g., `home/`, `services-section/`)
  - `core/components/` - Shared UI components (e.g., `header/`, `footer/`)
- **Layout pattern**: `<app-header>`, `<router-outlet />`, `<app-footer>` in `app.component.html`
- **Routing**: Simple flat routes in `app.routes.ts`, home component at root path

## Key Patterns
- **Standalone components**: All components use `standalone: true`, explicitly import dependencies (e.g., `CommonModule`, other components)
- **Component communication**: Direct imports for child components, no services yet
- **Dynamic content**: Use `*ngFor` for service lists, toggle state for expand/collapse (e.g., `isExpanded` in `services-section`)
- **Styling**: SCSS with FontAwesome icons, Vietnamese text content
- **Data structure**: Services as arrays of objects with `icon`, `title`, `desc` properties

## Development Workflows
- **Start dev server**: `ng serve` (serves at http://localhost:4200/)
- **Build**: `ng build` (outputs to `dist/ges-app/`, enforces bundle budgets: 500kb initial, 2kb/component styles)
- **SSR**: `npm run serve:ssr` for production server rendering
- **Test**: `ng test` runs Karma/Jasmine unit tests
- **Generate components**: `ng generate component features/[name]` for new features

## Conventions
- **Component prefix**: `app-` (configured in `angular.json`)
- **Style language**: SCSS (inline in `angular.json` schematics)
- **File naming**: Kebab-case for folders/files (e.g., `services-section/`)
- **Language**: Vietnamese comments and UI text (business domain: accounting services)
- **Imports**: Explicit standalone imports, no NgModules

## Bundle Constraints
- Initial bundle: 500kb warning, 1mb error
- Component styles: 2kb warning, 4kb error
- Optimize images/assets in `src/assets/images/`

## Example Patterns
- **Service card rendering**: `*ngFor="let item of extraServices"` with `[class]="item.icon"` for dynamic FontAwesome
- **Toggle functionality**: `(click)="toggleServices()"` with conditional display `*ngIf="isExpanded"`
- **Router links**: `routerLink="/" routerLinkActive="active"` for navigation</content>
<parameter name="filePath">/Users/hungvu/Study/angular/ges-app/.github/copilot-instructions.md