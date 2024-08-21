import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/system";
// import {createThem}
const theme = createTheme({
  breakpoints: {},
  typography: {},
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.1)", // Custom boxShadow for level 1
    "0px 3px 6px rgba(0, 0, 0, 0.3), 0px 2px 4px rgba(0, 0, 0, 0.2)",
  ],
  zIndex: {},
  spacing: 150,
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          border: "10px solid red",
          backgroundColor: "#121212", // Màu nền mặc định
        },
      },
    },
  },
  shape: {
    borderRadius: 1,
  },
  palette: {
    background: {
      dashboard: {
        primary: "#011625",
        secondary: "#011625",
        tertiary: "#011625",
        quaternary: "#ffffff",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
