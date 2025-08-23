
export default function CheckoutItem({productData}) {
    const { product , price} = productData
  return <>
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
        <img src={product.imageCover} alt="" 
        className="w-16 h-14 object-contain"/>
    <h2 className="text-sm w-36 font-semibold">{product.title}</h2>
    </div>
    <span className="font-semibold">
        {price} EGP
    </span>
  </div>
  
  </>;
}
