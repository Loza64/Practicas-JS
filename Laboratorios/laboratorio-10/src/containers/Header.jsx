import { Link } from "react-router-dom";

import useScrollPosition from "../hooks/useScrollPosition";
import Logo from "../assets/bluelogo.png";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between border-b border-transparent p-4 transition duration-500 ${
        scrollPosition > 0
          ? "border-gray-200 bg-gray-100/80 shadow-md dark:border-gray-600 dark:bg-gray-900/80"
          : ""
      }`}
    >
      <Link
        href="/"
        className="bg-very-dark-blue absolute left-0 z-50 m-3 -translate-x-[150%] border-2 border-white p-3 transition focus:translate-x-0"
      >
        Skip to main content
      </Link>

      <Link href="/">
        <img
          src={Logo}
          alt="filmpire"
          width={100}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      <ul
        role="list"
        className={`flex flex-col items-end justify-between gap-4 md:flex-row md:items-center`}
      >
        <li role="listitem">
          <Link
            className="padding-control | inline-flex items-center rounded-3xl border border-slate-300 bg-transparent text-sm font-medium text-slate-300"
            to="/create-movie"
          >
            Create new movie
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
