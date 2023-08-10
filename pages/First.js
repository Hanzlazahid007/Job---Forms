import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Login from "@/Components/Login";

const First = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[40%]">
          <div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
