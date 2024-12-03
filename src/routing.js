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
import BananaList from "./components/Admin/BananaManagement/BananaList";
import AddBanana from "./components/Admin/BananaManagement/AddBanana";

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
        path: "/admin", 
        element: <AdminDashboard />,  
      },
      {
        path: "/admin/banana-management/list", 
        element: <BananaList />,
      },
      {
        path: "/admin/banana-management/add", 
        element: <AddBanana />,
      },
    ],
  },
]);

export default router;
