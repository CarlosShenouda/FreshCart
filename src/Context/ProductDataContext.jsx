/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import { getProductById } from "../services/Product-services";
import { useParams } from "react-router";

export const ProductDataContext = createContext(null);



export default function ProductDataContextProvider({children}) {

const [ProductData, setProductData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const {id} = useParams();
  async function fetchProductDetails() {
    try {
      setLoading(true);
      const response = await getProductById({id});
      if (response.success) {
        setProductData(response.data.data);
    
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }


  return <ProductDataContext.Provider value={{ProductData , isLoading , error , fetchProductDetails , id} }>
    {children}
  </ProductDataContext.Provider>;
}
