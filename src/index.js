import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PokeThemeProvider } from "./components/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <PokeThemeProvider>
      <App />
    </PokeThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
