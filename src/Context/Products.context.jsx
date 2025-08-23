/* eslint-disable react-hooks/rules-of-hooks */
import {  createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/Product-services";



export const ProductsContext = createContext(null);

export default function productsProvider({children}) {

 const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [error, setError] = useState(null);
  
  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts();
      if (response.success) {
        setProducts(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error.massage);
      setError(error.massage);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
 


  return <ProductsContext.Provider value={{isLoading,products,iserror,error}}>
    {children}
  </ProductsContext.Provider>

}
