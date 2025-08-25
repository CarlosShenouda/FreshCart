/* eslint-disable no-unused-vars */
import {
  faArrowLeft,
  faArrowRight,
  faCreditCard,
  faInfo,
  faLock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart.Context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { payment } from "../../services/Payment-services";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
export default function Checkout() {
  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("online");
  const { cartInfo, isLoading } = useContext(CartContext);

  const products = cartInfo?.data?.products;
  const totalCartPrice = cartInfo?.data?.totalCartPrice;

 return (
  <>
    <title>Checkout</title>
    <div className="p-6">
      {/* Page Title */}
      <div className="title max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xl sm:text-2xl lg:text-3xl font-semibold">
        <h2>Checkout</h2>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 flex flex-col md:flex-row gap-6">
        {/* Left Side - Payment and Billing */}
        <div className="w-full md:w-2/3 lg:w-3/4 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

        {/* Payment Options */}
<div className="space-y-4">
  {/* Cash on Delivery */}
  <div
    className={`w-full border rounded-xl p-4 cursor-pointer transition ${
      paymentMethod === "cod"
        ? "border-green-500 bg-green-50"
        : "border-gray-300"
    }`}
    onClick={() => setPaymentMethod("cod")}
  >
    <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer w-full">
      {/* Left side */}
      <div className="flex items-center gap-3 flex-1">
        <input
          type="radio"
          name="payment"
          checked={paymentMethod === "cod"}
          onChange={() => setPaymentMethod("cod")}
          className="mt-1"
        />
        <FontAwesomeIcon
          icon={faMoneyBillWave}
          className="text-green-500 text-lg"
        />
        <div>
          <h3 className="font-semibold">Cash on Delivery</h3>
          <p className="text-sm text-gray-600">
            Pay when your order arrives
          </p>
        </div>
      </div>

      {/* Right side */}
      <span className="text-sm text-green-500 sm:ml-4">
        No extra charges
      </span>
    </label>

    {/* Extra note */}
    <p className="text-green-600 mt-3 text-sm border border-gray-200 rounded-md p-2">
      <FontAwesomeIcon icon={faInfo} className="me-2 text-blue-500" />
      Please keep exact change ready for hassle-free delivery
    </p>
  </div>

  {/* Online Payment */}
  <div
    className={`w-full border rounded-xl p-4 cursor-pointer transition ${
      paymentMethod === "online"
        ? "border-green-500 bg-green-50"
        : "border-gray-300"
    }`}
    onClick={() => setPaymentMethod("online")}
  >
    <label className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer w-full">
      {/* Left side */}
      <div className="flex items-center gap-3 flex-1">
        <input
          type="radio"
          name="payment"
          checked={paymentMethod === "online"}
          onChange={() => setPaymentMethod("online")}
          className="mt-1"
        />
        <FontAwesomeIcon
          icon={faCreditCard}
          className="text-green-500 text-lg"
        />
        <div>
          <h3 className="font-semibold">Online Payment</h3>
          <p className="text-sm text-gray-600">
            Pay securely online using credit or digital wallets
          </p>
        </div>
      </div>

      {/* Right side */}
      <span className="text-sm text-green-500 sm:ml-4">
        Recommended
      </span>
    </label>

    {/* Extra note */}
    <p className="text-blue-600 mt-3 text-sm bg-blue-50 p-2 rounded border border-gray-200">
      You will be redirected to secure payment gateway to complete your transaction
    </p>
  </div>
</div>


          {/* Billing Address */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <label className="flex items-center mb-4 gap-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Same as delivery address</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={shippingData.firstName}
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    firstName: e.target.value,
                  })
                }
                className="form-control focus:border-primary-500 p-3 border border-gray-200 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={shippingData.lastName}
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    lastName: e.target.value,
                  })
                }
                className="form-control focus:border-primary-500 p-3 border border-gray-200 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="Address"
                value={shippingData.address}
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    address: e.target.value,
                  })
                }
                className="form-control focus:border-primary-500 p-3 border border-gray-200 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="City"
                value={shippingData.city}
                onChange={(e) =>
                  setShippingData({ ...shippingData, city: e.target.value })
                }
                className="form-control focus:border-primary-500 p-3 border border-gray-200 rounded-lg w-full"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={shippingData.phone}
                onChange={(e) =>
                  setShippingData({ ...shippingData, phone: e.target.value })
                }
                className="form-control focus:border-primary-500 p-3 border border-gray-200 rounded-lg w-full sm:col-span-2 lg:col-span-3"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4 text-sm">
            <div className="space-y-4 max-h-42 overflow-auto pr-2">
              {isLoading ? (
                <Loading />
              ) : products && products.length > 0 ? (
                products.map((product) => (
                  <CheckoutItem key={product._id} productData={product} />
                ))
              ) : (
                <div className="text-center text-gray-500">Cart is empty</div>
              )}
            </div>
            <hr />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{totalCartPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{products && products.length > 0 ? 70 : 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{Math.trunc(totalCartPrice * 0.14)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>
                {products && products.length > 0
                  ? Math.trunc(totalCartPrice + 70 + totalCartPrice * 0.14)
                  : 0}
              </span>
            </div>
          </div>

          <button
            className="bg-primary-600 hover:bg-primary-600/90 transition-colors duration-200 cursor-pointer text-white py-3 px-6 w-full md:w-auto rounded-lg mt-4"
            onClick={async () => {
              try {
                const response = await payment(shippingData);
                if (response.success) {
                  window.location.href = response.data.session.url;
                } else {
                  toast.error("Something went wrong");
                }
              } catch (error) {
                toast.error("Something went wrong");
              }
            }}
          >
            Proceed to Payment {" "}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>

          <Link
            to="/cart"
            className="block text-center w-full md:w-auto border p-3 rounded-xl text-gray-700 hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Return to
            Cart
          </Link>

          <div className="text-center mt-4 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-green-600">
                <FontAwesomeIcon icon={faLock} />
              </span>{" "}
              Your payment information is secure
            </div>
            <div className="flex justify-center gap-2 flex-wrap">
              <img
                src="https://img.icons8.com/color/24/000000/visa.png"
                alt="Visa"
              />
              <img
                src="https://img.icons8.com/color/24/000000/mastercard-logo.png"
                alt="MasterCard"
              />
              <img
                src="https://img.icons8.com/color/24/000000/amex.png"
                alt="Amex"
              />
              <img
                src="https://img.icons8.com/color/24/000000/paypal.png"
                alt="PayPal"
              />
              <img
                src="https://img.icons8.com/color/24/000000/apple-pay.png"
                alt="Apple Pay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

