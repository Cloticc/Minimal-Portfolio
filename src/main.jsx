import "./tailwind.css";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./context/MyContext";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
