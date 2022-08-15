interface Props {
  strokeColor?: string
}

const Register = ({strokeColor = "#DC3A35"}:Props) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9584 18.375H13.2917"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.125 20.2083V16.5417"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1466 10.4642C11.055 10.455 10.945 10.455 10.8441 10.4642C8.66247 10.3908 6.92997 8.60334 6.92997 6.40334C6.9208 4.1575 8.74497 2.33334 10.9908 2.33334C13.2366 2.33334 15.0608 4.1575 15.0608 6.40334C15.0608 8.60334 13.3191 10.3908 11.1466 10.4642Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9909 20.4925C9.32254 20.4925 7.66337 20.0708 6.39837 19.2275C4.18004 17.7425 4.18004 15.3225 6.39837 13.8467C8.9192 12.16 13.0534 12.16 15.5742 13.8467"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Register;
