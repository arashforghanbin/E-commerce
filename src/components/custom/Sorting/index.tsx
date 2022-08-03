const Sorting = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md flex gap-5 h-16 items-center px-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7H21"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M6 12H18"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M10 17H14"
          stroke="#1A1A1A"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <p className="font-bold">مرتب سازی:</p>
      <div className="flex gap-4">
        <p>پرفروش ترین</p>
        <p>پربازدیدترین</p>
        <p>ارزان ترین</p>
        <p>گران ترین</p>
      </div>
    </section>
  );
};

export default Sorting;
