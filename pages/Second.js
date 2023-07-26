import CompanyProfile from "@/Components/CompanyProfile";
import Sidebar from "@/Components/Sidebar";
import Sidebar2 from "@/Components/SIdebar2";
import React from "react";

const Second = () => {
  return (
    <div>
      <Sidebar2 />
      <div>
        <div className="main absolute top-[8%] left-[30%]">
          <div>
            <CompanyProfile />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
