import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Subnavbar from "../Subnavbar/Subnavbar";

export const Layout = () => {
  return (
    <>
     <div>
        <Navbar />
        <Subnavbar/>
            <Outlet />
        <Footer />
     </div>
    </>
  );
};
