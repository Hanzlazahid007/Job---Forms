import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

import Fresheducation from "@/components/Fresheducation";
import Freshsidebar3 from "@/components/Freshsidebar3";
import Freshdetails from "@/components/Freshdetails";

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
