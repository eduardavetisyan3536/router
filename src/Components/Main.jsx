import React from "react";
import Aside from "./Aside";
import DataSection from "./DataSection";
import DataAppend from "./DataAppend";
import './main.css'
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Main() {
  const loc = useLocation()
  return (
    <div className="container">
      <div className="topSection">
        <Link className="home"  to="/router">Home </Link>
        <p className="Collections">  / {loc.pathname.slice(8)} </p>
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
