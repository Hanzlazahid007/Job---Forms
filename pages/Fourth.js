import Job from "@/Components/Job";
import Sidebar4 from "@/Components/SIdebar4";

import React from "react";
// import Sidebar from "../Components/Sidebar";
// import Job from "../Components/Job";

const Fourth = () => {
  return (
    <div>
      <Sidebar4 />
      <div>
        <div className="main xl:absolute xl:top-[8%] xl:left-[30%]">
          <div>
            <Job />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
