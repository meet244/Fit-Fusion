import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BigLoader from "./components/BigLoader";

const App = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="select-none
    
    ">
      <Outlet />
      <BigLoader />
    </div>
  );
};

export default App;
