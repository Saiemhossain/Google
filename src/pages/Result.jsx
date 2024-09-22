/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {  useEffect, useRef, useState } from "react";
import UseFetch from "../hooks/UseFetch"
import { useLocation } from "react-router";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader/Loader";


export default function Result() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(1)
  const [results, loading, error, getResults] = UseFetch();
  const loadMoreRef = useRef(null)

  useEffect(() => {
    getResults(query, startIndex);
    setIsLoading(false)
    return () => {
      console.log('API is clean up')
    }
  }, [query, startIndex])
  

  const LoadMoreResults = () => {
    setIsLoading(true)
    setStartIndex(index => index + 10)
    
  }

    useEffect(() => {
      if (loadMoreRef.current) {
        loadMoreRef.current.scrollIntoView({ behavior: 'smooth' });
        setIsLoading(false);
      }
    },[loading]);


  if(loading){
    return <Loader />
  }
  if (error) {
    <h3>something went wrong</h3>
  }
  

  return (
    <div className="constainer  bg-white dark:bg-customDark min-h-screen">
      <div className="searchBar w-[40%] mx-auto ">
        <SearchBar defaultQuery={query} />
        {results.length > 0 &&
          results.map((result, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body items-center text-center  text-black sm:text-sm dark:text-white ">
                  <h2 className="card-title"> {result.displayLink} </h2>
                  <p> {result.formattedUrl} </p>
                  <p> {result.snippet} </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            );
          })}
        <div ref={loadMoreRef}></div>
        {isLoading ? (
          <div>loading..</div>
        ) : (
          <button className="btn" onClick={LoadMoreResults}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
