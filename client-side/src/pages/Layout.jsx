import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
// import Dashboard from "./dashboard";

const Layout = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
