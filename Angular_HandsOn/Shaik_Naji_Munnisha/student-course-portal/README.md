# Student Course Portal — Digital Nurture 5.0 (Angular v20)

A single Angular application that covers all 10 hands-on exercises:
components & binding, lifecycle hooks, directives & pipes, template-driven
forms, reactive forms, services & DI, routing & guards, HttpClient +
interceptors, NgRx state management, and unit tests.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the mock backend (Hands-On 8/9 — needed for course data)

In one terminal:

```bash
npm run api
```

This starts json-server on `http://localhost:3000` using `db.json`.

## 3. Run the app

In a second terminal:

```bash
npm start
```

Open `http://localhost:4200`.

## 4. Run unit tests

```bash
npm test
```

## Project map (where each hands-on lives)

| Hands-On | Where to look |
|---|---|
| 1 — Setup & first component | `src/app/app.component.*`, `src/app/components/header` |
| 2 — Binding & lifecycle | `src/app/pages/home`, `src/app/components/course-card` |
| 3 — Directives & pipes | `src/app/directives/highlight.directive.ts`, `src/app/pipes/credit-label.pipe.ts` |
| 4 — Template-driven forms | `src/app/pages/enrollment-form` |
| 5 — Reactive forms | `src/app/pages/reactive-enrollment-form` |
| 6 — Services & DI | `src/app/services` |
| 7 — Routing & guards | `src/app/app.routes.ts`, `src/app/guards`, `src/app/pages/course-detail` |
| 8 — HttpClient & interceptors | `src/app/services/course.service.ts`, `src/app/interceptors` |
| 9 — NgRx state | `src/app/store/course` |
| 10 — Unit tests | `*.spec.ts` files (e.g. `course-card.component.spec.ts`, `course.service.spec.ts`) |

## Notes

- Built with Angular 20 standalone components (no NgModules) — this is the
  modern default since Angular 17+.
- `notes.txt` in the project root answers Hands-On 1, Task 1, Steps 2 & 5.
- The enrollment routes (`/enroll`, `/enroll-reactive`) are lazy-loaded via
  `loadComponent` — Angular's standalone equivalent of lazy-loaded feature
  modules — so you'll see a separate chunk load in the Network tab.
