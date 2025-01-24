import React from "react";
import Header from "../header/Header"; // Your Navbar component
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <Header /> {/* Common navbar */}
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

export default Root;
