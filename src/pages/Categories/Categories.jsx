import { useContext, useState } from "react";
import CategoriesCards from "../../components/CategoriesCards/CategoriesCards";
import { categoryContext } from "../../Context/Category.context";
import Loading from "../../components/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/imgs/category.jpg";
import HomeNewsLetter from "./../../components/HomeNewsLetter/HomeNewsLetter";
import SubcategoryCards from "../../components/CategoriesCards/SubcategoryCards";

export default function Categories() {
  const [sortOption, setSortOption] = useState("Featured");

  const { categories, isLoading } = useContext(categoryContext);
  const { subcategories } = useContext(categoryContext);
  console.log(subcategories);
  const selectedIndexes = [1, 2, 8, 9];
  const selectedIndexes2 = [3, 4, 7, 6];

  const filteredCategories = categories?.filter((_, index) =>
    selectedIndexes.includes(index)
  );

const filteredSubcategories = subcategories?.slice(0, 5);

  const filteredCategories2 = categories?.filter((_, index) =>
    selectedIndexes2.includes(index)
  );
  return (
    <>
    <title>Categories</title>
      <section className=" py-10">
        {/* first part */}
        <div>
          <div>
            <div className="custom-container flex items-center justify-between">
              <div>
                <h3 className="text-md md:text-2xl font-bold">
                  Shop by categories
                </h3>
                <span className="text-xs md:text-lg text-gray-500">
                  browse our wide selection of products by categories
                </span>
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="text-xs md:text-sm flex-nowrap text-gray-700 font-medium"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 pe-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="az">Featured</option>
                  <option value="za">Deals</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* second part categories cards */}
            <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 my-10">
              {isLoading ? (
                <Loading />
              ) : (
                filteredCategories?.map((category) => (
                  <CategoriesCards key={category._id} categoryInfo={category} />
                ))
              )}
            </div>
            {/* third part */}
            <div className="my-5 py-10 bg-gray-200/55">
             <div className="custom-container">
               <h3 className="text-md md:text-2xl font-bold">
                Popular Subcategories
              </h3>
              <div className=" grid grid-cols-2 md:grid-cols-5 gap-4 my-8 ">
                {isLoading ? (
                  <Loading />
                ) : (
                  filteredSubcategories?.map((category) => (
                    <SubcategoryCards
                      key={category._id}
                      subCategoryInfo={category}
                    />
                  ))
                )}
              </div>
             </div>
            </div>
            {/* fourth part */}
            <div className=" custom-container grid grid-cols-4 w-11/12 mx-auto rounded-2xl overflow-hidden my-25 ">
              <div className="content col-span-4 md:col-span-2 space-y-6 p-6">
                <span className="text-primary-500">Featured Category</span>
                <h2 className="text-2xl font-bold">Electronics & Fashion</h2>
                <p className="text-sm text-gray-700">
                  Discover our exclusive collection of the latest gadgets,
                  accessories, and trendy clothing — all with top quality and
                  great prices.
                </p>
                <div>
                  <ul className="space-y-2 *:text-sm *:lg:text-lg">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-yellow-400 me-2"
                      />
                      <span>Latest Models & Technologies</span>
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-yellow-400 me-2"
                      />
                      <span>High-Quality & Comfortable Materials</span>
                    </li>

                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-yellow-400 me-2"
                      />
                      <span>Fast & Secure Delivery to Your Doorstep</span>
                    </li>
                  </ul>
                </div>

                <button className="btn bg-primary-500 hover:bg-primary-600  text-black/80 hover:text-white transition-colors duration-300">
                  Explore Category
                </button>
              </div>
              <div className="img col-span-4 md:col-span-2 w-full h-full">
                <img src={img1} alt="" className="h-99 w-full object-cover" />
              </div>
            </div>

            {/* fifth part categories cards */}
            <div className="my-12 custom-container">
              <h2 className="text-2xl font-bold mb-8">Seasonal categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 ">
                {isLoading ? (
                  <Loading />
                ) : (
                  filteredCategories2.map((category) => (
                    <CategoriesCards
                      key={category._id}
                      categoryInfo={category}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <HomeNewsLetter />
      </div>
    </>
  );
}
