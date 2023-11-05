import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { TodoProvider } from "./context/TodoProvider";
import { LanguageProvider } from "./context/LanguageProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
