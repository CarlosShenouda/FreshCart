export default function shippingTab() {
  return (
    <>
      <div className="p-6 space-y-8">
        <h2 className="text-xl font-semibold mb-4">Shipping & Returns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div>
           <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <div className="text-gray-700 space-y-1 text-[16px]">
            <p>
              <span className="">Standard:</span> 3-5 business days
              ($4.99)
            </p>
            <p>
              <span className="">Express:</span> 1-2 business days
              ($9.99)
            </p>
            <p>
              <span className="">Free shipping:</span> Orders over
              $50 Return Policy
            </p>
          </div>
         </div>

       <div>
           <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
          <div className="text-gray-700 space-y-1 text-[16px]">
            <p>
              <span className="">Time limit:</span> 30 days
            </p>
            <p>
              <span className="">Condition:</span> Unopened original
              packaging
            </p>
            <p>
              <span className="">Refund:</span> Full refund available
            </p>
          </div>
       </div>
        </div>
      </div>
    </>
  );
}
