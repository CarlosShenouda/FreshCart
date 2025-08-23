import { Link } from "react-router";
import WishlistItem from "./../../components/WishlistItem/WishlistItem";
import { faFacebook,  faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext} from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import Loading from "../../components/Loading/Loading";
export default function Wishlist() {
  const { wishlist , isLoading} = useContext(WishlistContext);
console.log(wishlist);
 

  if(isLoading)
    {return <Loading/>}
  return (
    <>
    <title>Wishlist</title>
      <section className="py-8">
        <div className="custom-container grid grid-cols-12 gap-4">
          {/* right side */}
          <div className="right-side col-span-12 md:col-span-8 border border-gray-200 rounded-2xl overflow-hidden bg-white h-fit">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-2xl font-semibold mb-1">My Wishlist</h3>
              <p className="text-sm text-gray-500"> items in your wishlist</p>
            </div>

            <div className="">
             {wishlist?.length > 0 ? wishlist.map((wishlist) => (
                <WishlistItem key={wishlist.id} wishlistProductData={wishlist} />
              )) : <p className="p-4 text-center " >You don't have any wishlist yet</p> }
            </div>
          </div>
          {/* left side */}
          <div className="flex flex-col gap-6 left-side col-span-12 md:col-span-4 ">
            <div className="left-side   bg-white border border-gray-200 p-4 rounded-2xl h-fit *:mb-4">
              <h3 className="text-2xl font-semibold">Create new wishlist</h3>

              <div>
                <label htmlFor="" id="Wishlist-name" className="text-md">
                  {" "}
                  wishlist name
                </label>
                <input
                  type="text"
                  id="wishlist-name"
                  placeholder="e.g holiday wishlist"
                  className="w-full border form-control border-gray-200 rounded-md p-2"
                />
              </div>

              <div className="">
                <span className="text-md">privacy</span>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center">
                    {" "}
                    <input type="radio" id="wishlist-public" className="me-1" />
                    <label
                      htmlFor=""
                      id="wishlist-public"
                      className="text-md text-gray-600  "
                    >
                      Public
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="wishlist-private"
                      className="me-1"
                    />
                    <label
                      htmlFor=""
                      id="wishlist-private"
                      className="text-md text-gray-600  "
                    >
                      Private
                    </label>
                  </div>
                </div>
              </div>

              <button className="btn bg-primary-600 hover:bg-primary-700 text-white w-full">
                Create Wishlist
              </button>
            </div>

            <div className="  bg-white border border-gray-200 p-4 rounded-2xl h-fit">
              <h3 className="text-2xl font-semibold mb-5">My Wishlist</h3>

              <div className="flex items-center justify-between mb-4 border-b border-gray-200">
                <div>
                  <h4 className="text-md  mb-1">Default Wishlist</h4>
                  <span className="text-gray-500 text-sm">12 items</span>
                </div>
                <Link
                  to={``}
                  className=" text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  View
                </Link>
              </div>

              <div className="flex items-center justify-between mb-4 border-b border-gray-200">
                <div>
                  <h4 className="text-md  mb-1">Birthday Ideas</h4>
                  <span className="text-gray-500 text-sm">8 items</span>
                </div>
                <Link
                  to={``}
                  className=" text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  View
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-md  mb-1">Christmas Wishlist</h4>
                  <span className="text-gray-500 text-sm">14 items</span>
                </div>
                <Link
                  to={``}
                  className=" text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  View
                </Link>
              </div>
            </div>

            <div className="  bg-white border border-gray-200 p-4 rounded-2xl h-fit">

              <h3 className="text-2xl font-semibold mb-5">Share your wishlist</h3>
              <span className="text-gray-500 text-sm">Share your wishlist with your friends and family </span>

                <div className=" p-4 flex gap-3 *:transition *:duration-300">
            <button className="btn w-1/2 flex flex-col items-center text-sm p-2 text-wrap bg-blue-500 hover:bg-blue-600 text-white">
              <FontAwesomeIcon icon={faFacebook} className="me-2" />
              facebook
            </button>
            <button className="btn w-1/2 flex flex-col items-center text-sm p-2 bg-violet-300 hover:bg-violet-400 text-white">
              <FontAwesomeIcon icon={faInstagram} className="me-2" />
              instagram
            </button>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
