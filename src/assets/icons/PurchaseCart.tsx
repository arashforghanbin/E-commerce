import React from "react";

interface Props {
  color?: string;
}

const PurchaseCart = ({ color = "#DC3A35" }: Props) => {
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
        d="M59.9799 33.4512L58.3025 43.0744C58.0956 44.1375 57.2487 44.7838 56.2719 44.796H31.8167L31.3311 47.5328H54.6387C55.8659 47.6261 56.6984 48.4955 56.7134 49.6075C56.6241 50.8323 55.7548 51.667 54.6387 51.6822H28.8591C27.4649 51.5568 26.6335 50.4455 26.7844 49.2102L27.8879 43.2068L26.2105 26.3441L21.4431 24.8433C20.278 24.3808 19.8025 23.3268 20.0746 22.2389C20.5271 21.1051 21.6112 20.587 22.6791 20.8705L28.7708 22.8128C29.5915 23.1204 30.0636 23.7922 30.1834 24.5785L30.5365 27.9334L58.17 31.0234C59.4397 31.2984 60.129 32.3041 59.9799 33.4512ZM35.1757 56.0385C35.1757 57.7877 33.7577 59.2058 32.0085 59.2058C30.2592 59.2058 28.8412 57.7877 28.8412 56.0385C28.8412 54.2893 30.2593 52.8712 32.0085 52.8712C33.7577 52.8713 35.1757 54.2893 35.1757 56.0385ZM54.0841 56.0385C54.0841 57.7877 52.6661 59.2058 50.9168 59.2058C49.1676 59.2058 47.7496 57.7877 47.7496 56.0385C47.7496 54.2893 49.1676 52.8712 50.9168 52.8712C52.6661 52.8713 54.0841 54.2893 54.0841 56.0385Z"
        fill="#FFFCB5"
      />
    </svg>
  );
};

export default PurchaseCart;
