import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>ß
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
