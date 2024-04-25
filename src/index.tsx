import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/globalStyle.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
  palette: {
    mode: "light",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
);
