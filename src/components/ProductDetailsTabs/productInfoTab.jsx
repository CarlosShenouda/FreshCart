
export default function productInfoTab() {

  return <>
 

  <div className="p-6 space-y-8">
  {/* Product Description */}
  <div>
    <h2 className="text-xl font-semibold mb-2">Product Description</h2>
    <p className="text-gray-700">
      Our organic strawberries are carefully grown without synthetic pesticides or fertilizers, ensuring you get the purest, most natural flavor in every bite. These vibrant red berries are handpicked at peak ripeness to guarantee maximum sweetness and nutritional value.
    </p>
  </div>

  {/* Benefits & Product Details */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Benefits */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Rich in vitamins C and K</li>
        <li>Good source of fiber and antioxidants</li>
        <li>Supports heart health</li>
        <li>Helps regulate blood sugar</li>
        <li>Promotes healthy skin</li>
      </ul>
    </div>

    {/* Product Details */}
    <div>
      <h3 className="text-lg font-semibold mb-2">Product Details</h3>
      <div className="text-gray-700 space-y-1">
        <p><span className="font-medium">Origin:</span> California, USA</p>
        <p><span className="font-medium">Cultivation:</span> Organic</p>
        <p><span className="font-medium">Storage:</span> Refrigerate upon arrival</p>
        <p><span className="font-medium">Shelf Life:</span> 5–7 days when refrigerated</p>
      </div>
    </div>
  </div>

  {/* How to Store */}
  <div>
    <h3 className="text-lg font-semibold mb-2">How to Store</h3>
    <p className="text-gray-700">
      For optimal freshness, refrigerate strawberries unwashed in their original container or in a paper towel-lined container. Wash just before eating. To extend shelf life, remove any damaged berries as soon as possible.
    </p>
  </div>
</div>

  
  
  
  
  </>
}
