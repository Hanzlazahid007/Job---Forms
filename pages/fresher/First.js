import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Login from "@/Components/Login";
import Freshlogin from "@/Components/FreshLogin";
import Freshsidebar from "@/Components/Freshsidebar";
import Proflogin from "@/Components/Proflogin";

const First = () => {
  return (
    <div>
      <Freshsidebar />
      <div>
        <div className="main absolute top-[20%] left-[32%]">
          <div>
            <Freshlogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
