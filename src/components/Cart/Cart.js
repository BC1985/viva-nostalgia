import React from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h2>
        <CartIcon cartItems={cartItems} />
      </h2>
      <NavLink to="/checkout">checkout</NavLink>
    </div>
  );
}

export default Cart;
