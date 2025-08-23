import { ToastContainer } from "react-toastify";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductProvider from "./Context/Products.context";
import CategoryProvider from "./Context/Category.context";
import AuthContextProvider from "./Context/AuthContext";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Wishlist from "./pages/Wishlist/Wishlist";
import CartContextProvider from "./Context/Cart.Context";
import ProductDataContextProvider from "./Context/ProductDataContext";
import WishlistContextProvider from "./Context/WishlistContext";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import HomeDeals from "./components/HomeDeals/HomeDeals";
import Brands from "./pages/Brands/Brands";
import Categories from "./pages/Categories/Categories";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "featuredProducts",
        element: <FeaturedProducts />,
      },
      {
        path: "homeDeals",
        element: <HomeDeals />,
      },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "logout",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        basename: "/FreshCart",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ProductDataContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <CategoryProvider>
              <WishlistContextProvider>
                <ProductProvider>
                  <RouterProvider router={routes} />
                  <ToastContainer autoClose={3000} position="top-right" />
                </ProductProvider>
              </WishlistContextProvider>
            </CategoryProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductDataContextProvider>
    </>
  );
}

export default App;
