import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* This is the header of the webpage */}
      <div className='bg-[url("src/assets/Background.png")] bg-cover bg-center h-screen bg-black/90'>
        <Header />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 1440 6"
            fill="none"
            >
            <path
              d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z"
              fill="#B026FF"
              fill-opacity="0.5"
              ></path>
          </svg>
        </div>
        <div className=" opacity-[0.9] flex gap-12">
          <img className="text-white ml-25 mt-10 w-[250px] " src="src/assets/log.png" alt="logo" />

              <Router>
          <Navbar/>
      </Router>
        </div>
      </div>
    </>
  );
}

export default App;
