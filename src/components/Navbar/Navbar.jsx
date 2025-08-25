import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faHouse,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import FreshCartLogo from "../../assets/imgs/freshcart-logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/Cart.Context";
import { ProductsContext } from "../../Context/Products.context";

export default function Navbar() {
const [isMenuOpen , setIsMenuOpen] =useState(false)

function toggleMenu(){
  setIsMenuOpen(!isMenuOpen)
}
const {logOut , token} = useContext(AuthContext)
const {cartInfo ,isLoading} = useContext(CartContext)
  return (
    <>
      <header >
        <div className="custom-container">
          {/* top nav */}
          <div className="hidden lg:flex items-center justify-between p-2 border-b-[2px] border-gray-400/50">
            <ul className="flex gap-3 ">
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+1 (800) 123-4567" className="text-sm">
                  +1 (800) 123-4567
                </a>
              </li>

              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:support@freshcart.com" className="text-sm">
                  {" "}
                  support@freshcart.com
                </a>
              </li>
            </ul>

            <ul className="flex gap-3 *:text-sm">
              <li>
                <Link to={`/`}>Track Order</Link>
              </li>
              <li>
                <Link to={`/`}>About</Link>
              </li>
              <li>
                <Link to={`/`}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>USD</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option>العربيه</option>
                  <option>English</option>
                </select>
              </li>
            </ul>
          </div>

          {/* main nav */}
          <nav className="flex items-center justify-between p-4">
            <h1>
              <Link to={`/home`}>
                <img src={FreshCartLogo} alt="" className="cursor-pointer"/>
              </Link>
            </h1>


            <search className="relative hidden lg:block">
              <input
                type="text"
                className="form-control min-w-96"
                placeholder="Search For Products"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-3 top-1/2 -translate-1/2"
              />
            </search>

            <div>
              <ul className="hidden lg:flex gap-6 items-center">
                <li>
                  <NavLink
                    to={`wishlist`}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500" : " "
                      }   flex flex-col items-center space-y-1.5 hover:text-primary-500 transition-colors duration-300`;
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                    <h4 className="text-sm">Wishlist</h4>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`cart`}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col items-center space-y-1.5 hover:text-primary-500 transition-colors duration-300`;
                    }}
                  >
                  <div className="relative mb-0">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-xl "
                      />
                      <span className="absolute -top-2 -right-2 text-[10px] bg-primary-600 text-white px-1.5 py-0.5 rounded-full">
                       {isLoading ? <FontAwesomeIcon spin icon={faSpinner}/> : cartInfo.numOfCartItems}
                      </span>
                    </div>
                    <h4 className="text-sm pt-1">Cart</h4>
                  </NavLink>
                </li>
                
               {token ?<li onClick={logOut}>
                  <NavLink
                    to={`logout`}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col items-center space-y-1.5 hover:text-primary-500 transition-colors duration-300`;
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      className="text-xl"
                    />
                    <h4 className="text-sm ">Logout</h4>
                  </NavLink>
                </li> :  <>
                <li>
                  <NavLink
                    to={`signup`}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col items-center space-y-1.5 hover:text-primary-500 transition-colors duration-300`;
                    }}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                    <h4 className="text-sm">Sign up</h4>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`login`}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600" : ""
                      } flex flex-col items-center space-y-1.5 hover:text-primary-500 transition-colors duration-300`;
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="text-xl"
                    />
                    <h4 className="text-sm">Login</h4>
                  </NavLink>
                </li>
                </>}
                
              </ul>
            </div>


            <button className="lg:hidden btn text-white bg-primary-600" onClick={toggleMenu}>
              {isMenuOpen ?  <FontAwesomeIcon icon={faXmark}  /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </nav>
        </div>

        <nav className="bg-gray-200/40  p-2 hidden md:block">
          <div className="custom-container flex items-center ">
            <div className="relative group">
              <button className="btn bg-primary-600 me-4 text-white hover:bg-primary-600/90 cursor-pointer">
                <FontAwesomeIcon icon={faBars} className="me-2" />
                <span className="me-2 ">All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="hidden z-40 absolute group-hover:block right- *:py-2 *:px-3 *:flex *:items-center *:hover:bg-gray-200 bg-white shadow-2xl rounded-2xl divide-y-2 divide-gray-300/30">
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="text-primary-600 me-2.5"
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      className="text-primary-600 me-2.5"
                    />
                    <span>Woman's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      className="text-primary-600 me-2.5"
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faSuitcaseMedical}
                      className="text-primary-600 me-2.5"
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="text-primary-600 me-2.5"
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/`}>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="text-primary-600 me-2.5"
                    />
                  </Link>{" "}
                  <span>View all category</span>
                </li>
              </menu>
            </div>

            <ul className="flex gap-3">
              <li>
                <NavLink to={`/`}
                  className={({ isActive }) => (isActive ? "text-primary-600" : "")}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/brands`}
                className={({isActive})=>isActive ? "text-primary-600" : ""}>Brands</NavLink>
              </li>
              <li>
                <NavLink to={`/featuredProducts`}
                className={({isActive})=>isActive ? "text-primary-600" : ""}>Featured Products</NavLink>
              </li>
              <li>
                <NavLink to={`/homeDeals`}
                className={({isActive})=>isActive ? "text-primary-600" : ""}>Deals</NavLink>
              </li>
             <li>
                <NavLink to={`/categories`}
                className={({isActive})=>isActive ? "text-primary-600" : ""}>Categories</NavLink>
              </li>
            </ul>
          </div>
        </nav>



        {/* offcanves */}
     {isMenuOpen && <>
     
   <div className="background bg-black/55 fixed inset-0 z-30" onClick={toggleMenu}></div>
        <div className="offcanves bg-white fixed top-0 bottom-0 z-40 p-3 animate-slideIn">
          <div className="flex items-center justify-between px-4 py-3 ">
              <h1>
              <Link to={`/home`}>
                <img src={FreshCartLogo} alt="" />
              </Link>
            </h1>
            <button className="btn p-2 rounded-full hover:bg-gray-400/80 hover:cursor-pointer">
              <FontAwesomeIcon icon={faXmark}  className="size-6" onClick={toggleMenu}/>
            </button>
          </div>
          
            <search className="relative p-4 border-b-2 border-gray-200">
              <input
                type="text"
                className="form-control min-w-64 "
                placeholder="Search For Products"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-5 top-1/2 -translate-1/2"
              />
            </search>

            <div className="p-4">
              <h2 className="font-semibold">
                Main menu
              </h2>

              <ul className="mt-2  *:hover:bg-gray-200 *:hover:rounded-2xl *:my-2">
                  <li className="">
                  <NavLink
                    to={`wishlist`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : " "
                      }   flex gap-2 items-center  transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                    <h4 className="text-sm">Wishlist</h4>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to={`cart`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : ""
                      }  flex gap-2 items-center   transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                   <div className="relative">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-xl"
                      />
                      <span className="absolute -top-2 -right-2 text-[10px] bg-primary-600 text-white px-1.5 py-0.5 rounded-full">
                        {isLoading ? <FontAwesomeIcon spin icon={faSpinner}/> : cartInfo.numOfCartItems}
                      </span>
                    </div>
                    <h4 className="text-sm">Cart</h4>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to={`/`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : ""
                      } flex gap-2 items-center   transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                    <FontAwesomeIcon icon={faHouse} className="text-xl" />
                    <h4 className="text-sm">Home</h4>
                  </NavLink>
                </li>
              </ul>
            </div>


              <div className="p-4 border-t-2 border-gray-200">
              <h2 className="font-semibold">
                 Account
              </h2>

              <ul className="mt-2 *:hover:bg-gray-200 *:hover:rounded-2xl *:my-2">
               
                {token ? <li className="" onClick={logOut}>
                  <NavLink
                    to={`logout`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : ""
                      } flex gap-2 items-center   transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      className="text-xl"
                    />
                    <h4 className="text-sm">Logout</h4>
                  </NavLink>
                </li>: <>
                 <li className="my-2">
                  <NavLink
                    to={`signup`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : ""
                      } flex gap-2  items-center   transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                    <h4 className="text-sm">Sign up</h4>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to={`login`}
                    onClick={toggleMenu}
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-600 bg-primary-400/60" : ""
                      } flex gap-2 items-center   transition-colors duration-300 p-2 rounded-2xl`;
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="text-xl"
                    />
                    <h4 className="text-sm">Login</h4>
                  </NavLink>
                </li >
                </> }
              </ul>
            </div>
        </div>     
     
     </>}
      </header>
    </>
  );
}


