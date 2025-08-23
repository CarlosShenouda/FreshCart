import { Link } from "react-router";
import RatingStars from "../RatingStars/RatingStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/Cart.Context";
import { useContext, useState } from "react";
import { WishlistContext } from "../../Context/WishlistContext";

export default function WishlistItem({ wishlistProductData }) {
  const {
    imageCover,
    priceAfterDiscount,
    price,
    ratingsAverage,
    title,
    category,
    id,
  } = wishlistProductData;
  const { handleAddingProductToCart, handleRemoveProductFromCart } =
    useContext(CartContext);

    const {handleRemoveItemFromWishlist , } = useContext(WishlistContext);
  const [inCart, setInCart] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = () => {
    handleAddingProductToCart({ id });
    setInCart(!inCart);
  };

  const handleRemove = () => {
    handleRemoveProductFromCart({ id });
    setInCart(!inCart);
  };

 return (
  <>
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-200 px-3 sm:px-5 py-5 sm:py-7`}
    >
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Link to={`/product/${id}`}>
          <img
            src={imageCover}
            alt=""
            className="w-24 h-24 sm:size-16 rounded-2xl object-contain"
          />
        </Link>
      </div>

      {/* Details + Actions */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-0">
        {/* Product Details */}
        <div className="flex flex-col *:text-sm *:mb-1 text-center sm:text-left">
          <span className="text-gray-500">{category.name}</span>
          <h4 className="font-semibold text-xs">
            <Link to={`/product/${id}`}>{title}</Link>
          </h4>
          <div className="flex items-center justify-center sm:justify-start">
            <RatingStars rating={ratingsAverage} />
            <span className="ratingsAverage ms-2 font-semibold">
              {ratingsAverage}
            </span>
          </div>
          <span className="font-semibold">
            {priceAfterDiscount ? priceAfterDiscount : price} EGP
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-col xl:flex-row items-center gap-3 sm:gap-2 w-full sm:w-auto">
          {inCart ? (
            <button
              className="btn  w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 transition-colors duration-300"
              onClick={handleRemove}
            >
              <FontAwesomeIcon icon={faTrash} className="me-2" />
              Remove from cart
            </button>
          ) : (
            <button
              className="btn w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
              onClick={handleAdd}
            >
              <FontAwesomeIcon icon={faCartShopping} className="me-2" />
              Add to cart
            </button>
          )}
          <div
            className="cursor-pointer p-2 rounded-full  hover:text-white text-red-500/90 text-lg transition-colors duration-200"
            onClick={() => {
              handleRemoveItemFromWishlist({ id });
            }}
          >
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
