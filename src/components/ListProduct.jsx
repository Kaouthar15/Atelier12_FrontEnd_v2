// ListProduct.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Product from "./Product";
import Header from "./Header";
import ListPanier from "./ListPanier";

export default function ListProduct() {
  const [categorie, setCategorie] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [panier, setPanier] = useState([]);
  const [article, setArticle] = useState([]);
  const [showArticles, setShowArticles] = useState(false);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
      return res.data;
    };
 
    getCat().then((e) => setCategories(e), setCategorie(0));
  }, []);

  useEffect(() => {
    const getProd = async () => {
      if (categorie === 0) {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        return res.data;
      } else {
        const res = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${categorie}/products`
        );
        return res.data;
      }
    };
    getProd().then((e) => setProducts(e));
  }, [categorie]);

  const addPanier = (e) => {
    setArticle([...article, e]);
    const index = panier.findIndex((item) => item.id === e.id);
    if (index !== -1) {
      panier[index].count += 1;
      // panier[index].price = e.price * panier[index].count;
      setPanier([...panier]);
    } else {
      setPanier([...panier, { ...e, count: 1 }]);
    }

  }; 

  const deleteA = (e) => {
    const updatedPanier = panier.map((item) => {
      if (item.id === e.id) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          return null;
        }
      } 
      return item;
    });
    setPanier(updatedPanier.filter((item) => item !== null));
  };

  const seeArticle = () => {
    setShowArticles(!showArticles);
  };
  return (
    <div>
      <Header panier={article} seeArticle={seeArticle} />
      {showArticles &&
        panier.map((e) => (
          <ListPanier key={e.id} panier={e} c={e.count} delArticle={deleteA} />
        ))}
      <div className="ListProduct">
        <div className="selectCat">
          <select
            className="select"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            <option value="0">Tous Les Categories</option>
            {categories.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="productList">
          {products.map((e) => (
            <div className="productItem" key={e.id}> 
              <Product prod={e} handleClick={addPanier} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}