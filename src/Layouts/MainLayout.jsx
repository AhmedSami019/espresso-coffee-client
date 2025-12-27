import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-10/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
