import React from "react";

function AddButton({ clicked, clickHandler }) {
  const setClassName = clicked ? "item-added" : "add-to-cart";
  return (
    <>
      <span className={setClassName} onClick={clickHandler}>
        {!clicked ? "Add to cart" : "Remove"}
      </span>
    </>
  );
}

export default AddButton;
