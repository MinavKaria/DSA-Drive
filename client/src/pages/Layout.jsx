import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <>
      <div className=" flex flex-col justify-between items-center min-h-[100vh]">
      <Navbar />
      <div className="w-full">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Layout;
