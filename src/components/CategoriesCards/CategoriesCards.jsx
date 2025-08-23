import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function CategoriesCards({categoryInfo}) {
    const { name , image} = categoryInfo

    

  return (
    <>
       <div className="relative  h-38 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-fit h-fit object-cover hover:cursor-pointer"
        />
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="absolute bottom-4 left-4 text-white">
            <h2>{name}</h2>
        </div>

        <div>
            <button className="btn size-12 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors duration-300 absolute bottom-4 right-4 text-white">
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
      </div>
    </>
  );
}
