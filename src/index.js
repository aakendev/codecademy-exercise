import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>AAKEN Developer</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById("cocaex")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
