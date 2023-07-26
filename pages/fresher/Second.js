import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";

import Fresheducation from "@/Components/Fresheducation";
import Freshsidebar2 from "@/Components/Freshsidebae2";

const First = () => {
  return (
    <div>
      <Freshsidebar2 />
      <div>
        <div className="main absolute top-[20%] left-[32%]">
          <div>
            <Fresheducation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
