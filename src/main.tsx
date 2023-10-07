import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./global/theme/index.tsx";
import { CssVarsProvider } from "@mui/joy/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
