# Next.js

- React.js full-stack framework for web-development
- In addition to building UI, next.js also provides features like routing, rendering, optimization, data fetching, etc.
- It uses react server component
- Opinionated framework (file, folder conventions)

## Features

1. Routing: file based routing
2. Rendering: Server-Side rendering (SSR), Client-side rendering (CSR), Static site generation (SSG)
3. Optimization: Image, file
4. Data fetching/File system
5. API routes
6. Styling

## React server component

### 1. Server component (default)

- All react component in Next.js are server component by default.
- Server side tasks like data fetching, files read, database data fetching, async tasks.
- Cannot use react hooks, events, user interaction.

### 2. Client component

- Can use react hooks, events, user interaction.
- Traditional react components
- Use the directive `use client` at the top of component file
