import React, { useState } from "react";
import Sidebar from "@/pages/components/Sidebar";
import Login from "@/pages/components/Login";
import Freshlogin from "@/pages/components/FreshLogin";
import Freshsidebar from "@/pages/components/Freshsidebar";
import Proflogin from "@/pages/components/Proflogin";

const First = () => {
  return (
    <div>
      <Freshsidebar />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Freshlogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
