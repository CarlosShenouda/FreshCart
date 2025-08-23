
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { CalcTimeLeft } from "../../utils/CounterDown";
import { ProductsContext } from "../../Context/Products.context";

export default function HomeDeals() {


  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

const {isLoading,products} =  useContext(ProductsContext);

  useEffect(() => {
   const timer =  setInterval(() => {
      const newTimeLeft = CalcTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000)
    return () => {clearInterval(timer)}
    }, []);




 if (isLoading) {
  return <Loading/>
 }

const deals = (products || [])
    .filter((product) => product.priceAfterDiscount)
    .slice(11, 16);

  return (
    <>
      <section>
        <div className="custom-container">
          <div className="flex items-center justify-between ">
            <div>
              <h2 className="text-lg lg:text-3xl font-bold m-4">Deals of the day</h2>
              <div className="counter flex items-center gap-2 mt-2">
                <div><p className="text-xs md:text-lg text-gray-600 mx-4">Offers ends in</p></div>
                <div className="size-7 text-xs md:text-lg rounded bg-gray-900 text-white flex items-center justify-center">
                  {String(timeLeft.hours).padStart(2,"0")} 
                </div>
                <span>:</span>
                <div className="size-7 text-xs md:text-lg rounded bg-gray-900 text-white flex items-center justify-center">
                  {String(timeLeft.minutes).padStart(2,"0")}  
                </div>
                <span>:</span>
                <div className="size-7 text-xs md:text-lg rounded bg-gray-900 text-white flex items-center justify-center">
                 {String(timeLeft.seconds).padStart(2,"0")}  
                </div>
              </div>
            </div>

            <Link
              to={`/deals`}
              className="text-primary-600 text-sm md:text-lg hover:text-primary-800 transition-colors duration-300"
            >
              View all deals
            </Link>
          </div>

          <div className=" card grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 p-3">
            {deals.map((product) => (
              <ProductCard key={product._id} productInfo={product} /> ))}
          </div>


        </div>
      </section>
    </>
  );
}

