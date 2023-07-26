import React, { useState } from "react";

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
            <Proflogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
