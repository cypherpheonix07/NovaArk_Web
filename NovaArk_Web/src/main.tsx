import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AdvancedSettings from "./components/AdvancedSettings";
import Index from "./pages/Index";

// Define your routes
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "settings", element: <AdvancedSettings /> },
    ],
  },
];