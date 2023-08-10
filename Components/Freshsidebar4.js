import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/md";

const Freshsidebar4 = ({ flag }) => {
  return (
    <div>
      <div className="xl:h-[100vh] xl:w-1/4 w-[100%]  p-4 xl:p-0 bg-[#2668E8] ">
        <div className="xl:pl-5 xl:pt-5">
          <div className="xl:flex xl:flex-col  ">
            <h1 className="text-white font-semibold text-2xl">Hire On</h1>
            <div className="flex xl:block mt-2 xl:mt-0 -ml-[0.6rem]">
              <div className="xl:flex hidden  xl:mt-6">
                <div className="w-2 hidden xl:block h-2 p-4 relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                    <MdOutlineDone className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 -mt-1">
                  <h1 className="text-white text-sm">
                    Log in<span className="hidden xl:inline">Details</span>{" "}
                  </h1>
                  <p className="text-white xl:block hidden text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <Image
                src="/Vector 3.png"
                height={3}
                width={1}
                alt="image"
                className=" hidden xl:block ml-4 mt-2 -mb-2 "
              />
              <div className="xl:flex xl:mt-6">
                <div className="w-2 hidden xl:block h-2 p-4 relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                    <MdOutlineDone className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 -mt-1">
                  <h1 className="text-white text-sm">Education</h1>
                  <p className="text-white xl:block hidden text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <Image
                src="/Vector 3.png"
                height={3}
                width={1}
                alt="image"
                className="xl:block hidden ml-4 mt-2 -mb-2"
              />
              <div className="xl:flex  xl:mt-6">
                <div className="w-2 hidden xl:block h-2 p-4 relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                    <MdOutlineDone className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-3 -mt-1">
                  <h1 className="text-white text-sm">Personal Details</h1>
                  <p className="text-white xl:block hidden text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <Image
                src="/Vector 3.png"
                height={3}
                width={1}
                alt="image"
                className="hidden xl:block ml-4 mt-2 -mb-2"
              />
              <div className="xl:flex  xl:mt-6">
                <div className="w-2 hidden xl:block h-2 p-4 relative rounded-full bg-white">
                  {" "}
                  <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
                </div>
                <div className="ml-3 -mt-1">
                  <h1 className="text-white text-sm">Others</h1>
                  <p className="text-white xl:block hidden text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freshsidebar4;
