import React from "react";
import CartItem from "./CartItem";
function Cart({ cartItems }) {

  const singularOrPlural =
    cartItems.length === 1 ? `1 item` : `${cartItems.length} items`;
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <div className="cart-container">
      <h2>Cart items</h2>
      <h3>
        {cartItems.length === 0
          ? "Cart is Empty."
          : `You have ${singularOrPlural} in your cart.`}
      </h3>
      {cartItemElements}
    </div>
  );
}

export default Cart;
