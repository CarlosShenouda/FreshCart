/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";
import { addProductToWishlist, getWishlistItems, removeItemFromWishlist } from "../services/Wishlist-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const WishlistContext = createContext(null);
export default function WishlistContextProvider({children}) {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [iserror, setIsError] = useState(false);
    const [error, setError] = useState(null);


   async function handleAddingProductToWishlist({ id }) {
        try {
          setIsLoading(true);
          const response = await addProductToWishlist({ id });
          if (response.success) {
            toast.success(response.data.message);
            setWishlist(response.data.data);
            await handleFetchWishlistItems();
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
          setError(error);
        }

    }


async function handleFetchWishlistItems(showLoading = true) {
  try {
   showLoading && setIsLoading(true);

    const response = await getWishlistItems();

    if (response.success) {
      setWishlist(response.data.data);
    }

    showLoading && setIsLoading(false);
  } catch (error) {
    showLoading && setIsLoading(false);
    setIsError(true);
    setError(error);
  }
}


     useEffect(() => {
    handleFetchWishlistItems();
  }, []);







async function handleRemoveItemFromWishlist({ id }) {
  try {
    const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
if(result.isConfirmed){
  const toastId = toast.loading("Please wait...");
  const response = await removeItemFromWishlist({ id });
  if (response.success) {
    setIsLoading(false);
    toast.dismiss(toastId);
    toast.success("Product removed successfully");
    await handleFetchWishlistItems(false);
}
    }
  } catch (error) {
    setIsLoading(false);
    setIsError(true);
    setError(error);
  }
}




  return (
    <WishlistContext.Provider value={{ handleAddingProductToWishlist , handleFetchWishlistItems, handleRemoveItemFromWishlist ,wishlist , isLoading , iserror , error}}>
{children}
    </WishlistContext.Provider>
  );
}
