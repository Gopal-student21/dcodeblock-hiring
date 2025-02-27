import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    // This is the container of the header
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex justify-between  items-center  bg-black/90 p-4 text-white">
        {/* This is the image of the logo */}
        <img
          className="ml-8"
          src="src/assets/logodb-PhotoRoom 1.png"
          alt="image"
        />
        {/* This is the container of the buttons which is using a svg to get the uniq design */}
        <button className="relative mr-[100px] flex items-center justify-center element effect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="53"
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
            Sign in
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
