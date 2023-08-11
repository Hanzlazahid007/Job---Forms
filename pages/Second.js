import CompanyProfile from "@/components/CompanyProfile";
import Sidebar from "@/components/Sidebar";
import Sidebar2 from "@/components/SIdebar2";
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
