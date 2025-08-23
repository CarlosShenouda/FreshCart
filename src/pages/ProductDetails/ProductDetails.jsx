import {  useEffect, useState } from "react";
import Loading from "./../../components/Loading/Loading";
import { getProductById } from "../../services/Product-services";
import { useParams } from "react-router";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductDetailsTabs from './../../components/ProductDetailsTabs/ProductDetailsTabs';
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

export default function ProductDetails() {
  const [ProductData, setProductData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
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

  useEffect(() => {
    fetchProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    <title>Product Details</title>
     <ProductInfo ProductData={ProductData}/>
     <ProductDetailsTabs />
     <RelatedProducts ProductData={ProductData}/>
    </>
  );
}
