import React from "react";
import data from "../data.json";
import "./data.css";
import "./dataAppend.css";
import { Link } from "react-router-dom";

const DataAppend = () => {
  return (
    <div className="collections">
      {data.clothes.map((item) => {
        return (
          <div className="products">
            <Link to={`/router/collections/${item.id}`}>
            <img src={item.imageURL} alt="" />
            <p className="prodName">{item.brand}</p>
            <p className="prodDesc">{item.name}</p>
            <p className="prodPrice">Rs. {item.amount}</p>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default DataAppend

