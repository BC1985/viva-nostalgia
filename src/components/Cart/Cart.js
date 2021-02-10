import React from "react";

function Cart({ cartItems }) {

  const singularOrPlural =
    cartItems.length === 1 ? `1 item` : `${cartItems.length} items`;

  return (
    <div>
      <h2>Cart items</h2>
      <h3>
        {cartItems.length === 0
          ? "Cart is Empty."
          : `You have ${singularOrPlural} in your cart.`}
      </h3>
    </div>
  );
}

export default Cart;
