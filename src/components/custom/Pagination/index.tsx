import * as React from "react";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-row-reverse justify-center gap-2">
        {pageNumbers.map((number) => (
          <li className="bg-white shadow-md py-1 px-3 rounded-md" key={number}>
            <a className="text-gray" onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
