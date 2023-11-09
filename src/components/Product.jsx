import React from "react";

export default function Product({ prod, handleClick }) {
  return (
    <div className="Product">
      <img className="productImage" src={prod.images[0]} alt={prod.title} />
      <h1 className="productTitle">{prod.title}</h1>
      <p className="productDescription">{prod.description}</p>
      <h5 className="productPrice">Prix : {prod.price}</h5>
      <button className="addToCartButton" onClick={() => handleClick(prod)}>
        Ajouter au Panier
      </button>
    </div>
  );
}
