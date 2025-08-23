/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/Product-services";
import Loading from "../Loading/Loading";
import ProductCard from './../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RelatedProducts({ProductData}) {
const {category} = ProductData

  const [RelatedProducts ,setRelatedProducts] = useState ([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

async function fetchRelatedProducts(){
  try {
    setIsLoading(true)
    const response = await getAllProducts({category:category._id})
    console.log(response);
  if(response.success){
    setRelatedProducts(response.data.data)
    setIsLoading(false)
  }
} catch (error) {
  setError(true)
  setIsLoading(false)
  }
}


useEffect(() => {
  fetchRelatedProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


if(isLoading){
  return <Loading />
} 
  return (
  <>
    <section className="p-4 sm:p-6 lg:p-8">
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            You may also like
          </h3>
          <div className="flex justify-start sm:justify-end">
            <button className="Related-Next-EL btn rounded-full p-2 size-10 hover:bg-gray-300/80 me-3">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="Related-Prev-EL btn rounded-full p-2 size-10 hover:bg-gray-300/80">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          loop={true}
          navigation={{
            nextEl: ".Related-Prev-EL",
            prevEl: ".Related-Next-EL",
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },     // موبايل صغير
            480: { slidesPerView: 2.2 },   // موبايل كبير
            768: { slidesPerView: 3.2 },   // تابلت
            1024: { slidesPerView: 4 },    // لابتوب
            1280: { slidesPerView: 5 },    // شاشات كبيرة
          }}
        >
          {RelatedProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard productInfo={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  </>
);

}
