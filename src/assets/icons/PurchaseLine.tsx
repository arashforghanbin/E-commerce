import React from "react";

interface Props {
  color?: string;
}

const PurchaseLine = ({ color = "#DC3A35" }: Props) => {
  return (
    <svg
      width="200"
      height="8"
      viewBox="0 0 200 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="8" rx="4" fill={color} fillOpacity="0.4" />
    </svg>
  );
};

export default PurchaseLine;
