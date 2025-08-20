import { Link } from "react-router-dom";
import { slide36 } from "../../assets";

export default function VerifySuccesful() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center px-4">
      <div>
        <img src={slide36} alt="slide2" className="size-52 rounded-xl" />
      </div>

      <div className="pb-5 text-2xl font-semibold">Hurray!</div>

      <div>You have successfully verified your</div>

      <div>email address.... You are good to go!</div>

      <button
        type="button"
        className="mt-5 rounded-lg bg-[#65418b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#65418b] hover:text-white"
      >
        <Link to="/enable-location">Continue</Link>
      </button>
    </div>
  );
}
