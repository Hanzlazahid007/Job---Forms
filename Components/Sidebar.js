import React, { useState } from "react";
import Image from "next/image";

const Sidebar = ({ flag }) => {
  return (
    <div>
      <div className="h-[100vh] w-1/4  bg-[#2668E8] ">
        <div className="pl-5 pt-5">
          <div className="flex flex-col  ">
            <h1 className="text-white font-semibold text-2xl">Hire On</h1>
            <div className="flex mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Log in Details</h1>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            {/* <Image
              src="/Vector 3.png"
              height={3}
              width={1}
              alt="image"
              className=" ml-4 mt-2 -mb-2"
            /> */}
            {/* <div className="flex mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Company Profile</h1>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div> */}
            {/* <div className="ml-11 mt-4 mb-2 text-white">
              <h1>Recruiter Profile</h1>
            </div>
            <div className="ml-11 mt-2 -mb-2 text-white">
              <h1>Job Post</h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
