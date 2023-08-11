import React, { useState } from "react";
import Sidebar from "@/pages/components/Sidebar";

import Fresheducation from "@/pages/components/Fresheducation";
import Freshsidebar3 from "@/pages/components/Freshsidebar3";
import Freshdetails from "@/pages/components/Freshdetails";

const First = () => {
  return (
    <div>
      <Freshsidebar3 />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Freshdetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
