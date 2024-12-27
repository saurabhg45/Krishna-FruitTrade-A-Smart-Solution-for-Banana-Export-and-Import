import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/HeroSection";
import Admin from "./components/Admin/Admin";
// import ProductCatalog from "./components/ProductCatalog/ProductCatalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Home layout
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />, // Admin layout
  },
]);

export default router;
