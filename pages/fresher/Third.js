import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";

import Fresheducation from "@/Components/Fresheducation";
import Freshsidebar3 from "@/Components/Freshsidebar3";
import Freshdetails from "@/Components/Freshdetails";

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
