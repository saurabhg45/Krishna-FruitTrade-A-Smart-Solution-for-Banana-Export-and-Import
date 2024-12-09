import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import AdminHeader from "./AdminHeader";


export default function Admin() {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
      <Footer/>
    </>
  );
}
