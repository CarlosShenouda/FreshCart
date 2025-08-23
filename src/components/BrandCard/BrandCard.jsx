import { Link } from "react-router";

export default function BrandCard({brandData }) {
        const {image , name , _id} = brandData

  return (
    <>
      <div className="card bg-white shadow-sm rounded-2xl">
        <div className="border-b border-gray-300 py-2">
          <img
            src={image}
            alt=""
            className="size-44 object-contain mx-auto rounded-2xl"
          />
        </div>
        <div className="content p-4 flex justify-between">
          
            <h2>{name}</h2>
            <Link to ={"/"} className="text-primary-500 hover:text-primary-600 transition-colors duration-300">view</Link>
        </div>
      </div>
    </>
  );
}
