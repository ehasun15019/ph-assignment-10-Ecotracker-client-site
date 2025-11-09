import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      <main className="flex-1 w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
