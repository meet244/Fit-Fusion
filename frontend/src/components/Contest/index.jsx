import React from "react";
import Hero from "./Hero";
import Table from "./Table";
import Poster from "./Poster";
import Recent from "./Recent";
const Contest = () => {
  return (
    <div className="min-h-screen pb-32     bg-[#020618]">
      <Poster />
      <div className="flex -mt-52 justify-center ">
        <Table />
      </div>
      <Recent />
    </div>
  );
};

export default Contest;
