import React, { useState } from "react";
import Sidebar from "@/pages/components/Sidebar";

import Fresheducation from "@/pages/components/Fresheducation";
import Freshsidebar2 from "@/pages/components/Freshsidebae2";

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
