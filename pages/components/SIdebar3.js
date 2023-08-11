import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import Image from "next/image";

const Sidebar3 = ({ flag }) => {
  return (
    <div>
      <div className="xl:h-[105vh] xl:w-1/4 w-[100%] p-4 xl:p-0  bg-[#2668E8] ">
        <div className="xl:pl-5 xl:pt-5">
          <div className="flex flex-col  ">
            <h1 className="text-white font-semibold text-2xl">Hire On</h1>
            <div className="flex xl:block mt-2 xl:mt-0  ">
              <div className="xl:flex xl:mt-6  ">
                <div className="w-2 h-2 p-4 hidden xl:block relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
                </div>
                <div className="xl:ml-3 xl:-mt-1">
                  <h1 className="text-white text-sm">
                    Log in<span className="hidden xl:inline"> Details</span>
                  </h1>
                  <p className="text-white hidden xl:block text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <Image
                src="/Vector 3.png"
                height={3}
                width={1}
                alt="image"
                className=" hidden xl:block ml-4 mt-2 -mb-2"
              />
              <div className="xl:flex   xl:mt-6">
                <div className="w-2 h-2 p-4 hidden xl:block  relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
                </div>
                <div className="xl:ml-3 xl:-mt-1">
                  <h1 className="text-white ml-6 xl:ml-0 text-sm">
                    Company Profile
                  </h1>
                  <p className="text-white hidden xl:block text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="xl:ml-11 ml-6 xl:mt-4 mb-2 text-white">
                <h1>Recruiter Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar3;
