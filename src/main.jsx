import React from "react";
import ReactDOM from "react-dom/client";
import { WorldProvider } from "./context/WorldContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <WorldProvider>
        <App />
        </WorldProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);