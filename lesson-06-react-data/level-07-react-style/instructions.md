# React Style

## Objective

Configure Tailwind and TW Elements for React projects.

## Benefits

There are noticable differences in how Tailwind and TW Elements are installed and used in React projects.

## Complete these tasks

1. In your system's file explorer or file picker, copy your `react-template` folder into this level folder. The template should render `Header`, `Main`, and `Footer` components.
2. In this level folder, rename `react-template` to `react-style`.
3. Start the Vite server and open a web browser to the URL provided by Vite.
4. In the `src/components/` folder, let the `Header` component render the title `Style React with Tailwind and TW Elements`.
5. View the page to make sure it runs without errors.
6. In a new terminal, navigate to the `react-style` folder.
7. In the terminal, install (or add) these packages - `tailwindcss@3`, `postcss`, `autoprefixer`, and `tw-elements`.
8. In the terminal, initialize Tailwind with `npx tailwindcss init --postcss`. This will create the files `tailwind.config.js` and `postcss.config.js`.
9. In `tailwind.config.js`, add `"./index.html"`, `"./src/**/*.{html,js,ts,jsx,tsx}"`, and `"./node_modules/tw-elements/js/**/*.js"` to the `content` array.
10. In `tailwind.config.js`, add `require("tw-elements/plugin.cjs")` to the `plugins` array.
11. On the line after `plugins`, add `darkMode: "class"`.
12. Adjacent or next to `index.html`, create the file `style.css`.
13. In `style.css`, add the CSS code to connect Tailwind and TW Elements. See details below. Some warnings may appear, but those can be ignored.
14. In `index.html`, use the `link` tag to connect `style.css` in the `head` tag.
15. View the page to make sure it runs without errors.
16. In the `components` folder, create the file `Slides.jsx` to export the `Slides` component.
17. In `Slides`, `return` the TW Elements HTML code for a carousel.
18. View the page. There will be errors.
19. Code the following tasks from scratch. Don't copy/paste.
20. To fix comment errors, replace HTML comments with JavaScript comments.
21. To fix class errors, replace `class=` with `className=`.
22. To fix style errors, convert `style` strings into objects and convert hyphenated CSS properties to camelCase.
23. To fix stroke errors, convert hyphendated `stroke-` attributes to camelCase.
24. To fix render or visual issues, restart the server.
25. View the page to make sure it runs without errors and visual issues. Observe that the carousel renders, but doesn't work properly.
26. In the TW Elements website, view the JavaScript code for the carousel. In React, `initTWE` must run in the mount phase, after the carousel code has mounted.
27. Set up the `Slides` component to track the mount phase. Use `useState`, `didMount`, `setDidMount`, `componentDidMount`, `useEffect`, and an empty array of dependencies.
28. In `Slides.jsx`, import the items listed in the TW Elements website - `Carousel` and `initTWE`.
29. In `componentDidMount`, use `initTWE` as instructed in the TW Elements website.
30. View the page in the browser. The carousel should work properly.
31. In the `Main` component, add a `p` tag with a message that explains how to render TW Elements components.
32. View the page in the browser.

## More Information

- [Tailwind v3 installation instructions](https://v3.tailwindcss.com/docs/installation)
- [TW Elements installation instructions](https://tw-elements.com/docs/standard/getting-started/quick-start/#vite)
- [TW Elements carousel](https://tw-elements.com/docs/standard/components/carousel/)
- TW Elements requires Tailwind version 3, not version 4. View `package.json` for the version that is installed. It's the right version if it starts with `3`.
- In React, the `class` attribute must be replaced with `className`.
- In React, most hyphenated attributes are camelCased. For example, replace `min-width` with `minWidth`.
- In React, the `style` attribute accepts a JavaScript object instead of a string. For example, replace `style="color:red; max-width:100px"` with `style={ {color:"red", maxWidth: "100px"} }`.
- In the `style` attribute, hyphenated CSS properties must be converted to camelCase for React projects.
- Comments for JavaScript are different from comments for HTML.
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
- With `pnpm install` or `pnpm add`, multiple packages can be installed, separated by spaces. Example: `pnpm add package1 package2 package3`
- Comments for JavaScript start with `//` or wrapped with `/*   */`.
- Comments for HTML are wrapped with `<!--    -->`.

## Hints

- `npm run dev` starts a Vite server. Make sure to install the `node_modules` folder with `pnpm install` or `npm install`.
