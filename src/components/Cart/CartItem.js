import React from "react";
import "./cart.css";
function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <img src={item.url} className="cart-img" />
      <span>
        {item.itemName}-{item.price}$
      </span>
    </div>
  );
}

export default CartItem;
