import React, { useEffect, useRef, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, value, max }) => {
  const [width, setWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = progressBarRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setWidth((value / max) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [value, max]);

  return (
    <div className="progress-container">
      <div className="progress-label ">{label}</div>
      <div className="progress-bar" ref={progressBarRef}>
        <div className="progress-bar-fill" style={{ width: `${width}%` }}></div>
        <div className="progress-bar-text">{value}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
