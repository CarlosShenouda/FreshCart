import {Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import{ Navigation, Pagination ,Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slider1 from "../../assets/imgs/slider-1.webp";
import slider2 from "../../assets/imgs/slider-2.webp";
import slider3 from "../../assets/imgs/slider-3.webp";

export default function HomeSlider() {
  return <>
  <Swiper slidesPerView={1} loop={true} spaceBetween={10}  modules={[Navigation, Pagination , Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }}>
    <SwiperSlide >
      <div style={{ backgroundImage: `url('${slider1}')`, backgroundPosition: "center", backgroundSize: "cover"}} >
        <div className="overlay py-22 bg-gradient-to-r from-black/90 to-primary-600/40">
            <div className="custom-container space-y-4 text-white">
                <h2 className="text-2xl font-bold">Fresh products delivered <br /> to your door</h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                <button className="btn bg-white hover:bg-gray-100/95 text-primary-500 border-2 border-white">Shop now</button>
                    <button className="btn text-white hover:text-primary-600 hover:bg-white bg-transparent border-2 border-white">View deals</button>
                </div>
            </div>
        </div>
      </div>
    </SwiperSlide>

        <SwiperSlide>
      <div style={{ backgroundImage: `url('${slider2}')`, backgroundPosition: "center", backgroundSize: "cover" }} >
        <div className="overlay py-22 bg-gradient-to-r from-black/90 to-primary-600/40">
            <div className="custom-container space-y-4 text-white">
                <h2 className="text-2xl font-bold">Fresh products delivered <br /> to your door</h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                <button className="btn bg-white hover:bg-gray-100/95 text-primary-500 border-2 border-white">Shop now</button>
                    <button className="btn text-white hover:text-primary-600 hover:bg-white bg-transparent border-2 border-white">View deals</button>
                </div>
            </div>
        </div>
      </div>
    </SwiperSlide>

        <SwiperSlide>
      <div style={{ backgroundImage: `url('${slider3}')`, backgroundPosition: "center", backgroundSize: "cover" }} >
        <div className="overlay py-22 bg-gradient-to-r from-black/90 to-primary-600/40">
            <div className="custom-container space-y-4 text-white">
                <h2 className="text-2xl font-bold">Fresh products delivered <br /> to your door</h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                <button className="btn bg-white hover:bg-gray-100/95 text-primary-500 border-2 border-white">Shop now</button>
                    <button className="btn text-white hover:text-primary-600 hover:bg-white bg-transparent border-2 border-white">View deals</button>
                </div>
            </div>
        </div>
      </div>
    </SwiperSlide>
    
  </Swiper>
  
  
  </>
}
