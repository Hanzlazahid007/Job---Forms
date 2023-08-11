import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

import Fresheducation from "@/components/Fresheducation";
import Freshsidebar2 from "@/components/Freshsidebae2";

const First = () => {
  return (
    <div>
      <Freshsidebar2 />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Fresheducation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
