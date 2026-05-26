# React

- Library for web and native UI
- Built and maintained by Facebook
- Used to build single page app
- Uses virtual DOM for rendering
- Most popular frontend framework
- Huge community
- Job opportunities

## Virtual DOM

- Light weight copy of real DOM
- Whenever state change happens:
  - React updates the virtual DOM
  - Compares virtual DOM with previous DOM (Diffing)
  - Updates only the changed parts in the real DOM (Reconciliation)
- Faster rendering
- Better performance

## JSX

- JS + HTML code

## Components

- UI Block
- Reusable
- Functional Component, Class Component
- Functional components are stateless components by default
- Class components are stateful components
- Stateful: State/UI can be updated
- Stateless: State can be updated, UI cannot be updated
- Hooks: Special function

## Props

- Properties of Component
- Similar to HTML element attributes

## State

- Mutable(changeable) object
- Whenever state value changes, UI is re-rendered
- State value changes on user interaction, event triggers or API calls.

## Hooks

- Special function
- It enables us to make functional component stateful.

1. useState: used for local state management
2. useEffect: side effects
3. useRef: accessing DOM elements

## React router

- Route is a URL endpoint
- Route defines which component/page to show on URL match

/contact => Contact page
/about => About page
/ => Home page
