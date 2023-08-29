import React from "react";
import Aside from "./Aside";
import DataSection from "./DataSection";
import DataAppend from "./DataAppend";
import './main.css'
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="topSection">
        <p className="home" onClick={() => navigate('/router') }>Home</p>
        <p className="Collections">/ Collections</p>
      </div>
      <div className="flexSections">
        <Aside />
        <div>
        <DataSection />
        <DataAppend />
        </div>
      </div>
    </div>
  );
}

export default Main;
