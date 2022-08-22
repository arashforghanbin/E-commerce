interface Props {
  strokeColor?: string
}

const Key = ({strokeColor = "#DC3A35"}:Props) => {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24992 20.6667H13.7499C18.3333 20.6667 20.1666 18.8333 20.1666 14.25V8.75C20.1666 4.16667 18.3333 2.33334 13.7499 2.33334H8.24992C3.66659 2.33334 1.83325 4.16667 1.83325 8.75V14.25C1.83325 18.8333 3.66659 20.6667 8.24992 20.6667Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9234 12.9758C13.8876 14.0117 12.4026 14.3325 11.0918 13.92L8.7176 16.285C8.5526 16.4592 8.21343 16.5692 7.96593 16.5325L6.86593 16.3858C6.49927 16.34 6.16927 15.9917 6.11427 15.6342L5.9676 14.5342C5.93093 14.2958 6.0501 13.9567 6.2151 13.7825L8.5801 11.4175C8.17677 10.1067 8.48843 8.62167 9.52427 7.58583C11.0093 6.10083 13.4293 6.10083 14.9234 7.58583C16.4084 9.06167 16.4084 11.4817 14.9234 12.9758Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.57922 15.4233L8.80005 14.635"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2782 10.3083H12.2865"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Key;
