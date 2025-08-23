import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { GetAllCategories } from "../../services/Category-services";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { categoryContext } from "./../../Context/Category.context";

export default function HomeCategories() {
  const { categories, isLoading } = useContext(categoryContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="custom-container">
          <div className="flex items-center justify-between mb-6 ">
            <h2 className="text-xl lg:text-2xl font-bold">
              Shop by Categories
            </h2>
            <Link
              to={`/`}
              className="flex items-center gap-2 *:hover:text-primary-800 *:transition-colors *:duration-300"
            >
              <span className="text-primary-600 text-nowrap">
                Show All Categories
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary-600"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-6">
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/categories/${category._id}`}
                  className="card cursor-pointer p-4 flex flex-col items-center justify-center shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="size-16 object-cover rounded-full mb-4"
                  />
                  <h3>{category.name}</h3>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-full">
                No categories available
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
