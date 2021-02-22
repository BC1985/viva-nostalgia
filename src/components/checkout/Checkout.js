import React, { useContext } from "react";
import { Context } from "../../Context";

import CartItem from "../Cart/CartItem";
function Checkout() {
  const { cartItems } = useContext(Context);
  let total = cartItems.reduce((sum, { qty, price }) => sum + price * qty, 0);
  const numberOfItems =
    cartItems.length === 1 ? `1 item` : `${cartItems.length} items`;
  return (
    <div style={{ padding: "2%" }}>
      {cartItems.map(item => (
        <CartItem cartItems={cartItems} item={item} key={item.id} />
      ))}
      <p>
        {cartItems.length === 0
          ? "Cart is Empty."
          : `You have ${numberOfItems} in your cart.`}
      </p>
      <h1>Total: ${total}</h1>
    </div>
  );
}

export default Checkout;
