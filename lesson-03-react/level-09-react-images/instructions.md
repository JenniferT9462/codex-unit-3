# React Images

## Objective

Import local images into a React project.

## Benefits

In React, local images can be imported as variables and inserted into HTML tags.

## Complete these tasks

1. In your system's file explorer or file finder, copy your `react-template` folder into this level folder.
2. In this level folder, rename `react-template` to `react-images`.
3. In the folder `react-images/src/assets/`, add 3 image files.
4. In the terminal, navigate to the `react-images` folder.
5. Start the Vite server with `npm run dev`.
6. Open a web browser to the URL provided by Vite.
7. In `App.jsx`, let the `App` function return a `main` tag.
8. In the `main` tag, add an `h1` tag, a `p` tag, and 3 `img` tags.
9. Let the `h1` title be `React Images`
10. Let the `p` tag describe how to add local images with React. Use your own words. Don't copy/paste.
11. For now, let the image sources be curly braces. Example: `<img src={} />`
12. View the page in the browser.
13. Import the local images into variables. Example: `import pic1 from "./assets/pic1.jpg"`
14. Insert the picture variables into the empty curly braces. Example: `<img src={pic1} />`
15. View the page in the browser.
16. In `App.css`, use flexbox to arrange the images horizontally.
17. In `index.css`, add at least 2 styles to improve the website's layout and appearance.
18. View the page in the browser.

## More Information

- In React, curly braces `{}` embedded in HTML can contain JavaScript code.
- In this exercise, the curly braces contain JavaScript variables.
- With React, local images can be imported as variables, then inserted into HTML.

## Usage Tips

- To import a picture into a React project, use `import`, a variable name, `from`, and the relative image path. Example: `import myPicture from "./assets/myPicture.jpg";`
- To insert a picture, use curly braces and the picture variable as the image `src`. Example: `<img src={myPicture} />`

## Hints

- If the `node_modules` folder isn't installed - In the terminal, navigate to the project folder, then run `npm install`. NPM packages for the project will be installed. An internet connection is required to download the packages.
