import React from 'react';
import '../App.css'; 
import {AiOutlineDelete} from 'react-icons/ai';
// import Product from './Product' ;
// import Header from './Header'; 
export default function ListPanier({ panier,c,delArticle }) { 
  return ( 
    <div className="Product1"> 
      <li className='ListPanier1'>
      <ul><img className='productImage1' src={panier.images[0]} alt={panier.title} /></ul>  
      <ul><h1 className='productTitle1'>{panier.title} - {c}</h1></ul> 
      <ul><h5 className='productPrice1'>Prix : {panier.price} </h5></ul>
    <ul><button className='buttonDel' onClick={()=>delArticle(panier)}><AiOutlineDelete style={{ fontSize: '24px' }}/></button></ul>
      </li> 
    </div>
  );
}
