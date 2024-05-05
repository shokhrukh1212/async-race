import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CarContextProvider } from "./context/CarContext";
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
          <CarContextProvider>
            <App />
          </CarContextProvider>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
);
