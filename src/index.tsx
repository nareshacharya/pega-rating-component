import React from "react";
import ReactDOMClient from "react-dom/client"; // for root rendering
import * as ReactDOMLegacy from "react-dom"; // for web component registration
import register from "react-to-webcomponent";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Rating from "./Rating";

// Register as web component using legacy ReactDOM
customElements.define(
  "pega-rating",
  register(Rating, React, ReactDOMLegacy as any) as CustomElementConstructor
);

// Regular app rendering (optional)
const root = ReactDOMClient.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
