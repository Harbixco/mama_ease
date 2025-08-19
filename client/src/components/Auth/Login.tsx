import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { facebook, twitter, google } from "../../assets";

export default function Login() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col items-center pt-8 pb-4 bg-white">
          <img src={logo} alt="MamaEase Logo" className="size-12 md:size-20" />
          <h1 className="text-xl font-bold text-purple-600 pt-5">Log in</h1>
        </div>

        <div className="flex-1 bg-[#9577B5] flex flex-col items-center p-4 md:p-6 space-y-4">
          <div className="w-full max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-200 md:py-2 focus:outline-none"
            />
          </div>

          <div className="w-full max-w-sm">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-200 md:py-2 focus:outline-none"
            />
          </div>

          <div className="pb-2 text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-red-500 hover:underline"
            >
              Forget Password?
            </Link>
          </div>

          <div className="pt-5">
            <Link
              to="/login"
              className="py-1 px-8 bg-white text-purple-600 font-bold md:py-2 md:px-16 rounded-full shadow-lg md:mt-8"
            >
              LOGIN
            </Link>
          </div>

          <span className="text-sm text-white font-semibold py-5">
            Or Log in with
          </span>

          <div className="flex justify-center space-x-6">
            <button>
              <img src={facebook} alt="Twitter" className="size-6" />
            </button>
            <button>
              <img src={twitter} alt="Twitter" className="size-6" />
            </button>
            <button>
              <img src={google} alt="Google" className="size-6" />
            </button>
          </div>
          <p className="text-center text-sm text-black">
            Don’t have an Account? &nbsp;
            <Link to="/signup" className="font-semibold text-white underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
