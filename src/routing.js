import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Register from "./components/Register";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin/Admin";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Buyer from "./components/Buyer/Buyer";
import ProductUpload from "./components/Admin/Products/ProductUpload";
import ProductList from "./components/Admin/Products/ProductList";
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
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />, // Admin layout
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "P-upload",
        element: <ProductUpload />,
      },
      {
        path: "P-list",
        element: <ProductList />,
      },
     
    ],
  },
  {
    path: "/buyer",
    element: <Buyer />,
    children: [
      // {
      //   path: "/product-catalog",
      //   element: <ProductCatalog />,
      // },
      // {
      //   path: "/order-tracking",
      //   element: <ProductCatalog />,
      // },
      // {
      //   path: "/order-history",
      //   element: <ProductCatalog />,
      // },
      // {
      //   path: "",
      //   element: <ProductCatalog />,
      // },
      // {
      //   path: "/order-history",
      //   element: <ProductCatalog />,
      // },
      // {
      //   path: "/payment-management",
      //   element: <ProductCatalog />,
      // },
    ],
  },
]);

export default router;
