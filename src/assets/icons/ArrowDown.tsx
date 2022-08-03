import classNames from "classnames";

interface Prop {
  reverse?: boolean;
}

const ArrowDown = ({ reverse }: Prop) => {
  const arrowClassNames = classNames(reverse && "rotate-180");
  return (
    <svg
      className={arrowClassNames}
      width="16"
      height="16"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.62 5.25L7.81667 9.05334C7.3675 9.5025 6.6325 9.5025 6.18334 9.05334L2.38 5.25"
        stroke="#454545"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
