import {
  faCartShopping,
  faRotateLeft,
  faShareNodes,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingStars from "../../components/RatingStars/RatingStars";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CalcDiscount } from "./../../utils/Discount";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart.Context";

export default function ProductInfo({ ProductData }) {
  const {
    id,
    images,
    price,
    priceAfterDiscount,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    description,
    title,
  } = ProductData;

  const { handleAddingProductToCart, handleRemoveProductFromCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);

  const handleAdd = () => {
    handleAddingProductToCart({ id });
    setInCart(!inCart);
  };

  const handleRemove = () => {
    handleRemoveProductFromCart({id}); 
    setInCart(!inCart);
  };
  return (
    <>
      <section>
        <div className="custom-container grid grid-cols-12 p-6 my-5">
          {/* left side */}
          <div className="left-side col-span-12 md:col-span-4 lg:w-80">
            <ReactImageGallery
              showNav={false}
              showPlayButton={false}
              items={images.map((image) => {
                return {
                  original: image,
                  thumbnail: image,
                };
              })}
            />
          </div>

          {/* right side */}
          <div className="right-side col-span-12 md:col-span-8 space-y-3 bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <span
                className={
                  quantity > 0
                    ? "bg-green-500/25 px-2 py-1 text-primary-600 rounded-2xl text-sm"
                    : "bg-red-500/25 px-2 py-1 text-primary-600 rounded-2xl text-sm"
                }
              >
                {quantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShareNodes} />
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex items-center gap-2">
              <RatingStars rating={ratingsAverage} />
              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity} reviews)</span>
            </div>
            <span className="text-3xl font-bold me-2.5">
              {priceAfterDiscount || price} EGP
            </span>
            <span className="text-2xl font-bold">
              {priceAfterDiscount ? (
                <>
                  <span className="line-through opacity-70">{price} EGP</span>
                  <span className="text-red-600 bg-gray-200 rounded-2xl px-2 text-xs ms-2.5 p-1 ">
                    save {CalcDiscount({ price, priceAfterDiscount })}% off
                  </span>
                </>
              ) : (
                ""
              )}
            </span>

            <p className="border-t border-gray-200 py-4 text-gray-600/75 text-sm">
              {description}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 mb-4">
              <span> Quantity : </span>
              <div className="flex items-center border-2 border-gray-200/95 rounded-md overflow-hidden">
                <button className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
                  –
                </button>
                <span className="w-10 text-center ">1</span>
                <button className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
                  +
                </button>
              </div>
              <span>only {quantity} items left on the stock</span>
            </div>
            <div className="flex gap-2 ">
              {inCart ? (
       <button
          className="btn flex-grow-1 bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
          onClick={handleRemove}
        >
          <FontAwesomeIcon icon={faTrash} className="me-2" />
          Remove from cart
        </button>
      ) : (
         <button
          className="btn flex-grow-1 bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
          onClick={handleAdd}
        >
          <FontAwesomeIcon icon={faCartShopping} className="me-2" />
          Add to cart
        </button>
      )}
              <button className="btn flex-grow-1 bg-transparent border border-gray-300 hover:bg-gray-200/80 transition-colors duration-300">
                Buy now
              </button>
            </div>
            <div className="flex gap-2 mt-4 border-t border-gray-200">
              <div className="grid grid-cols-4">
                <div className="flex items-center p-2 md:p-4 rounded-xl w-44 md:w-64 bg-white">
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
              </div>
              <div className="grid grid-cols-4">
                <div className="flex items-center p-2 md:p-4 rounded-xl w-44 md:w-64 bg-white">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mr-4">
                    <FontAwesomeIcon
                      icon={faRotateLeft}
                      className="size-6 text-green-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      30 Days Return
                    </h4>
                    <p className="text-xs text-gray-500">
                      Satisfaction guaranteed
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
