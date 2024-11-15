import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";
import { UserProvider } from "./context/UserContext";
import { PinProvider } from "./context/PinContext"; // Import PinProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PinProvider> {/* Wrap with PinProvider */}
        <RouterProvider router={router} />
      </PinProvider>
    </UserProvider>
  </React.StrictMode>
);
