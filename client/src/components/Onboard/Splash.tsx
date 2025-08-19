import { arrow, slide1 } from "../../assets";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <>
      <div className=" min-h-screen w-full bg-adminPrimary">
        <div className="flex justify-center md:pt-10">
          <img src={slide1} alt="slide1" className="w-72 h-auto" />
        </div>

        <div className="bg-[#9577B5] text-white flex flex-col items-center justify-center p-8 text-center">
          <div className="md:text-xl text-sm font-bold uppercase tracking-wide mb-2">
            Your <br /> Pregnancy Companion, Right at Home
          </div>
          <p className="text-xs md:text-sm text-gray-200 mb-8">
            We're here to support you with trusted tips, doctor visits, and baby
            care - all in one place
          </p>
          <div>
            <Link
              to="/login"
              className="bg-white text-purple-800 font-bold md:py-2 px-3 py-1 md:px-8 rounded-full text-sm md:text-xl"
            >
              Get Started
            </Link>
          </div>

          <div className="pt-10 md:pb-3">
            <img src={arrow} alt="slide1" className=" h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
