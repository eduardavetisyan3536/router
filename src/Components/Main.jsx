import React from "react";
import Aside from "./Aside";
import DataSection from "./DataSection";
import DataAppend from "./DataAppend";
import './main.css'
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="container">
      <div className="topSection">
        <Link className="home"  to="/router">Home </Link>
        <p className="Collections">  / Collections </p>
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
