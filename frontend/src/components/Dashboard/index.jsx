import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="pt-[3rem] ml-64 dark:bg-gray-700">
        <Outlet />
      </div>
    </>
  );
  D;
};

export default Dashboard;
