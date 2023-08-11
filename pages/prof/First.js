import React, { useState } from "react";

import Freshlogin from "@/components/FreshLogin";
import Freshsidebar from "@/components/Freshsidebar";
import Proflogin from "@/components/Proflogin";

const First = () => {
  return (
    <div>
      <Freshsidebar />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Proflogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
