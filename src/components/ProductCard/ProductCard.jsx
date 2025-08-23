import { faCodeCompare, faEye, faHeart as faHeartSolid , faPlus} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalcDiscount } from "../../utils/Discount";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router";
import {  useContext } from "react";
import { CartContext } from "../../Context/Cart.Context";
import { WishlistContext } from "../../Context/WishlistContext";

export default function ProductCard({productInfo}) {
  const {imageCover , priceAfterDiscount ,price ,ratingsQuantity , ratingsAverage ,title ,category , id} = productInfo ;
  const{handleAddingProductToCart} = useContext(CartContext)
  const { handleAddingProductToWishlist } = useContext(WishlistContext)

const { wishlist } = useContext(WishlistContext);
const isInWishlist = wishlist?.some((item) => item._id === id);


  return <>
              <div className="relative card rounded-xl flex flex-col space-y-2  text-white border-[1.5px] border-gray-300/70 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300   ">
              <Link to={`/product/${id}`} >
              <img
                src={imageCover}
                alt=""
                className="object-contain mb-0 w-full h-64"
              /></Link>

              <div className="card-content flex flex-col items-start p-4 text-black space-y-3">
                <span className="text-sm text-gray-500">{category.name}</span>
                <h3><Link to={`/product/${id}`} className="text-sm font-bold line-clamp-2">{title}</Link></h3>

                  <div className="rates flex items-center justify-start space-x-1">
                    <RatingStars rating={ratingsAverage}/>
                    <span className="ml-1 text-sm -mb-1 font-semibold">{ratingsAverage}</span>
                  <span className="ml-1 text-sm -mb-1 font-semibold">({ratingsQuantity})</span>
                  </div>
              

                <div className="price flex items-center justify-between w-full ">
                  <div>
                    <span className="text-xl font-bold me-2 ">{priceAfterDiscount ? priceAfterDiscount : price}</span>
                   {priceAfterDiscount  &&  <span className="line-through text-xl font-bold opacity-80">
                     {price}
                    </span>}
                  </div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="cursor-pointer bg-primary-600 text-white text-xl p-2 rounded-full hover:bg-primary-600/90 transition-colors duration-300"
                    onClick={()=>{
                      handleAddingProductToCart({id})
                    }}
                  />
                </div>

                <div className="side-icons absolute top-3 right-3 flex flex-col items-center justify-center space-y-2">
                  <FontAwesomeIcon
                    icon={isInWishlist ? faHeartSolid : faHeartRegular}
                    className="bg-white p-2 text-gray-600 rounded-full text-sm hover:bg-gray-400 hover:text-white transition duration-300 hover:cursor-pointer"
                    onClick={()=>{
                      handleAddingProductToWishlist({id})
                      
                    }
                  }
                  />
                  <FontAwesomeIcon
                    icon={faCodeCompare}
                    className="bg-white p-2 text-gray-600 rounded-full text-sm hover:bg-gray-400 hover:text-white transition duration-300 hover:cursor-pointer"
                  />
                  <Link to={`/product/${id}`}>
                  <FontAwesomeIcon
                    icon={faEye}
                    className="bg-white p-2 text-gray-600 rounded-full text-sm hover:bg-gray-400 hover:text-white transition duration-300 hover:cursor-pointer"
                  /></Link>
                </div>

              {priceAfterDiscount &&   <div className="badge absolute top-3 left-3 w-fit py-1 px-3 rounded-lg bg-red-500 text-sm text-white">
                 {CalcDiscount({ price, priceAfterDiscount })}% OFF
                </div>}
              </div>
            </div>
  
  </>
}
