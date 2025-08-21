import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { facebook, twitter, google } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  // Use Formik and Yup to manage form state and validation
  const formik = useFormik({
    // Define initial form values
    initialValues: {
      email: "",
      password: "",
    },
    // Define the validation schema using Yup
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      // Here you would typically handle the login logic, e.g., make an API call
      alert(JSON.stringify(values, null, 2));
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex flex-col md:h-screen">
      {/* Top Section (White) */}
      <div className="flex flex-col items-center pt-4 pb-4 bg-white">
        <img src={logo} alt="MamaEase Logo" className="size-12 md:size-20" />
        <h1 className="text-xl font-bold text-purple-600 pt-5">Log in</h1>
      </div>

      {/* Bottom Section (Purple) */}
      <div className="flex-1 bg-[#9577B5] flex flex-col items-center justify-start py-4 md:py-8 px-6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-sm space-y-3 md:space-y-5"
        >
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

          {/* Password Input */}
          <div className="relative w-full md:pt-0">
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

          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-white underline"
            >
              Forget Password?
            </Link>
          </div>

          {/* LOGIN Button */}
          <div className="flex flex-col items-center pt-4">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="bg-white text-[#9577B5] font-bold py-1 px-8 rounded-full shadow-lg md:py-2 md:px-16"
            >
              LOGIN
            </button>
          </div>
        </form>

        {/* <div className="> */}
        <span className="text-sm text-white font-semibold py-6">
          Or Log in with
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
        <div className="text-center text-sm text-black py-8 md:py-0 md:pt-8">
          Don’t have an Account? &nbsp;
          <Link to="/signup" className="font-semibold text-white underline">
            Register Now
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
