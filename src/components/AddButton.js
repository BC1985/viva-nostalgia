import React from "react";

function AddButton({ addToCart, clicked }) {
  const setClassName = clicked ? "item-added" : "add-to-cart";
  return (
    <>
      <span className={setClassName} onClick={addToCart}>
        {!clicked ? "Add to cart" : "Remove"}
      </span>
    </>
  );
}

export default AddButton;
