import RatingStars from "../RatingStars/RatingStars";

export default function reviewTab() {
  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Customer Reviews</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
            Write a Review
          </button>
        </div>

        <div className="border-b border-gray-200 pb-2 mb-2.5">
          <div className="flex items-center justify-between space-x-2 text-gray-800 ">
            <div className="flex items-center space-x-2">
              <RatingStars rating={4.5} />
              <span className="text-sm font-medium ">4.5 out of 5</span>
            </div>
            <div className="review-data mt-3 text-gray-500 ">three days</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Based on 149 reviews</p>
        </div>

        <div className="border-b border-gray-200 pb-2 mb-2.5">
          <div className="flex items-center justify-between space-x-2 text-gray-800 ">
            <div className="flex items-center space-x-2">
              <RatingStars rating={5} />
              <span className="text-sm font-medium ">John D.</span>
            </div>
            <div className="review-data mt-3 text-gray-500 ">four days</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {" "}
            "Absolutely delicious! The strawberries were fresh, sweet, and
            perfectly ripe. Will definitely order again."
          </p>
        </div>

      <div className="border-b border-gray-200 pb-2 mb-2.5">
       <div className="flex items-center justify-between space-x-2 text-gray-800 ">
        <div className="flex items-center space-x-2">
          <RatingStars rating={4}/>
        <span className="text-sm font-medium "> Sarah M</span>
        </div>
        <div className="review-data mt-3 text-gray-500 ">
          one week
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">"Great quality organic strawberries. They lasted longer than expected in the fridge."</p>
     </div>
      </div>
    </>
  );
}
