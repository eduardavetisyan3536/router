import React from "react";
import { useNavigate } from "react-router-dom";


const Wearbetter = () => {
  const navigate = useNavigate();
  return (
    <div className="container headerText">
      <h1>Wear better, look better.</h1>
      <p>Don't you just love being in apparel?</p>
      <button className="shopNowBtn" onClick={() => navigate('collections') }>
        
        Shop Now
      </button>
    </div>
  )
}

export default Wearbetter

