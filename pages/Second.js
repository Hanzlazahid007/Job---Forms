import CompanyProfile from "@/Components/CompanyProfile";
import Sidebar from "@/Components/Sidebar";
import Sidebar2 from "@/Components/SIdebar2";
import React from "react";

const Second = () => {
  return (
    <div>
      <Sidebar2 />
      <div>
        <div className="main xl:absolute xl:top-[8%] xl:left-[30%]">
          <div>
            <CompanyProfile />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
