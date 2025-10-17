import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
