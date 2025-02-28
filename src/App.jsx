import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { motion } from "framer-motion";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    {/* this is for the animation for the whole page */}
    {/* I made a separate css file for the effects because of some tailwind css issues and name of the class are navbar effect responsive and head */}
    <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
      {/* This is the header of the webpage */}
      <div className='bg-[url("src/assets/Background.png")] min-h-screen w-full bg-cover bg-center bg-black/90 min-w-screen'>
        <Header />
        <div>
          {/* this svg tag is used to make the design according to the UI/UX file */}
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
        {/* the class responive is form css file which is used to make the webpage responsive */}
        <div className="container opacity-90 flex gap-12 md:gap-7 responsive">
        <div>

          <img
            className="text-white ml-25 mt-10 w-[250px] sm:w-[200px] "
            src="src/assets/log.png"
            alt="logo"
            />
            </div>

          <Router>
            <Navbar />
          </Router>
        </div>
           
          {/* This is the Register  button in the header */}
        <div className="container flex justify-center items-center mt-20 flex-col gap-5 w-full ">
          <img  src="src\assets\single.png" alt="" />
              <img className="w-[50%]" src="src\assets\Frame.png" alt="" />
           </div>
           <div className="container flex justify-center items-center mt-20 flex-col gap-3 w-full bottom-1 ">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="60"
            viewBox="0 0 150 53"
            fill="none"
          >
            <path
              d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
              fill="#D9D9D9"
              fill-opacity="0.05"
              stroke="#B026FF"
            ></path>
            <path
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
              stroke="#B026FF"
              stroke-width="0.7"
            ></path>
          </svg>
          <span className="absolute element font-thin text-xl text-white">
            Register Now!
          </span>
           {/* this for the marquee tag which is used to make the image move from right to left */}
           </div>
           <marquee className="mt-20" direction="Right"><img src="src/assets/logos1.png" alt="" />
           
           </marquee>
           {/* addding image and video in the webpageq */}
           <img className="mt-20" src="src/assets/Light.png" alt="" />
           <div className="container flex justify-around items-center  gap-5 w-full navbar">
              <img src="src/assets/Frame2.png" className="ml-20 sm:ml-5" alt="" />
              <img src="src/assets/Video.png" className="mt-[-20px]" alt="" />
           </div>
           <marquee className="mt-20" direction="Right"><img src="src/assets/Frame3.png" alt="" />
           
           </marquee>
           {/* this is the footer component */}
           <Footer/>
      </div>
      </motion.div>
    </>
  );
}

export default App;
