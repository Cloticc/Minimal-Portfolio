import "./tailwind.css";

import { BrowserRouter, HashRouter } from "react-router-dom";

import { App } from "./App";
import { MyContextProvider } from "./context/MyContext";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </HashRouter>
  </React.StrictMode>
);
