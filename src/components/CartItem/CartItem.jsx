import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingStars from "../RatingStars/RatingStars";
import { faTrash, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart.Context";
import { Link } from "react-router";

export default function CartItem({ productData }) {
  const price = productData?.price;
  const count = productData?.count;
  const product = productData?.product;
  const id = productData?.product?._id;
  const name = productData?.product?.category?.name;

  const { handleRemoveProductFromCart, handleUpdateProductCount } =
    useContext(CartContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function handleIsUpdating({ id, count }) {
    setIsUpdating(true);
    await handleUpdateProductCount({ id, count });
    setIsUpdating(false);
  }
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-200 px-3 sm:px-5 py-5 sm:py-7 ${
          isUpdating ? "opacity-70" : ""
        }`}
      >
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Link to={`/product/${id}`}>
            <img
              src={product.imageCover}
              alt=""
              className="w-20 h-20 sm:size-16 rounded-2xl object-contain"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
          <div className="flex flex-col *:text-sm text-center sm:text-left">
            <h4 className="text-base sm:text-sm font-semibold">
              <Link to={`/product/${id}`}>{product.title}</Link>
            </h4>
            <span className="text-gray-500">{name}</span>
            <div className="flex items-center justify-center sm:justify-start mt-1">
              <RatingStars rating={product.ratingsAverage} />
              <span className="ratingsAverage ms-2 font-semibold">
                {product.ratingsAverage}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col xl:flex-row flex-wrap justify-center sm:justify-end items-center gap-3">
            {/* Quantity Controls */}
            <div className="flex items-center border-2 border-gray-200/95 rounded-md overflow-hidden">
              <button
                className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleIsUpdating({ id, count: count - 1 });
                }}
              >
                –
              </button>
              <span className="w-10 text-center">{count}</span>
              <button
                className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleIsUpdating({ id, count: count + 1 });
                }}
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-4 md:flex-col ">
              <div className="ms-0 sm:ms-2 text-center sm:text-left">
                <span className="price block font-semibold p-2 ">
                  {price} EGP
                </span>
              </div>

              {/* Remove Icon */}
              <FontAwesomeIcon
                icon={isHovered ? faTrashCanArrowUp : faTrash}
                className="text-red-500/90 text-xl cursor-pointer rounded-full transition-colors duration-200 p-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => handleRemoveProductFromCart({ id })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
