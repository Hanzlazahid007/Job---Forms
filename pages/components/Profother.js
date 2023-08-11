import React from "react";
import { useRouter } from "next/router";

const Profother = () => {
  const router = useRouter();
  const HandleSubmit = (e) => {
    router.push("/prof/");
    e.preventDefault();
  };
  return (
    <div className="flex justify-center  xl:mt-0  mt-10">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Others</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required Certification to Continue.
        </p>
        <div className="xl:mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">My Certification</span>

              <input
                type="text"
                required
                name="name"
                className="
            block
            xl:w-96
            mt-1
            -mb-3
            xl:mb-0
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Resume Headline</span>
              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[17rem]
            mt-1
            -mb-3
            xl:mb-0
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">Designation</option>
                <option value="cat"></option>
                <option value="meme"></option>
                <option value="zoom"></option>
              </select>
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">My Summary</span>
              <textarea
                type="date"
                name="name"
                required
                className="
            block
            xl:w-[50.5rem]
            w-[17rem]
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>

        {/* =================== */}

        <button
          type="submit"
          className="w-32 m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Profother;
