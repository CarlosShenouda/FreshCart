import { Link } from "react-router";
import img1 from "../../assets/imgs/pure harvest.jpg";
import img2 from "../../assets/imgs/dairy-delights-870x570.jpg";
import img3 from "../../assets/imgs/grain.webp";
import img4 from "../../assets/imgs/deals-shake.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import BrandCard from "../../components/BrandCard/BrandCard";
import { GetAllBrands, GetBrandById } from "../../services/brands-services";
import Loading from "../../components/Loading/Loading";
export default function Brands() {
  const [sortOption, setSortOption] = useState("az");
  const [searchTerm, setSearchTerm] = useState("");
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iserror, setIsError] = useState(false);

  async function handleGettingAllBrands() {
    try {
      setLoading(true);
      const response = await GetAllBrands();
      if (response.success) {
        setLoading(false);
        setBrands(response.data.data);
      }
    } catch (error) {
      setError(error);
      setIsError(true);
    }
  }

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    handleGettingAllBrands();
  }, []);

  return (
    <>
    <title>Brands</title>
      <section className="py-10">
        {/* Brand Heading */}
        <div className="bg-white mb-5 px-6 py-14">
          <div className="brand-heading text-center w-3/6 mx-auto ">
            <h2 className="text-3xl font-semibold mb-4">Our Partner Brands</h2>
            <p className="text-gray-700">
              Discover quality products from our trusted brand partners. We've
              partnered with leading brands to bring you the best selection of
              fresh and organic products.
            </p>
          </div>
        </div>
        {/* first section */}
        <div className="custom-container">
          <h2 className="text-2xl font-semibold mb-6">Featured Brands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Nature's Harvest */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="relative h-45 w-full overflow-hidden">
                <img
                  src={img1}
                  alt="Nature's Harvest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[65%] left-5 ">
                  <h2 className="text-2xl font-semibold text-white">
                    Nature's Harvest
                  </h2>
                  <span className="text-sm text-white">
                    Premium Organic Produce
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Nature's Harvest</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Premium Organic Produce
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Bringing the freshest organic fruits and vegetables from farm
                  to table since 1995.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">124 Products</span>
                  <Link
                    href="#"
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - Pure Dairy */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="relative h-45 w-full overflow-hidden">
                <img
                  src={img2}
                  alt="Pure Dairy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-[65%] left-5 ">
                  <h2 className="text-2xl font-semibold text-white">
                    Pure Dairy
                  </h2>
                  <span className="text-sm text-white">
                    Farm Fresh Dairy Products
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Pure Dairy</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Farm Fresh Dairy Products
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Ethically sourced dairy products from family-owned farms with
                  no artificial additives.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">87 Products</span>
                  <Link
                    href="#"
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 - Hearth & Grain */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="relative h-45 w-full overflow-hidden ">
                <img
                  src={img3}
                  alt="Hearth & Grain"
                  className="w-full h-full object-cover "
                />
                <div className="absolute top-[65%] left-5 ">
                  <h2 className="text-2xl font-semibold text-white">
                    Hearth & Grain
                  </h2>
                  <span className="text-sm text-white">
                    Artisan Bakery Products
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Hearth & Grain</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Artisan Bakery Products
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Handcrafted breads and pastries made with traditional methods
                  and organic ingredients.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">62 Products</span>
                  <Link
                    href="#"
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* second section */}
          <div className="py-10 my5">
            <div className="flex items-center justify-between">
              <div className="relative w-fit">
                <input
                  type="text"
                  placeholder="Search brands"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control w-66 border-2 border-gray-300 rounded pe-10 py-2"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-600 absolute right-3 top-1/2 transform -translate-y-1/2"
                />
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="sort"
                  className="text-sm text-gray-700 font-medium"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="az">Alphabetical: A-Z</option>
                  <option value="za">Alphabetical: Z-A</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 p-8">
              {loading ? (
                <Loading />
              ) : filteredBrands.length > 0 ? (
                filteredBrands.map((brand) => (
                  <BrandCard key={brand._id} brandData={brand} />
                ))
              ) : (
                <p className="text-center w-full font-semibold col-span-full text-gray-500/70">
                  No brands found with this name.
                </p>
              )}
            </div>
          </div>

          {/* third section */}
          <div className="bg-green-50 py-10 px-4 ">
            <div className="md:h-99 md:w-[700px] lg:w-[1000px] mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-md">
              {/* Text Content */}
              <div className="w-full md:w-3/4 h-full p-6 ">
                <h2 className="text-xl lg:text-3xl font-bold mb-4">
                  Want to become a brand partner?
                </h2>
                <p className="text-gray-600 mb-4">
                  Join our growing family of quality brands. Showcase your
                  products to our engaged customer base and grow your business
                  with FreshCart.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4 lg:mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    Access to over 1 million active customers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    Dedicated account manager for your brand
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    Marketing and promotional opportunities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    Streamlined logistics and fulfillment
                  </li>
                </ul>
                <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                  Apply to Become a Partner
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 h-full">
                <img
                  src={img4}
                  alt="Become a Partner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
