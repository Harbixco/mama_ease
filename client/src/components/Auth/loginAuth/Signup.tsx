import { logo } from "../../../assets";
import { Link } from "react-router-dom";
import { facebook, twitter, google } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const formik = useFormik({
    // Define initial form values for all four fields
    initialValues: {
      fullName: "",
      password: "",
      email: "",
      phoneNumber: "",
    },
    // Define the validation schema using Yup
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be a valid number")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      // Here you would typically handle the registration logic
      alert(JSON.stringify(values, null, 2));
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex flex-col md:h-screen">
      {/* Top Section (White) */}
      <div className="flex flex-col items-center pt-4 pb-4 bg-white">
        <img src={logo} alt="MamaEase Logo" className="size-12 md:size-20" />
        <h1 className="text-xl font-bold text-purple-600 pt-5">
          Create an account
        </h1>
      </div>

      {/* Bottom Section (Purple) */}
      <div className="flex-1 bg-[#9577B5] flex flex-col items-center justify-start py-4 md:py-8 px-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-sm space-y-3 md:space-y-5"
        >
          {/* Full Name Input */}
          <div className="relative w-full">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={`w-full bg-transparent border-b border-gray-300 text-white placeholder-white py-2 focus:outline-none focus:border-white ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-400"
                  : ""
              }`}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-300 text-xs mt-1">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full bg-transparent border-b border-gray-300 text-white placeholder-white py-2 focus:outline-none focus:border-white ${
                formik.touched.password && formik.errors.password
                  ? "border-red-400"
                  : ""
              }`}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-300 text-xs mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {/* Email Input */}
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full bg-transparent border-b border-gray-300 text-white placeholder-white py-2 focus:outline-none focus:border-white ${
                formik.touched.email && formik.errors.email
                  ? "border-red-400"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-300 text-xs mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Phone Number Input */}
          <div className="relative w-full">
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className={`w-full bg-transparent border-b border-gray-300 text-white placeholder-white py-2 focus:outline-none focus:border-white ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-red-400"
                  : ""
              }`}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-300 text-xs mt-1">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>

          {/* Register Button */}
          <div className="flex flex-col items-center pt-2 md:pt-5">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-white text-[#9577B5] font-bold py-1 px-8 rounded-full shadow-lg md:py-2 md:px-16"
            >
              SIGN UP
            </button>
          </div>
        </form>

        <span className="text-sm text-white font-semibold py-4">
          Or sign up with
        </span>

        <div className="flex justify-center space-x-6">
          <Link to="/">
            <img src={facebook} alt="Twitter" className="size-6" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="Twitter" className="size-6" />
          </Link>
          <Link to="/">
            <img src={google} alt="Google" className="size-6" />
          </Link>
        </div>
        <div className="text-center text-sm text-black pt-5 md:pt-5">
          Have an Account? &nbsp;
          <Link to="/signup" className="font-semibold text-white underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
