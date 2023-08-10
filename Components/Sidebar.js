import React, { useState } from "react";
import Image from "next/image";

const Sidebar = ({ flag }) => {
  return (
    <div>
      <div className="p-3  xl:p-0 w-[100%]  xl:h-[100vh] xl:w-1/4   bg-[#2668E8] ">
        <div className="xl:pl-5 xl:pt-5">
          <div className=" xl:flex xl:flex-col  ">
            <h1 className="   text-white font-semibold text-2xl">Hire On</h1>
            <div className="xl:flex xl:mt-6  ">
              <div className="hidden xl:block   w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
              </div>
              <div className="xl:ml-3  mt-2 xl:-mt-1">
                <h1 className="   xl:block text-white xl:text-sm">
                  Log in<span className="hidden xl:inline"> Details</span>
                </h1>
                <p className="hidden xl:block text-white text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
