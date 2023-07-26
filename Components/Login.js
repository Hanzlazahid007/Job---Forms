import Link from "next/link";
import { useRouter } from "next/router";

const Login = ({ setFlag }) => {
  const router = useRouter();

  const HandleSubmit = (e) => {
    router.push("/Second");
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-start  min-h-screen">
      <div className="max-w-md w-full px-6 py-12  rounded-lg ">
        <h1 className="text-3xl font-semibold   mb-3">Welcome Back!</h1>
        <p className="text-[#777777] text-sm mb-4">
          Please enter your mobile number to log to log in.
        </p>
        <form onSubmit={HandleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm  text-[#777777]"
            >
              Enter your mobile number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="033-xxxxxxx"
              //   onFocus={handle}
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-96 shadow-sm sm:text-sm p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2  rounded-lg"
              required
            />
          </div>
          <button
            onClick={() => setFlag(true)}
            type="submit"
            className="w-40 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
