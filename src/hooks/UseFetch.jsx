/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import axios from 'axios'

export default function UseFetch() {
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const API = import.meta.env.VITE_API_KEY;
  
  const searchID = import.meta.env.VITE_SEARCH_ID;

  const getResults = async(query,start = 1) => {
    const BASE_URL = `https://www.googleapis.com/customsearch/v1?key=${API}&q=${query}&num=5&cx=${searchID}`

    try {
      setError(null)
      setLoading(true)
      const res = await axios.get(BASE_URL);
      if (start === 1) {
       setResult(res.data.items);
      } else {
        setResult((prev) => [ ...prev, ...(res.data.items || []) ]);
      }
      console.log(res.data)
      console.log(res.data.items)
    
    } catch (error) {
      console.log(error)
      setError(error.message)
      setResult([]);
    } finally {
      setLoading(false)
    }
  }
  return [results, loading, error, getResults];
}
