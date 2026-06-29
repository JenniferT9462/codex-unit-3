import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const bodyTag = document.body;
const root = createRoot(bodyTag);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
