import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";
import { AppProvider } from "./context.jsx";
import "./index.css";
/* Put strict mode here will render component twice, so if a parent div is render twice the child div will also render twice */
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Wrap your App component with BrowserRouter */}
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
