import React, { useState } from "react";

import Profemp from "@/pages/components/Profemp";
import Profbar3 from "@/pages/components/Profbar3";

const First = () => {
  return (
    <div>
      <Profbar3 />
      <div>
        <div className="main xl:absolute xl:top-[5%] xl:left-[32%]">
          <div>
            <Profemp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
