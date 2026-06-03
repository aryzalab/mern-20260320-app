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

## Routing

- File based routing
- All routes must be inside `src/app` directory
- Every route must have `page.js` or `page.tsx` file
- `page.js` or `page.tsx` must have a default export

1. Simple routes

- Create a folder inside /src/app and add a page.js file
- /src/app/about/page.js
- /src/app/contact/page.js

2. Nested routes

- Create a folder inside folder for nested routes
- /src/app/courses/frontend/react/page.js
- /src/app/courses/frontend/next/page.js
- /src/app/courses/backend/express/page.js
- /src/app/courses/backend/laravel/page.js

3. Dynamic routes

- Create a folder enclosed by []
- /src/app/products/[id]/page.js

4. Nested dynamic routes

- /src/app/products/[id]/reviews/[reviewId]/page.js

5. Catch all segments

- /src/app/blogs/[...slug]/page.js

6. Private folders

- /src/app/_folder/

7. Route groups

- /src/app/(auth)
