/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom"
import { CiSun } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';
export default function Header({ darkMode, setDarkMode }) {

  const handleToggle = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className=" text-black sm:text-sm dark:text-white">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-xl">
            see search
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn" onClick={handleToggle}>
            {darkMode ? (
              <div className="text-xl flex items-center gap-6">
                {' '}
                <FaMoon /> dark
              </div>
            ) : (
              <div className="text-xl flex items-center gap-6">
                <CiSun /> light
              </div>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
