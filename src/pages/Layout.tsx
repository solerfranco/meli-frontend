import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/scss/Body.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="body-container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
