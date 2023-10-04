import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/global.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ResearchContextProvider } from "./context/ResearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ResearchContextProvider>
        <App />
      </ResearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
