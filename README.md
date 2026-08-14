# Portfolio — React + TypeScript training project

The same portfolio as `../vanilla`, rebuilt with React + TypeScript + Vite. Use
the two versions side by side: every concept here has a vanilla counterpart.

## Running it

```powershell
.\dev.ps1        # starts the dev server (uses Node 24 via nvm path, global Node untouched)
```

Then open http://localhost:5173. Edits to any file under `src/` appear in the
browser instantly (Fast Refresh) — no manual reload.

Other commands (prefix PATH with Node 24 first, like dev.ps1 does):

| Command           | What it does                                          |
|-------------------|-------------------------------------------------------|
| `npm run dev`      | Dev server with hot reload                           |
| `npm run build`    | Type-check (`tsc`) then production build → `dist/`   |
| `npm run preview`  | Serve the `dist/` build locally to check it          |
| `npm run type-check` | Type-check only, no build (fast feedback)          |

## How a request flows

1. Browser loads `index.html` — nearly empty, just `<div id="root">` and a
   `<script type="module" src="/src/main.jsx">`.
2. Vite intercepts that import, compiles the JSX on the fly, and serves it.
3. `main.jsx` calls `createRoot(...).render(<App />)` — React builds the whole
   UI inside `#root`.
4. `App.jsx` composes the page from components; each component returns JSX
   describing its part of the UI.
5. When state changes (e.g. the menu opens), React re-renders ONLY the
   affected component and patches the real DOM minimally.

## File map

```
index.html                  the single real HTML page (just #root + script)
tsconfig.json               TypeScript compiler config (strict mode on)
vite.config.ts              build tool config (the react() plugin = JSX support)
package.json                dependencies + the npm scripts above
src/
  main.tsx                  entry point: mounts <App /> into #root
  App.tsx                   root component: page layout
  index.css                 global styles (same as the vanilla version)
  types.ts                  shared interfaces: Skill, Project
  vite-env.d.ts             ambient types (lets TS understand .css/asset imports)
  data/
    skills.ts               content as typed arrays — edit these to
    projects.ts             update the portfolio without touching UI code
  hooks/
    useReveal.ts            generic custom hook: reveal-on-scroll (IntersectionObserver)
  components/
    Navbar.tsx              ← useState (mobile menu open/closed)
    Hero.tsx                ← simplest possible component: just markup
    Section.tsx             ← props (typed via interface) + children
    About.tsx
    Skills.tsx              ← rendering lists with .map() + key
    Projects.tsx
    ProjectCard.tsx         ← child component receiving a typed prop
    Contact.tsx
    Footer.tsx
```

## Vanilla → React translation table

| In `../vanilla`                                   | Here                                      |
|---------------------------------------------------|-------------------------------------------|
| `classList.toggle("open")` on click               | `useState` + computed `className` (Navbar) |
| `document.querySelectorAll(".section")` + observer| `useReveal` hook + `ref` (Section)         |
| 3 copy-pasted skill cards in HTML                 | `skills.map(...)` over a data array        |
| `getElementById("year").textContent = ...`        | `{year}` rendered inline (Footer)          |
| One big HTML file                                 | One component per concern                  |

## Key concepts to study, in order

1. **JSX** — HTML-like syntax in JS. Differences: `className` not `class`,
   `{}` to embed any JS expression, every component returns ONE root element.
2. **Components** — functions returning JSX. Capitalized names. Composition
   over repetition.
3. **Props** — read-only inputs passed like attributes: `<ProjectCard project={p} />`.
   Data flows down, parent → child.
4. **State (`useState`)** — data that changes over time and belongs to a
   component. Changing state re-renders. Never mutate it directly.
5. **Lists & keys** — `.map()` to render arrays; `key` lets React track items
   between renders.
6. **`children`** — the JSX you nest inside a component (see Section.jsx).
7. **Effects (`useEffect`)** — escape hatch for things outside React: DOM
   observers, timers, fetch. Cleanup function prevents leaks.
8. **Custom hooks** — extract reusable stateful logic (useReveal.js).

## Exercises (roughly increasing difficulty)

1. Add a 4th skill card by editing only `src/data/skills.js`.
2. Add a `link` field to projects and render a "View project →" anchor in
   `ProjectCard.jsx` only when the field exists (conditional rendering:
   `{project.link && <a ...>}`).
3. Re-implement the active-nav-link highlight from `vanilla/script.js`
   (hint: state in Navbar + an IntersectionObserver effect, or lift it into
   a `useActiveSection` custom hook).
4. Add a dark/light theme toggle: `useState` in App, pass the value down,
   switch CSS variables with a `data-theme` attribute on `<body>`.
5. Add a contact form with controlled inputs (`value` + `onChange`).
6. Split `index.css` into CSS Modules (`Navbar.module.css`, etc.) and see
   what changes.
7. Install `react-router-dom` and turn each section into a real page.

## Next steps after this project

- Data fetching (`fetch` in effects → then TanStack Query)
- A component library or Tailwind CSS
- Testing with Vitest + React Testing Library
