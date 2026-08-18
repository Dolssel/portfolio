# React + TypeScript learning roadmap

Goal: **job-ready as a front-end React developer** — able to pick up tickets on
a real React + TS codebase and be productive without hand-holding.

Rough estimate at ~6 hrs/week: **~4 months** (concepts ~2 months, then real
projects to build fluency). See the effort table at the bottom.

Format: `[x]` done · `[~]` in progress · `[ ]` not started. Each lesson lists
the React ideas and the **TS concepts** flagged along the way (per the standing
"always flag TS" rule).

---

## Phase 1 — Core concepts (the lessons)

- [x] **0. Setup & tooling** — Vite, dev server, Node 24 via nvm, `npm.cmd`
      (AllSigned policy), project structure, vanilla → React → TS conversion.
      *TS: tsconfig `strict`, `.d.ts` ambient types.*
- [x] **1. Components & JSX** — components are functions returning markup;
      `className`; `{ }` expressions; one root element; console discipline.
- [x] **2. Props** — data flows down, read-only; passing & destructuring;
      conditional rendering `{cond && <x/>}`; data-driven UI.
      *TS: `interface` for props, typed arrays, optional `?`.*
- [x] **3. useState** — state as a per-render snapshot (why `const`); the setter
      (Rule 1); functional updater `prev => …` (Rule 2); state is per-instance.
      *TS: generics + inference, contextual typing, types erased at runtime.*
- [x] **4. useEffect** — after render / on change; dependency array (none/[]/[deps]);
      cleanup (start→stop); StrictMode double-run; built a BackToTop button
      (scroll listener + cleanup + `return null`). Dissected `useReveal`.
- [x] **5. Lifting state up** — moved per-card `likes` from ProjectCard up into
      Projects; data-down/events-up; controlled component; derived state (total);
      immutable object update `{...prev, [id]: …}`; Array.reduce; closures baking
      in args (parent wraps `() => handleLike(id)`, child uses bare `onClick={onLike}`).
- [x] **6. Forms & controlled inputs** — `value` + `onChange` round-trip; one
      state object + one `name`-based handler; `onSubmit`/`preventDefault`;
      controlled vs uncontrolled (saw state/display disagree on Clear). Built
      the contact form. *TS: `ChangeEvent`/`FormEvent`, form state interface.*
- [x] **7. useContext** — prop-drilling problem → Context (createContext /
      Provider / useContext); pro pattern = ThemeProvider + `useTheme` hook with
      undefined-guard; built light/dark toggle via `data-theme` + CSS var
      overrides; saw thrown error blank the tree (→ error boundaries later).
      *TS: string-literal union, generic context, `ReactNode`, guard narrowing.*
- [x] **8. Routing (react-router)** — SPA fakes navigation; `BrowserRouter`,
      `Routes`/`Route path element`, dynamic `:id` segment, `useParams`, `Link`
      (no reload) vs `<a>`, `useNavigate(-1)`, shared layout outside `<Routes>`,
      `*` fallback. Built Home + ProjectDetail pages; cards link to detail.
      *TS: useParams → `string | undefined` (guard narrows), inline `style` object.*
- [x] **9. Data fetching** — `fetch` in an effect, loading→data via state, async
      fn inside effect, typed response. FULL: the four states (loading/error/
      empty/success); `fetch` doesn't reject on 404 → check `res.ok`;
      `try/catch/finally`; `ignore` flag + cleanup to drop stale results (also
      tames StrictMode double-fetch). Built LatestRepos from the GitHub API.
      *TS: `string | null` error state, `unknown` catch var + `instanceof` narrow.*
- [x] **10. Server state (TanStack Query)** — `QueryClient`/`QueryClientProvider`;
      `useQuery({ queryKey, queryFn })`; queryKey = cache id (dedupe + refetch on
      change); free caching/retries/race-handling; replaced the ~40-line manual
      fetch with ~5. *TS: `data` inferred from queryFn → `T | undefined`, guards
      narrow it; `error` typed `Error`.*
- [x] **11. useReducer & state patterns** — dispatch(action) → reducer(state,
      action) → new state; built a Counter; the KEY judgment = only reach for it
      when state is genuinely complex (contact form correctly left on useState);
      it's the Redux mental model. Doc-app variant selector = future real use.
      *TS: discriminated unions for actions + `switch` narrowing.*
- [x] **12. Performance** — re-render model (state / parent / context; re-render
      is cheap, DOM diff is smart); saw all cards re-render on one like;
      `memo`/`useMemo`(value)/`useCallback`(function) + the new-reference gotcha
      (memo+useCallback travel together); MAIN lesson = don't optimize until you
      measure; React Compiler auto-memoizes. *TS: all infer, no new syntax.*
- [x] **13. Testing** — Vitest + RTL (jsdom, setup.ts w/ jest-dom/vitest +
      IntersectionObserver stub, `npm test`). render→find→assert; test BEHAVIOR
      not internals; getByText(throws)/queryByText(null); `/text/i` regex.
      FULL: form typing/submit (`userEvent.setup`, `getByLabelText`, `user.type`),
      provider-wrapping (render inside `ThemeProvider`), routed components
      (`MemoryRouter` + `initialEntries`), renderWithProviders helper. 5 passing
      tests across About/Contact/Navbar/ProjectDetail.
- [x] **14. Custom hooks (deep)** — a custom hook = a `use`-prefixed function that
      calls other hooks to extract reusable logic. Built `useLocalStorage<T>`
      (lazy init, JSON serialize, `[value,setValue] as const`) → wired into
      ThemeProvider so the theme persists across reloads (hooks composing).
      Rules of hooks + WHY (React tracks hooks by call ORDER → top level only;
      only from React fns). Key clarity: calling a hook ≠ calling a setter
      (setters/dispatch/values are usable anywhere, incl. event handlers).
- [x] **15. Build & deploy** — `npm run build` → static `dist/` (minified,
      hashed, tree-shaken); SPA deep-link 404 gotcha → `vercel.json` rewrite +
      `public/_redirects`; `.gitignore`; git init/commit; pushed to personal
      GitHub (Dolssel/portfolio); deployed on Vercel (Hobby/free, auto-detects
      Vite, auto-redeploys on push). **LIVE:** portfolio-sage-seven-61.vercel.app
      — deep-link refresh verified working. 🎉 PHASE 1 COMPLETE.

## Phase 2 — Real projects (where fluency actually happens)

Concepts get you ~halfway. These build the instinct. Aim for 2–3.

- [ ] **Project A — this portfolio, finished** — real content, contact form,
      theme toggle, routing, deployed.
- [ ] **Project B — consumes a real public API** — e.g. a movie/weather/GitHub
      browser: search, list, detail page, loading/error states, pagination.
      This forces async + routing + state architecture together.
- [ ] **Project C — something with meaningful local state** — a kanban board,
      expense tracker, or similar: forms, `useReducer`, persistence
      (localStorage), maybe drag-and-drop.

## Phase 3 — Ongoing (beyond job-ready)

- [ ] Accessibility (a11y) fundamentals
- [ ] Large-app state architecture
- [ ] A component library or CSS framework (Tailwind, or a design system)
- [ ] Deeper TS (utility types, generics in components, narrowing)
- [ ] CI, code review habits, performance profiling

---

## Effort → calendar

| Hours / week            | Concepts (Ph.1) | Job-ready (Ph.1 + Ph.2) |
|-------------------------|-----------------|-------------------------|
| ~3 (one session)        | ~3 months       | **~6 months**           |
| ~6 (two + practice)     | ~6–8 weeks      | **~4 months**           |
| ~12 (serious push)      | ~4 weeks        | **~2.5–3 months**       |

Notes:
- "Job-ready" ≠ senior. Depth (perf, testing culture, big-app state) keeps
  growing for a year+ on a real team — but you can start contributing at the
  4-month mark.
- Your accelerators: already a pro developer (C#/.NET, JS, git, APIs, real
  front-end work) + TypeScript comes nearly free from C#.
- The lessons live in this repo; the vanilla reference is in `../vanilla`.
