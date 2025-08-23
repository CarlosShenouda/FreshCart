import { useState } from "react";
import ProductInfoTab from './productInfoTab';
import ReviewTab from './reviewTab';
import ShippingTab from './shippingTab';

export default function ProductDetailsTabs() {

  const [activeTab, setActiveTab] = useState("details");
  
  
  
function getActiveTab(){
  switch(activeTab){
    case "details":
      return <ProductInfoTab />;
    case "reviews":
      return <ReviewTab />;
    case "shipping":
      return <ShippingTab />;
  }
}
  
  
  
  
    return <>
    <section id="product-details-tabs" className="py-8">
    <div className="custom-container mx-auto px-4">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button className={`px-6 py-4 font-medium ${activeTab === "details" ? "text-primary-600 border-b-2 border-primary-600" : "text-gray-600"}`} onClick={() => setActiveTab("details")}>Product Details</button>
            <button className={`px-6 py-4 font-medium ${activeTab === "reviews" ? "text-primary-600  border-b-2 border-primary-600" : "text-gray-600"}`} onClick={() => setActiveTab("reviews")}>Reviews (149)</button>
            <button className={`px-6 py-4 font-medium ${activeTab === "shipping" ? "text-primary-600 border-b-2 border-primary-600" : "text-gray-600"}`} onClick={() => setActiveTab("shipping")}>Shipping &amp; Returns</button>
          </div>
        </div>
        <div className="p-6">{getActiveTab()}</div>
      </div>
    </div>
  </section>
  
  
    
    
    
    
    
    
  
  
  </>
}
