import React from "react";
import ReactDOM from "react-dom/client";
import { WorldProvider } from "./context/WorldContext";
import { HashRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <WorldProvider>
        <App />
        </WorldProvider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);