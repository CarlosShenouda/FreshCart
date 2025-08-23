/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";
import { GetAllCategories, getSubcategories } from "../services/Category-services";

export const categoryContext = createContext(null);

export default function CategoryProvider({children}) {
    const [categories, setCategories] = useState(null);
    const [subcategories, setSubcategories] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const[error , setError] = useState(null)


  async function FetchCategories() {
    try {
      setLoading(true);
      const response = await GetAllCategories();

      if (response.success) {
        setCategories(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.massage);
    }
  }

  useEffect(() => {
    FetchCategories();
  }, []);


async function handleGettingSubcategories() {
    try {
      setLoading(true);
      const response = await getSubcategories();
      if (response.success) {
        setSubcategories(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.massage);
    }
  }

  useEffect(() =>{
    handleGettingSubcategories();
  }, [])

  return <categoryContext.Provider value={{subcategories, categories , isLoading  , error}}>
    {children}
  </categoryContext.Provider>
}
