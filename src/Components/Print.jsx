import React from "react";
import data from "../data.json";
import { useLocation, useParams } from "react-router";
import "./print.css"
import { Link } from "react-router-dom";
const Print = () => {
  const loc = useLocation()
  const { productId } = useParams();
  const product = data.clothes.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="topSection">
        <Link className="home"  to="/router">Home </Link>
        <Link className="Collections" to="/router/collections" >  / Collections </Link>
        <p className="item">  / {loc.pathname.slice(20)} </p>
      </div>
    <div className="container print">
        <div className="printEachImg">
            <img src={product.imageURL} alt="" />
        </div>
      <div className="printEach">
        <p>{product.brand}</p>
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>Rs. {product.amount}</p>
        <div className="butsPrint">
            <button className="shopNowBtnWishlist">Wishlist</button>
            <button className="shopNowBtn">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Print;
