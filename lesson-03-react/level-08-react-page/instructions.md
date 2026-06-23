# React Template

## Objective

Use a custom React template for new projects.

## Benefits

Using your own custom template for a new project is much faster than scaffolding a new project.

## Complete these tasks

1. In your system's file explorer or file finder, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-page`.
3. In the terminal, navigate to the `react-page` folder.
4. Start the Vite server with `npm run dev`.
5. Open a web browser to the URL provided by Vite.
6. In `App.jsx`, let the `App` function return a `main` tag.
7. In the `main` tag, add HTML tags to create a web page.
8. The web page should at least have an `h1` tag, a `p` tag, and 3 `img` tags.
9. Let the `h1` title and paragraph describe a product.
10. Let the image sources be URLs from the internet.
11. View the page in the browser.
12. In `App.css`, use flexbox to arrange the images horizontally.
13. In `index.css`, add at least 2 styles to improve the website's layout and appearance.
14. View the page in the browser.

## More Information

- To use your custom templates, manually copy them to another folder.
- A custom template lets you start new projects with minimal code that you usually use.
- To render a web page, return HTML tags with the `App` function.
- `App.css` should contain styles specific to a particular page.
- `index.css` should contain styles to be applied to all pages.

## Usage Tips

- To stop the Vite server, in the terminal, type q then press ENTER.
- For now, use URLs as image sources. Local images will be used later.
- For Flexbox, use a `div` to contain the items, use `display: flex` to designate the `div` as a Flexbox container, then set `flex: 1` on each item. [Flexbox reference](https://www.w3schools.com/css/css3_flexbox.asp)

## Hints

- If the `node_modules` folder isn't installed - In the terminal, navigate to the project folder, then run `npm install`. NPM packages for the project will be installed. An internet connection is required to download the packages.
