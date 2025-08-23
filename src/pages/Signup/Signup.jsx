import {
  faLeaf,
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { API_CONFIG } from "../../config";
import { passwordStrength } from "../../utils/passwordStrength";
import { signUpData } from "../../services/auth-services";

export default function Signup() {
  const navigate = useNavigate();
  const [isExistError, setIsExistError] = useState("");

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email in not valid"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "We accept egyption phone numbers only"),
    password: yup
      .string()
      .required("Password in required")
      .matches(
        passwordRegex,
        "Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("Re-password is required")
      .oneOf([yup.ref("password")], "Passwords should be the same"),
    terms: yup
      .boolean()
      .oneOf([true], "You have to agree to our terms and conditions"),
  });

  async function handleSignup(values) {
    try {
      const response = await signUpData(values);
      if (response.success) {
        toast.success("Account created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error("Something wrong happen");
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  const passwordFeedback = passwordStrength(formik.values.password);

  return (
    <>
    <title>Sign up Page</title>
      <main className="custom-container grid grid-cols-12 p-10 text-sm">
        <div className="left-side col-span-12 md:col-span-6 p-10">
          <div className="content-title mb-4">
            <h2 className="text-4xl mb-2 font-semibold">
              Welcome to <span className="text-primary-500">FreshCart</span>
            </h2>
            <p>
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
          </div>
          <div className="advantages mb-6  *:flex *:items-center *:space-x-3.5 *:mb-3">
            <div className="">
              <div className="icon size-11 border-gray-500 bg-primary-300/40 text-green-500 flex justify-center items-center rounded-full p-2.5">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <div className="adv-content">
                <h4 className="font-semibold">Fresh & Organic</h4>
                <p className="text-gray-500">
                  Premium quality products sourced directly from farms
                </p>
              </div>
            </div>
            <div>
              <div className="icon size-11 border-gray-500 bg-primary-300/40 text-green-500 flex justify-center items-center rounded-full p-2.5">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div className="adv-content">
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-gray-500">
                  Same-day delivery available in most areas
                </p>
              </div>
            </div>
            <div>
              <div className="icon size-11 border-gray-500 bg-primary-300/40 text-green-500 flex justify-center items-center rounded-full p-2.5">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="adv-content">
                <h4 className="font-semibold">Secure Shopping</h4>
                <p className="text-gray-500">
                  Your data and payments are completely secure
                </p>
              </div>
            </div>
          </div>
          <div className="card-review flex flex-col  shadow-xl p-4 rounded-2xl">
            <div className="person-details flex items-center justify-start mb-2">
              <div className="img">
                <img
                  src="https://thumbs.dreamstime.com/b/secretary-writing-instructions-attractive-workplace-office-237332851.jpg"
                  alt=""
                  className="size-10 object-contain rounded-full me-2"
                />
              </div>
              <div className="person-name">
                <h3>Sarah Johnson</h3>
                <div className="rate">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#00ff1e" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#00ff1e" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#00ff1e" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#00ff1e" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#00ff1e" }} />
                </div>
              </div>
            </div>
            <p className="text-gray-500">
              "FreshCart has completely changed how I shop for groceries. The
              quality is amazing and delivery is always on time!"
            </p>
          </div>
        </div>

        <div className="right-side col-span-12 md:col-span-6 shadow-2xl p-10">
          <h2 className=" capitalize text-center text-3xl font-semibold">
            create your account
          </h2>
          <p className="text-center text-gray-500 mb-4">
            start your fresh journey with us today
          </p>
          <div className=" p-4 flex gap-3 *:hover:bg-gray-400/60 *:transition *:duration-300">
            <button className="btn w-1/2 text-nowrap">
              <FontAwesomeIcon icon={faFacebook} className="me-2" />
              facebook
            </button>
            <button className="btn w-1/2">
              <FontAwesomeIcon icon={faGoogle} className="me-2" />
              google
            </button>
          </div>
          <div className="relative bg-gray-300 h-[1.5px] w-full my-4">
            <h5 className=" absolute left-1/2 top-1/2 -translate-1/2 bg-white p-2 ">
              OR
            </h5>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col p-4">
              <label htmlFor="name">* Name</label>
              <input
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="name"
                className="form-control border-gray-300 border-2"
              />
              {formik.touched.name && formik.errors.name && (
                <p className=" text-sm text-red-500 mt-1">
                  *{formik.errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col p-4">
              <label htmlFor="email">* Email</label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                className="form-control border-gray-300 border-2"
              />
              {formik.touched.email && formik.errors.email && (
                <p className=" text-sm text-red-500 mt-1">
                  *{formik.errors.email}
                </p>
              )}
              {isExistError && (
                <p className="text-sm mt-1 text-red-500">*{isExistError}</p>
              )}
            </div>

            <div className="flex flex-col p-4">
              <label htmlFor="phone">* Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="phone"
                className="form-control border-gray-300 border-2"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className=" text-sm text-red-500 mt-1">
                  {" "}
                  *{formik.errors.phone}
                </p>
              )}
            </div>

            <div className="flex flex-col p-4">
              <label htmlFor="password">* Password</label>
              <input
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                className="form-control border-gray-300 border-2"
              />

              {formik.values.password && (
                <div className="password-strength flex gap-2 items-center">
                  <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200 mt-2">
                    <div
                      className={`progress ${passwordFeedback.background} ${passwordFeedback.width}`}
                    ></div>
                  </div>  
                  <span className="text-nowrap mt-2 font-semibold">{passwordFeedback.text}</span>
                </div>
              )}

              {formik.touched.password && formik.errors.password ? (
                <p className="text-sm text-red-500 mt-1">
                  *{formik.errors.password}
                </p>
              ) : !formik.touched.password ? (
                <p className="text-sm text-gray-500 mt-1">
                  * Must be at least 8 characters with numbers and symbols
                </p>
              ) : null}
            </div>

            <div className="flex flex-col p-4">
              <label htmlFor="rePassword">* Re-Password</label>
              <input
                type="password"
                id="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="rePassword"
                className="form-control border-gray-300 border-2"
              />
              {formik.touched.rePassword && formik.errors.rePassword && (
                <p className=" text-sm text-red-500 mt-1">
                  *{formik.errors.rePassword}
                </p>
              )}
            </div>

            <div className="flex items-start p-4">
              <input
                type="checkbox"
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-gray-300 border-2 checked:bg-green-600 size-4 me-2 mt-1"
              />
              <div>
                <p className="mt-1 text-xs text-gray-700">
                  I agree to the{" "}
                  <Link to="/">
                    <span className="text-green-600">Terms of Service</span>
                  </Link>{" "}
                  and{" "}
                  <Link to="/">
                    <span className="text-green-600">Privacy Policy</span>
                  </Link>
                </p>

                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-xs text-red-500 mt-1">
                    *{formik.errors.terms}
                  </p>
                )}
              </div>
            </div>

            <div className="form-btn flex justify-center items-center mt-4">
              <button
                type="submit"
                className="btn bg-amber-600 w-3/4 text-white capitalize hover:bg-amber-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                create my account
              </button>
            </div>
            <div className="h-0.5 w-full text-xs bg-gray-300 mt-7"></div>
            <div className=" flex justify-center mt-5">
              <p>
                Already have an account?{" "}
                <Link to="/Login">
                  <span className="text-green-600 ">Sign In</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
