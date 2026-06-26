import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const divTag = document.getElementById("root");
const root = createRoot(divTag);
root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <main>
    <h1>React Root</h1>
    <p>
      The React root is the official entry point for a React application. It
      acts as a bridge between the standard HTML file and the React engine,
      grabbing a single empty HTML element (usually a div with the ID of 'root')
      and taking complete control over everything inside it so React can
      dynamically inject, update, and manage your component tree.
    </p>
  </main>,
);
