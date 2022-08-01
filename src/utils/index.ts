// truncating text function
export const textTruncate = (source: string, size: number) => {
  return source.length > size ? source.slice(0, size - 1) + "..." : source;
};


// discount calculation
export const discountCalc = (
  hasDiscount: boolean,
  discount: number,
  initialPrice: number
) => {
  return hasDiscount ? initialPrice * (1 - discount / 100) : initialPrice;
};



