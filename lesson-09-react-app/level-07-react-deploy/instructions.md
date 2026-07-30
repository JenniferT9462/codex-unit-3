# React Deploy

## Objective

Deploy a React app to GitHub and include documentation.

## Benefits

React apps can be deployed to GitHub, but a few changes must be made to navigation.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `404-page` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed.
3. Set up the website: In your system's file explorer or file picker, copy your `404-page` folder from a previous level into this level folder. In this level folder, rename `404-page` to `react-deploy`. Change the title of the website to `Deploy a React Site to GitHub Pages`. In the terminal, navigate to the `react-deploy` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. It should work without errors after `node_modules` are installed.
4. Use a separate VS Code workspace: With a new VS Code window, open the `react-deploy` folder directly. Save the project as a workspace. The name `react-deploy` should automatically be presented. This makes it a standalone frontend project separate from the `codex-unit-3` workspace.
5. Add source control to the frontend folder: Open the terminal from the `react-deploy` workspace. It should automatically start in the `react-deploy` folder. Initialize source control by running the command `git init`. This will add source control for the `react-deploy` folder. Commit the files.
6. Build the website to distributable files: In the terminal, run the command `npm run build`. Vite will create the `dist` folder and bundle the website code into it. Observe that there are less files in the `dist` folder than in your project. Bundling them together helps them run efficiently in the browser.
7. Commit the build: The `dist` folder should be committed, but by default, `.gitignore` may block it. Remove `dist` from `.gitignore`. Commit the files in the `dist` folder.
8. Create the online repo: In the GitHub website, create a repository called `react-deploy`. Default settings are ok.
9. Push to the repo: In VS Code, add a remote. Give it the URL to the `react-deploy` repository. Set the name of the remote to `origin`. Push to the `origin`.
10. Set up GitHub pages: In the GitHub website, go to `Settings` for the `react-deploy` repo. Then click on `Pages` in the sidebar. In the `Build and deployment` section, choose `GitHub Actions`. In the `Static HTML` card, click on `Configure`. On line 40 set `path: './dist'` which tells GitHub to render the files in the `dist` folder. Then click on `Commit changes` at the top right to save the changes.
11. View the deployed website in GitHub pages: Go back to `Settings` → `Pages`. Within 60 seconds, the link to your deployed website will appear. Open the link. Observe `/react-deploy/` in the browser URL address. That is the repo root path. Then open DevTools. Observe any file errors in the console.
12. Sync the repo: Because a commit was done through the GitHub website, `Pull from` the `origin` to get the latest changes locally with VS Code.
13. Create the repo root path: With VS Code, in the `react-deploy/public/` folder, create the file `repoRoot.js`. Let it export a string with the name of your repo, surrounded by forward slashes. Example: `export const repoRoot = "/react-deploy/"`. This is the same as the root path of your home page on GitHub. Because GitHub Pages renders repos in a subfolder, the repo root path is required.
14. Configure Vite to use the repo root path: With VS Code, in the `react-deploy` folder, view the file `vite.config.js`. Import the repo root path. Example: `import {repoRoot} from "./public/repoRoot";`. In the exported object, add the `base` property and set it to the repo root. Example: `base: repoRoot`. That configures Vite to use the GitHub root path.
15. View the site locally. After fixing import errors, observe the repo root in the browser address bar, but the site renders `Page404`. Observe that clicking on navbar links removes the repo root from the address bar.
16. Use the repo root for routing and navigation: In VS Code, open `App.jsx`. Import the repo root from the `public`. Example: `import { repoRoot } from "../public/repoRoot";`. Change the `Route` paths to include the repo root. Example: `path={repoRoot + "apiKey"}`. Note that the forward slash is removed from the path. In `Navbar.jsx`, import the repo root, then change the links to include the repo root. Example: `to={repoRoot}`. In `Page404.jsx`, import the repo root, then use it for `useRedirect`.
17. View the site locally. After fixing path errors, observe that each page renders properly with the repo root in the browser address bar. Observe that navigating to an invalid page properly renders `Page404`.
18. Deploy the updates to GitHub: In the terminal, rebuild the website with the command `npm run build`. Commit the changes. Push the changes to GitHub.
19. View the deployed site. Observe that clicking links in the navbar keeps the root path. Observe that refreshing a page other than the home page causes a 404 error. Observe that `Page404` is not rendered when an invalid URL is visited.
20. Use a custom GitHub 404 page: With your system's file explorer or file picker, move the file `404.html` into the `react-deploy/public/` folder. GitHub will automatically load this file for 404 errors. This file saves invalid URLs in `localStorage`, then uses `repoRoot.js` to redirect to the home page.
21. Render `Page404` when GitHub loads `404.html`: Move the file `RedirectGitHub404.jsx` to the `src/components/` folder. In `App.jsx`, import `RedirectGitHub` and render it below the `BrowserRouter` opening tag. The `RedirectGitHub404` component is the bridge between `404.html` and `Page404`.
22. Deploy the updates to GitHub: In the terminal, rebuild the website with the command `npm run build`. Commit the changes. Push the changes to GitHub.
23. View the deployed site. Observe that refreshing a page other than the home page works. Observe that `Page404` renders when an invalid URL is visited.
24. Add documentation: In VS Code, create (or edit) the file `README.md` adjacent to `package.json`. In `README.md`, add (or edit) the title. Example: `# React Deploy`. Add (or edit) the subtitle. Example: `## How to deploy a React website to GitHub`. Then add numbered instructions explaining in your own words how to deploy a React website to GitHub.
25. Deploy the updates to GitHub: In the terminal, rebuild the website with the command `npm run build`. Commit the changes. Push the changes to GitHub.
26. View the `react-deploy` repo and its files in the GitHub website. Observe that `README.md` is displayed, providing information about your website.

## More Information

- GitHub will either use its own 404 page or `404.html` that you provide.
- Packages that your React website needs, like `react` and `react-router`, are in `node_modules`. Running the `npm run build` command bundles your code with necessary code from `node_modules`.
- The `node_modules` folder should not be pushed to GitHub. Your website only uses some code from `node_modules` - the code that was imported. The `build` script applies a concept called `tree shaking` - bundling together the code that your website actually uses and leaving out unused code.
- By default, GitHub deploys `index.html` from the root of the repository. GitHub Actions is required to deploy from a different folder.
- By default, the root path for Vite is `/`. The `base` property in `vite.config.js` sets a different root path. Example: `base: "/react-deploy/"`
- GitHub Pages deploys websites to a subfolder named after the repo. Example `/react-deploy/`. The subfolder is the root path for repos deployed by GitHub Pages.
- To properly deploy a React website to GitHub Pages, Vite can be used to configure the website to use the repo root path.
- The database password should not be anywhere in the website code because all website code can be viewed publicly.
- README.md

## Usage Tips

- When changes are pushed to an online GitHub repo, it can take up to 30 seconds to appear.
- When an online GitHub repo is updated, it can take up to 60 seconds for GitHub Pages to render the changes.
- The `git add .` command stages changes in the current folder.
- The `git commit -m "this is the commit message"` commits changes with a message.
- The `git push` command pushes changes to the remote `origin` repo.

## Hints

- It helps to have a VS Code workspace for projects that will be deployed to the internet.
- Commands in NPM scripts can be chained with `&&`. Example: `"deploy": "vite build && git add ."`
- Use `\"` to include quotes in quotes. Example: `"git commit -m \"updated files\""`
