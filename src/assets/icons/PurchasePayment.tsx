import React from "react";

interface Props {
  color?: string;
}

const PurchasePayment = ({ color = "#DC3A35" }: Props) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="40" fill={color} />
      <path
        d="M56 25H24C21.794 25 20 26.794 20 29V53C20 55.206 21.794 57 24 57H56C58.206 57 60 55.206 60 53V29C60 26.794 58.206 25 56 25ZM24 29H56V33H24V29ZM24 53V41H56.002L56.004 53H24Z"
        fill="#FFFCB5"
      />
      <path d="M28 45H40V49H28V45Z" fill="#FFFCB5" />
    </svg>
  );
};

export default PurchasePayment;
