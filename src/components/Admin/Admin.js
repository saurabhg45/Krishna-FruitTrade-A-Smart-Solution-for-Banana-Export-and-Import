import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function Admin() {
  return (
    <>
      <AdminHeader/>
      <Outlet/>
      <AdminFooter/>
    </>
  );
}
