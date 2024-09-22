/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import './App.css'
import Header from './components/Header'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Result from './pages/Result'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // dark ক্লাস যোগ হচ্ছে
    } else {
      document.documentElement.classList.remove('dark'); // dark ক্লাস রিমুভ হচ্ছে
    }
  }, [darkMode]);

  return (
    <>
      <main data-theme={darkMode ? "dark" : 'light'} className="h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </main>
    </>
  );
}

export default App
