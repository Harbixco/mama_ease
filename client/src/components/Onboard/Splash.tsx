import { slide1 } from "../../assets";

export default function Splash() {
  return (
    <>
      <div className=" min-h-screen w-full  bg-adminPrimary">
        <div className="flex justify-center pt-10">
          <img src={slide1} alt="slide1" className="w-72 h-auto" />
        </div>

        <div className="bg-purple-500 text-white flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-2">
            Your <br /> Pregnancy Companion, Right at Home
          </h2>
          <p className="text-sm text-gray-200 mb-8">
            We're here to support you with trusted tips, doctor visits, and baby
            care - all in one place
          </p>
          <button className="bg-white text-purple-800 font-bold py-3 px-12 rounded-full shadow-lg">
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
}
