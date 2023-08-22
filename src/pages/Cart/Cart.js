import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div data-testid="Cart">
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products &&
          products.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
