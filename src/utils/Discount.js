 export function CalcDiscount({ price, priceAfterDiscount }) {
  
    const discount = price - priceAfterDiscount;
    const discountPercentage = ((discount / price) * 100).toFixed(0);
    return discountPercentage;
 }