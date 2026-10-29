# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router application. Route segments and page layouts live under `app/`, including the `(auth)` and `(dashboard)` groups. Reusable React components are organized under `components/` by feature (`auth`, `dashboard`) or UI role (`buttons`, `charts`, `forms`, `kpis`, `navbar`, `sidebar`). Shared TypeScript types, schemas, and utilities belong in `lib/`. Static images and icons are stored in `public/`. Generated output in `.next/` should not be edited or committed.

## Build, Test, and Development Commands

- `npm run dev` starts the local development server at `http://localhost:3000` with hot reload.
- `npm run lint` runs the configured ESLint checks for Next.js and TypeScript.
- `npm run build` creates a production build and validates the application for deployment.
- `npm start` serves the latest production build locally; run `npm run build` first.

There is currently no test runner configured. Use `npm run lint` and `npm run build` as the minimum validation for changes.

## Coding Style & Naming Conventions

Use TypeScript with strict typing, two-space indentation, semicolons, single quotes, and ES5 trailing commas, matching `.prettierrc`. Use PascalCase for React components, camelCase for functions and variables, and descriptive names for files. Keep route files in the App Router convention (`page.tsx`, `layout.tsx`) and prefer the `@/*` import alias for root-relative imports. Run lint before submitting changes.

## Testing Guidelines

No automated tests or coverage threshold are present yet. When adding tests, keep them close to the related feature and use descriptive names that state the behavior under test. Document any new test command in `package.json` and this guide.

## Commit & Pull Request Guidelines

The history currently contains only an initial commit, so no established message convention is visible. Use short, imperative subjects such as `Add dashboard summary cards`. Pull requests should explain the user-visible change, identify validation commands run, link any related issue, and include screenshots or recordings for UI changes.

## Security & Configuration

Do not commit credentials, tokens, or local environment files. Review changes to authentication forms, schemas, and client-visible configuration carefully; only expose values that are safe for the browser.

## Agent-Specific Instructions

Before changing Next.js code, consult the relevant guidance under `node_modules/next/dist/docs/`, since this project uses Next.js `16.4.2` and may differ from older conventions.
