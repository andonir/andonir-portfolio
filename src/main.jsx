import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ContextProvider } from "./context/context1.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/andonir-portfolio">
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
