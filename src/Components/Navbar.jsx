import React from "react";
import { Link } from "react-router-dom"; // Import the Link component for navigation
import { motion } from "framer-motion";

const Navbar = () => {
  return (
            //  there is a navbar class which is written in the css file App.css
    <div
      className="text-white container flex justify-center items-center border-[1px] border-white shadow-[0_4px_10px_rgba(255,255,255,0.5)] w-full sm:w-[90%] lg:w-[55%] h-[60px] mt-10 rounded-lg bg-[rgb(40,8,58)] navbar flex-wrap "
    >
      {/* This is the container of the navbar Link tage is use in li tags for */}
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          >
      {/* element and effect tag is used to resolve the problem of fonts and additional effects */}
        <nav className="flex justify-center items-center w-full navbar">
        <ul className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center m-5 md:m-0">
          {/* this is the list of the navbar which have the same svg tags for same design and the Link tag for the navigation of the page */}
        <li className="relative flex flex-col justify-center items-center w-[120px] ">

          {" "}
          <svg
           className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute element effect" to="/">
            Overview
          </Link>
        </li>
        <li className="relative flex flex-col justify-center items-center w-[120px]">

          {" "}
          <svg
          className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute element effect" to="/">
            Create Team
          </Link>
        </li>
        <li className="relative flex flex-col justify-center items-center w-[120px]">

          {" "}
          <svg className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute text-[13px] element effect" to="/">
            Prize & Sponsors
          </Link>
        </li>
        <li className="relative flex flex-col justify-center items-center w-[120px]">

          {" "}
          <svg className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute element effect" to="/">
            FAQs
          </Link>
        </li>
        <li className="relative flex flex-col justify-center items-center w-[120px]">

          {" "}
          <svg className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute element text-[13px] effect" to="/">
            Judging & Rules
          </Link>
        </li>
        <li className="relative flex flex-col justify-center items-center w-[120px]">

          {" "}
          <svg className="w-auto h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            >
            {" "}
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
          <Link className="absolute element effect" to="/">
            Resources
          </Link>
        </li>
      </ul>
      </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
