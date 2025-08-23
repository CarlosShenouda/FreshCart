import {
  faClock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faStar,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cart from "../../assets/imgs/cart.jpg";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { logInDate } from "../../services/auth-services";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {

const location = useLocation();
const from = location.state?.from || "/";


  const{setToken} = useContext(AuthContext)
  const navigate = useNavigate();
  const [inCorrectCredentials , setInCorrectCredentials] = useState("")
 const [isShownPassword , setIsShownPassword] = useState(false)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function togglePasswordVisibility(){
  setIsShownPassword(!isShownPassword)
}


  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email in not valid"),

    password: yup
      .string()
      .required("Password in required")
      .matches(
        passwordRegex,
        "Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleLogin(values) {
    try {
     const response = await logInDate(values)
      if(response.success){
        toast.success("Welcome back 😉")
        setToken(response.data.token)
        if(values.rememberMe){
          localStorage.setItem("token" , response.data.token)
        }else{
          sessionStorage.setItem("token" , response.data.token)
        }
        setTimeout(()=>{
            navigate(from)
        },2000)
      }
    } catch (error) {
      toast.error("Something wrong happen");
      setInCorrectCredentials(error.message)
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });



     function handleChange(e){
      setInCorrectCredentials("")
      formik.handleChange(e)
    }
  return (
    <>
    <title>Login Page</title>
      <main className=" custom-container grid grid-cols-12 p-10 ">
        <div className="left-side col-span-12 md:col-span-6 lex flex-col space-y-4">
          <div className="flex justify-center items-center ">
            <img
              src={cart}
              alt=""
              className="w-[350px] h-[250px] object-cover shadow-2xl rounded-2xl p-4 mb-4 "
            />
          </div>
          <div className="content text-center">
            <h3 className="font-semibold mb-2 text-2xl">
              Fresh Groceries Delivered
            </h3>
            <p className="text-gray-500 ">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
          </div>
          <div className="content-list mb-8">
            <ul className="flex justify-center gap-4 *:text-sm">
              <li>
                <FontAwesomeIcon
                  icon={faTruck}
                  className="me-2 text-primary-500"
                />{" "}
                <span>Free Delivery</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="me-2 text-primary-500"
                />{" "}
                <span>Secure Payment</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faClock}
                  className="me-2 text-primary-500"
                />{" "}
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="right-side col-span-12 md:col-span-6">
          <div className="shadow-2xl rounded-2xl flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              {/* Logo and Title */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="text-green-600">Fresh</span>Cart
                </h1>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-600 text-sm">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="me-3 text-red-500"
                  />{" "}
                  Continue with Google
                </button>

                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="me-3 text-blue-700"
                  />{" "}
                  Continue with Facebook
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-50 text-gray-500">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>

              {/* Email and Password Form */}
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative flex items-center ">
                    <div className="absolute text-gray-400 top-1/2 left-[15px] -translate-1/2 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="email"
                      required
                      className=" w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your email"
                    />
                    
                  </div>
                  {formik.touched.email && formik.errors.email && <p className="mt-1 text-red-500 text-sm">*{formik.errors.email}</p>}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-500"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                 <div className="relative flex items-center ">
                    <div className="absolute text-gray-400 top-1/2 left-[15px] -translate-1/2 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <input
                    type={isShownPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      autoComplete="current-password"
                      value={formik.values.password}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                      required
                      className="appearance-none relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                    />
                    <button type="button" className="absolute right-0 pr-3 z-30 flex items-center hover:cursor-pointer" onClick={togglePasswordVisibility}>
                     { isShownPassword ? <FontAwesomeIcon icon={faEyeSlash}  className="text-gray-400" /> : <FontAwesomeIcon icon={faEye}  className="text-gray-400" />}
                    </button>
                  </div>
                     {formik.touched.password && formik.errors.password && <p className="mt-1 text-red-500 text-sm">*{formik.errors.password}</p>}
                     {inCorrectCredentials && <p className="mt-1 text-sm text-red-500">*{inCorrectCredentials}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    id="keep-signed-in"
                    name="rememberMe"
                    value={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="keep-signed-in"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Keep me signed in
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  New to FreshCart?{" "}
                  <Link
                    to="/Signup"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Security Features */}
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 pt-4">
                <div className="flex ">
                  <FontAwesomeIcon icon={faLock} className="me-2" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex ">
                  <FontAwesomeIcon icon={faUsers} className="me-2" />
                  <span>50K+ Users</span>
                </div>
                <div className="flex ">
                  <FontAwesomeIcon icon={faStar} className="me-2" />
                  <span>4.9 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
