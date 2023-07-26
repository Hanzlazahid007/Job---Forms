import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";

import Fresheducation from "@/Components/Fresheducation";
import Freshsidebar2 from "@/Components/Freshsidebae2";
import Profeducation from "@/Components/Profeducation";

const First = () => {
  return (
    <div>
      <Freshsidebar2 />
      <div>
        <div className="main absolute top-[20%] left-[32%]">
          <div>
            <Profeducation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
