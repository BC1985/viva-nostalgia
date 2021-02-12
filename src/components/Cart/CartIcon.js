import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartIcon({cartItems}) {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="icon-container">
      <div id="cart">{element}</div>
      <div className="badge">{cartItems.length}</div>
    </div>
  );
}

export default CartIcon;
