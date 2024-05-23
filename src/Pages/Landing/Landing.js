import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/img/Juanchi/Logo.png";

import "./Landing.css";

function Landing() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const fullText = "Juan Ignacio Cettou";
    let index = 0;

    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center ">
      <div className="screen absolute inset-0 flex items-center r">
        <motion.img
          id="logo"
          src={Logo}
          alt="Logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        /> 
       
       <div className="text-center text-sm-center mt-24">
          <h2 className="font-allura text-6xl text-white">{displayText}</h2>
        </div>
      </div>
    </div>
  );
}

const Splash = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const id = setTimeout(() => navigate("/home"), 5500);
    return () => clearTimeout(id);
  }, [navigate]);

  return <Landing />;
};

export default Splash;



