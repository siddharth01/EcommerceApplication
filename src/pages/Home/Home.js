import React from "react";
import Products from "../../components/Product/Products";
import "./Home.css";

const Home = () => {
  return (
    <div data-testid="Home">
      <h2 className="heading">Welcome to Online Store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
