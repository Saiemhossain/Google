/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router";
import serchMe from "../assets/searchMe.png"

export default function SearchBar({ defaultQuery }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (location.pathname === '/results') {
      setShowImage(!showImage);
    }
  }, [location.pathname]);

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/results?query=${encodeURIComponent(search)}`);
    }
  }
  return (
    <div>
      {showImage && <img src={serchMe} className="w-[150px] mx-auto" />}
      <form className="mt-10" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl dark:text-white text-black mb-5">Are you looking for something?</h2>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow "
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>
    </div>
  );
}
