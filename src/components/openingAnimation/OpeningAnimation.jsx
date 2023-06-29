import React, { useEffect, useState } from 'react';
import './OpeningAnimation.css';
import BUILD from '../../asset/builder.png';

const OpeningAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // Change the duration (in milliseconds) as per your requirement

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`opening-animation ${animationComplete ? 'slide-up' : ''}`}>
      <div className="content-container">
        <img src={BUILD} alt="" />
        <h1>RESUME BUILDER</h1>
        <h3>Build a resume you love!</h3>
      </div>
    </div>
  );
};

export default OpeningAnimation;
