import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import { ProductsContext } from "../../Context/Products.context";
import { useContext } from "react";

export default function FeaturedProducts() {
 
const {isLoading, products } = useContext(ProductsContext)
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section>
        <div className="custom-container ">
          <h2 className="text-lg lg:text-3xl font-bold m-4">Featured Products</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 p-3">
            {products.map((Product) => (
              <ProductCard key={Product._id} productInfo={Product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
