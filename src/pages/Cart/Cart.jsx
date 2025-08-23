import { faShieldHalved, faShoppingCart, faTruck } from "@fortawesome/free-solid-svg-icons";
import CartItem from "../../components/CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.Context";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";

export default function Cart() {
    const { cartInfo, isLoading } = useContext(CartContext);

const numOfCartItems = cartInfo?.numOfCartItems;
const products = cartInfo?.data?.products || [];
const totalCartPrice = cartInfo?.data?.totalCartPrice;

    if(isLoading){
        return <Loading/>
    }
  return (
    <>
    <title>Cart</title>
      <section className="py-8">
        <div className="custom-container grid grid-cols-12 gap-4">
          {/* right side */}
          <div className="right-side col-span-12 md:col-span-8 border border-gray-200 rounded-2xl overflow-hidden bg-white h-fit">
            <div className="border-b border-gray-200 p-4">
              <h3 className="text-2xl font-semibold mb-1">Shopping Cart</h3>
              <p className="text-sm text-gray-500">{numOfCartItems} items in cart</p>
            </div>

            <div className="">
            {products.length > 0 ? products.map((product) => (
                <CartItem key={product._id} productData={product} />
              )) :<div className="p-4 text-center ">
                <p className="pb-4"> Your cart is empty <FontAwesomeIcon icon={faShoppingCart} /> </p>

                <p>You can continue shopping from <Link to={"/"} className="text-primary-600">here</Link></p>
                </div>}
            </div>
          </div>
          {/* left side */}
          <div className="left-side  col-span-12 md:col-span-4 bg-white border border-gray-200 p-4 rounded-2xl h-fit">
            <h3 className="text-xl font-semibold mb-3 md:text-2xl">
              Order Summary
            </h3>
            <ul className="*:flex *:justify-between *:space-y-3 *:text-gray-500 border-b border-gray-200 ">
              <li>
                <span>Subtotal ({numOfCartItems} items)</span>
                <span>{totalCartPrice}</span>
              </li>

              <li>
                <span>Shipping</span>
                <span>{products.length > 0 ? 70 : 0}</span>
              </li>

              <li>
                <span>Tax</span>
                <span>{Math.trunc(totalCartPrice * 0.14)}</span>
              </li>
            </ul>
            <div className="flex justify-between mt-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">{products.length > 0 ? Math.trunc(totalCartPrice + 70 + totalCartPrice * 0.14): 0 }</span>
            </div>
            <div className="flex flex-col mt-4 gap-2">
              <Link to={"/checkout"} className="text-center btn bg-primary-600 text-white hover:bg-primary-600/90">
                Proceed to Checkout
              </Link>
              <button className="btn bg-transparent border-2 border-gray-200/95 hover:bg-gray-200">
                <Link to={"/"}>Continue Shopping</Link>
              </button>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center p-4 bg-gray-100/70 rounded-xl ">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="size-6 text-green-500"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Free Delivery
                  </h4>
                  <p className="text-xs text-gray-500">Orders $50 or more</p>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <div className="flex items-center p-4 bg-amber-100/70 rounded-xl">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="size-6 text-green-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Secure Payment
                    </h4>
                    <p className="text-xs text-gray-500">
                      100% protected checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

