import {
  faArrowRight,
  faEnvelope,
  faHeadset,
  faLock,
  faPaperPlane,
  faQuestion,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

export default function ForgetPassword() {
  const { handleForgotPassword, forgotPassword, setForgotPassword } =
    useContext(AuthContext);
  return (
    <>
    <title>Forget Password</title>
      <section className="">
        {/* first part form */}
        <div className="p-10 custom-container space-y-10">
          <div className=" md:w-1/2 lg:w-1/3 md:mx-auto text-center space-y-7 border border-gray-200 rounded-xl p-6 bg-white">
            <FontAwesomeIcon
              icon={faLock}
              className="text-green-500 bg-primary-200 text-xl p-4 rounded-full"
            />
            <h2 className="text-2xl font-semibold">Forget Password ?</h2>
            <p className="text-sm text-gray-500">
              No worries! Enter your email address and we'll send you a link to
              reset your password.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleForgotPassword(forgotPassword);
              }}
              className="flex flex-col "
            >
              <label htmlFor="email" id="email" className="w-full text-left">
                Email address:
              </label>
              <input
                value={forgotPassword}
                onChange={(e) => setForgotPassword(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="form-control w-full"
              />
              <button
              type="submit"
                className="btn bg-primary-600 hover:bg-primary-600/90 text-white w-full mt-3"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                <span>Send reset link</span>
              </button>
            </form>

            <span>
              Remembered your password ?{" "}
              <Link to="/login" className="text-primary-600">
                Login{" "}
              </Link>
            </span>
          </div>

          <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-3  md:w-1/2 lg:w-1/3 md:mx-auto">
            <div>
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-green-500 text-md mt-2"
              />
            </div>
            <div>
              <span className="text-md">Security Notice</span>
              <p className="text-sm text-gray-500">
                For your security, a password reset link will be sent to your
                registered email address. The link will expire after 30 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="bg-white p-10 w-full ">
          <div className="custom-container ">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Need additional help ?
            </h2>
            <div className="help-cards grid md:grid-cols-3 grid-cols-1 mx-auto gap-4">
              <div className="card flex flex-col text-center p-5 lg:w-84 lg:mx-auto  space-y-3 border border-gray-200 rounded-xl ">
                <FontAwesomeIcon
                  icon={faHeadset}
                  className="mx-auto bg-primary-200 text-green-500 p-4 rounded-full"
                />
                <h4>Contact support</h4>
                <span className="max-w-66 mx-auto">
                  Our customer support team is available 24/7 to assist you.
                </span>

                <Link to={"/"} className={"text-primary-600 "}>
                  Contact us{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                </Link>
              </div>

              <div className="card flex flex-col text-center p-5 lg:w-84 lg:mx-auto space-y-3 border border-gray-200 rounded-xl ">
                <FontAwesomeIcon
                  icon={faQuestion}
                  className="mx-auto bg-primary-200 text-green-500 p-4 rounded-full"
                />
                <h4>FAQs</h4>
                <span className="max-w-66 mx-auto">
                  Find answers to frequently asked questions about your account.
                </span>

                <Link to={"/"} className={"text-primary-600 "}>
                  View FAQS
                  <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                </Link>
              </div>

              <div className="card flex flex-col text-center p-5 lg:w-84 lg:mx-auto space-y-3 border border-gray-200 rounded-xl ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mx-auto bg-primary-200 text-green-500 p-4 rounded-full"
                />
                <h4>Email Not Received?</h4>
                <span className="max-w-66 mx-auto">
                  Check your spam folder or request a new reset link.
                </span>

                <Link to={"/"} className={"text-primary-600 "}>
                  Resend Email
                  <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
