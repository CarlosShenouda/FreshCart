import {
  faHeadset,
  faRotateLeft,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeAdvantages() {
  return (
    <>
      <div className="advantages flex flex-wrap justify-center gap-12 p-6">
        <div className="flex items-center p-4 border border-gray-200 rounded-xl w-64 bg-white">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
            <FontAwesomeIcon icon={faTruck} className="size-6 text-green-500" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Free Delivery</h4>
            <p className="text-xs text-gray-500">Orders $50 or more</p>
          </div>
        </div>

        <div className="flex items-center p-4 border border-gray-200 rounded-xl w-64 bg-white">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faRotateLeft}
              className="size-6 text-green-500"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">30 Days Return</h4>
            <p className="text-xs text-gray-500">Satisfaction guaranteed</p>
          </div>
        </div>

        <div className="flex items-center p-4 border border-gray-200 rounded-xl w-64 bg-white">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="size-6 text-green-500"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Secure Payment</h4>
            <p className="text-xs text-gray-500">100% protected checkout</p>
          </div>
        </div>

        <div className="flex items-center p-4 border border-gray-200 rounded-xl w-64 bg-white">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
            <FontAwesomeIcon
              icon={faHeadset}
              className="size-6 text-green-500"
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800">24/7 Support</h4>
            <p className="text-xs text-gray-500">Ready to help anytime</p>
          </div>
        </div>
      </div>
    </>
  );
}
