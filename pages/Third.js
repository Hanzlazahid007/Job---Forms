import Profile from "@/Components/Profile";
import Sidebar3 from "@/Components/SIdebar3";
import Sidebar from "@/Components/Sidebar";
import React from "react";
// import Sidebar from "../Components/Sidebar";
// import Profile from "../Components/Profile";

const Third = () => {
  return (
    <div>
      <Sidebar3 />
      <div>
        <div className="main xl:absolute xl:top-[8%] xl:left-[30%]">
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
