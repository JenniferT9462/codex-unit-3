# React Style

## Objective

Configure Tailwind and TW Elements for React projects.

## Benefits

There are noticable differences in how Tailwind and TW Elements are installed and used in React projects.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `react-style`.
3. In the terminal, navigate to the `react-style` folder.
4. Start the Vite server and open a web browser to the URL provided by Vite.
5. In the `src/components/` folder, let the `Header` component render the title `Style React with Tailwind and TW Elements`.
6. View the page to make sure it runs without errors.
7. In the terminal, install these packages - `tailwindcss@3`, `postcss`, `autoprefixer`, and `tw-elements`.
8. In the terminal, initialize Tailwind with `npx tailwindcss init --postcss`. This will create the files `tailwind.config.js` and `postcss.config.js`.
9. In `tailwind.config.js`, add `"./index.html"`, `"./src/**/*.{html,js,ts,jsx,tsx}"`, and `"./node_modules/tw-elements/js/**/*.js"` to the `content` array.
10. In `tailwind.config.js`, add `require("tw-elements/plugin.cjs")` to the `plugins` array.
11. On the line after `plugins`, add `darkMode: "class"`.
12. Adjacent or next to `index.html`, create the file `style.css`.
13. In `index.html`, use the `link` tag to connect `style.css` in the `head` tag.
14. In `style.css`, add the CSS code to connect Tailwind and TW Elements. (See details below.)
15. In the `components` folder, create the file `Slides.jsx` to export the `Slides` component.
16. In `Slides`, `return` the TW Elements HTML code for a carousel.
17. View the page. Observe errors with `class` and `stroke-`.
18. Code the following tasks from scratch. Don't copy/paste.
19. In `Slides`, replace `class=` with `className=`, and convert hyphendated `stroke-` attributes to camelCase.
20. View the page. Observe errors with `style`.
21. In `Slides`, convert the `style` strings to an object. Convert hyphenated CSS properties to camelCase.
22. View the page to make sure it runs without errors. Observe that the carousel renders, but doesn't work properly.
23. In the TW Elements website, view the JavaScript code for the carousel. In React, `initTWE` must run in the mount phase, after the carousel code has mounted.
24. Set up the component to track the mount phase. Use `useState`, `didMount`, `setDidMount`, `componentDidMount`, `useEffect`, an empty array of dependencies, and a `p` tag to render the value of `didMount`.
25. In `Slides.jsx`, import the items listed in the TW Elements website - `Carousel` and `initTWE`.
26. In `componentDidMount`, use `initTWE` as instructed in the TW Elements website.
27. View the page in the browser. The carousel should work properly.
28. In the `Main` component, add a `p` tag with a message that explains how to render TW Elements components.
29. View the page in the browser.

## More Information

- [Tailwind v3 installation instructions](https://v3.tailwindcss.com/docs/installation)
- [TW Elements installation instructions](https://tw-elements.com/docs/standard/getting-started/quick-start/#vite)
- [TW Elements carousel](https://tw-elements.com/docs/standard/components/carousel/)
- TW Elements requires Tailwind version 3, not version 4. View `package.json` for the version that is installed. It's the right version if it starts with `3`.
- In React, the `class` attribute must be replaced with `className`.
- In React, most hyphenated attributes are camelCased. For example, replace `min-width` with `minWidth`.
- In React, the `style` attribute accepts a JavaScript object instead of a string. For example, replace `style="color:red; max-width:100px"` with `style={ {color:"red", maxWidth: "100px"} }`.
- In the `style` attribute, hyphenated CSS properties must be converted to camelCase for React projects.
- Code for connecting Tailwind and TW Elements with `style.css`:

```css
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap");
@tailwind base;

@layer base {
  html {
    @apply text-surface;
    @apply bg-white;
  }
  html.dark {
    @apply text-neutral-50;
    @apply bg-body-dark;
  }
}

@tailwind components;
@tailwind utilities;

p {
  @apply leading-[1.6];
}
```

## Usage Tips

- Use curly braces to insert variables into HTML. Example: `<p>{myVariable}</p>`
- To connect a .css file, the `link` tag needs `rel` and `href`. Example: `<link rel="stylesheet" href="style.css" />`
- With `pnpm`, multiple packages can be installed, separated by spaces. Example: `pnpm install package1 package2 package3`

## Hints

- `npm run dev` starts a Vite server. Make sure to install the `node_modules` folder with `pnpm install` or `npm install`.
