import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";

import Freshother from "@/Components/Freshother";
import Freshsidebar4 from "@/Components/Freshsidebar4";

const First = () => {
  return (
    <div>
      <Freshsidebar4 />
      <div>
        <div className="main absolute top-[20%] left-[32%]">
          <div>
            <Freshother />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
