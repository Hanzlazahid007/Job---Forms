import React from "react";
import { useRouter } from "next/router";

const Profcarrer = () => {
  const router = useRouter();
  const HandleSubmit = (e) => {
    router.push("/prof/Six");
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mt-6 xl:mt-0">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Desired Carrer Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required Education to Continue.
        </p>
        <div className="xl:mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10 mt-4 xl:mt-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Industry</span>

              <input
                type="text"
                required
                name="name"
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Department</span>
              <select
                name="product"
                required
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
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
              <span className="text-sm text-[#777777]">Role</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Employment Type</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
                xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="ml-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Type</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[17rem]
            mt-1
            xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">Full</option>
                <option value="cat"></option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Expected CTC</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="text"
                placeholder="marks"
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="ml-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Prefered Shift</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">day</option>
                <option value="cat">night</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Desired City</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="text"
                placeholder="marks"
                className="
            block
            xl:w-96
            mt-1
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-32 m-auto xl:m-0 mt-1 xl:mb-10 mb-20 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Profcarrer;
