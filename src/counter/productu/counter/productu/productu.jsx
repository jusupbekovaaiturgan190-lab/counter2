import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    let res = await axios("https://fakestoreapi.com/products");
    setProduct(res.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      kkk
      {product.map((el) => (
        <>
          <h2>{el.title}</h2>
          <img src={el.image} alt="" />
        </>
      ))}
    </div>
  );
};

export default Product;
