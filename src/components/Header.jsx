import React from "react";
import "../App.css";
// import Product from './Product' ;
import { HiOutlineShoppingBag } from "react-icons/hi2";
export default function Header({ panier, seeArticle }) {
  return (
    <div className="header-container">
      <div className="header-title">ISMO SHOP</div>
      <div className="header-info">
        <button className="seeButton" onClick={() => seeArticle()}>
          <HiOutlineShoppingBag />
        </button>
        Nombre article: {panier.length} | Montant Total:{" "}
        {panier.reduce((e, p) => e + p.price, 0)} $
      </div>
    </div>
  );
}
