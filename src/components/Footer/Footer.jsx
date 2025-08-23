import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
export default function Footer() {
  return (
    <>
      <main className="custom-container pt-14">
        <div className="upper-part grid lg:grid-cols-5 gap-4 pb-9">
          <div className="col-span-2 pb-4">
            <Link to={"/home"} className="text-xl font-bold mb-3">
              <span className="text-green-600">Fresh</span>Cart
            </Link>
            <p className="text-gray-500 text-sm">
              FreshCart is your one-stop destination for fresh groceries,
              organic produce, and household essentials delivered right to your
              doorstep.
            </p>
            <ul className="flex gap-2.5 mt-2 *:text-gray-500">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Categories</h3>
            <ul className="*:text-sm *:text-gray-500 *:hover:text-green-600">
              <li>
                <Link to={`/`}>Fruits & Vegetables</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Dairy & Eggs</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Bakery & Snacks</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Meat & Seafood</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Beverages</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Quick Link</h3>
            <ul className="*:text-sm *:text-gray-500 *:hover:text-green-600">
              <li>
                <Link to={`/`}>About Us</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Dairy & EggsContact Us</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Privacy Policy</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}> Terms of Service</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Shipping Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Customer Service</h3>
            <ul className="*:text-sm *:text-gray-500 *:hover:text-green-600">
              <li>
                <Link to={`/`}>My Account</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Order History</Link>
              </li>
              <li>
                {" "}
                <Link to={`/wishlist`}>Wishlist</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}> Returns & Refunds</Link>
              </li>
              <li>
                {" "}
                <Link to={`/`}>Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-gray-500/40"></div>
        <div>
          <p className="py-6 text-gray-500">
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
