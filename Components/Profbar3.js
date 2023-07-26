import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineDone } from "react-icons/Md";

const Profbar3 = ({ flag }) => {
  return (
    <div>
      <div className="h-[105vh] w-1/4  bg-[#2668E8] ">
        <div className="pl-5 pt-5">
          <div className="flex flex-col  ">
            <h1 className="text-white font-semibold text-2xl">Hire On</h1>
            <div className="flex mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Log in Details</h1>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <Image
              src="/Vector 3.png"
              height={3}
              width={1}
              alt="image"
              className=" ml-4 mt-2 -mb-2"
            />
            <div className="flex mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Education</h1>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <Image
              src="/Vector 3.png"
              height={3}
              width={1}
              alt="image"
              className=" ml-4 mt-2 -mb-2"
            />
            <div className="flex mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Employment</h1>
                <p className="text-white text-sm">
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

export default Profbar3;
