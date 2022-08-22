// truncating text function
export const textTruncate = (source: string, size: number) => {
  return source.length > size ? source.slice(0, size - 1) + "..." : source;
};

// discount calculation
export const discountCalc = (
  hasDiscount: boolean,
  discount: number | any,
  initialPrice: number
) => {
  return hasDiscount ? initialPrice * (1 - discount / 100) : initialPrice;
};

export const spaceToUnderLine = (input: string) => {
  return input.replace(/ /g, "_");
};

export const underLineToSpace = (input: string) => {
  return input?.replace(/_/g, " ");
};

export const toHijric = (input: number) => {
  return new Intl.DateTimeFormat("fa-IR").format(new Date(input));
};

export const toFarsiDigits = (input: any) => {
  return input.toLocaleString("fa-IR");
};
