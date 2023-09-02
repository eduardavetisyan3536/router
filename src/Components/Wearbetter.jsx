import React from "react";
import { useNavigate } from "react-router-dom";


const Wearbetter = () => {
  const navigete = useNavigate()
  const change = () => {
    if (localStorage.getItem('user')) {
      console.log(true);
    }else{
      navigete('/router/reg')
      console.log(123);
    }
  }
  return (
    <div className="container headerText">
      <h1>Wear better, look better.</h1>
      <p>Don't you just love being in apparel?</p>
      <button className="shopNowBtn" onClick={change }>
        
        Shop Now
      </button>
    </div>
  )
}

export default Wearbetter

