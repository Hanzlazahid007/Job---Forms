import React, { useState } from "react";
import Sidebar from "@/pages/components/Sidebar";

import Fresheducation from "@/pages/components/Fresheducation";
import Freshsidebar2 from "@/pages/components/Freshsidebae2";
import Profeducation from "@/pages/components/Profeducation";

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
