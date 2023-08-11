import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

import Freshother from "@/components/Freshother";
import Freshsidebar4 from "@/components/Freshsidebar4";

const First = () => {
  return (
    <div>
      <Freshsidebar4 />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Freshother />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
