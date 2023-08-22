import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice/cartSlice";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Something went wrong!");
      }
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
