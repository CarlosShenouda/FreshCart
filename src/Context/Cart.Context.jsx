/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { AddProductToCart, getCartItems,  removeItemFromCart, updateProductCount } from "../services/Cart-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const CartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [cartInfo, setCartInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await AddProductToCart({ id });
      console.log(response);
      if (response.success) {
        toast.success(response.data.message);
        setCartInfo(response.data);
        await handleFetchCartItems();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }


async function handleFetchCartItems(showLoading = true) {
  try {
    showLoading && setIsLoading(true); 
    const response = await getCartItems();
    if (response.success) {
      setCartInfo(response.data);
      showLoading && setIsLoading(false);
    }
  } catch (error) {
    showLoading && setIsLoading(false);
    setIsError(true);
    setError(error);
  }
}

useEffect(() => {
  handleFetchCartItems();
}, []);


async function handleRemoveProductFromCart({ id }) {
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
  const response = await removeItemFromCart({ id });
  if (response.success) {
    setIsLoading(false);
    toast.dismiss(toastId);
    toast.success("Product removed successfully");
    await handleFetchCartItems(false);
}
    }
  } catch (error) {
    setIsLoading(false);
    setIsError(true);
    setError(error);
  }
}


 async function handleUpdateProductCount({id , count}){
 try {
  const toastID =toast.loading("Product quantity updating...");
  const response = await updateProductCount({id , count})
 if(response.success){
toast.dismiss(toastID);
toast.success("Product quantity updated successfully");
  setCartInfo(response.data);
 }
 } catch (error) {
  setIsLoading(false);
  setIsError(true);
  setError(error);
 }
}





  return (
    <CartContext.Provider
      value={{ cartInfo, isLoading, iserror, error, handleAddingProductToCart , handleFetchCartItems , handleRemoveProductFromCart , handleUpdateProductCount}}
    >
      {children}
    </CartContext.Provider>
  )
}