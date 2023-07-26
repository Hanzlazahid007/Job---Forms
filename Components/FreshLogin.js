import React from "react";
import { useRouter } from "next/router";

const Freshlogin = () => {
  const router = useRouter();
  const HandleSubmit = (e) => {
    router.push("/fresher/Second");
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Log in Details</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4 flex justify-between">
          <div className="mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Full Name</span>

              <input
                type="text"
                required
                name="name"
                className="
            block
            w-96
            mt-1
            border-gray-300
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Mobile Number</span>
              <input
                type="text"
                required
                name="name"
                className="
            block
            w-96
            mt-1
            border-gray-300
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>
        <div className="-mt-3 flex justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">E-mail id</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            w-96
            mt-1
            border-gray-300
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Create Password</span>
              <input
                type="password"
                name="name"
                required
                className="
            block
            w-96
            mt-1
            border-gray-300
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="-mt-4 flex justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Upload Resume</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="file"
                className="
            block
            w-96
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
          <div className="ml-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Gender</span>

              <select
                name="product"
                required
                className="
            block
            w-96
            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">40</option>
                <option value="cat"></option>
                <option value="meme"></option>
                <option value="zoom"></option>
              </select>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-32 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Freshlogin;
