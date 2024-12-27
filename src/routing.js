import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/HeroSection";
import Admin from "./components/Admin/Admin";
import ProductList from "./components/Admin/Products/ProductList";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";

// import ProductCatalog from "./components/ProductCatalog/ProductCatalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Home layout
    children: [
      {
        path: "/home",
        element: <HeroSection />,
      },
      {
        path: "/about",
        element: <AboutUs />, 
      },
      {
        path: "/services", 
        element: <Services />, 
      },
      {
        path: "/feedback", 
        element: <Feedback/>, 
      },
      {
        path: "/contact", 
        element: <ContactUs/>, 
      },
      
    ],
  },
  {
    path: "/admin",
    element: <Admin />, // Admin layout
    children: [
      {
        path: "products",
        element: <ProductList/>,
      },
    ],
  },
]);

export default router;
