import React, { useState, useContext } from "react";
import Cart from "../Cart/Cart";
import "./Image.css";

import { Context } from "../../Context";
import AddButton from "../AddButton";
function Image({ img }) {
  const [hovered, setHovered] = useState(false);

  const { shopProducts, addToCart, cartItems } = useContext(Context);

  const [clicked, setClicked] = useState(false);

  const addHandler = () => {
    const clickedButton = shopProducts.some(x => x.id === img.id);
    addToCart(img);
    setClicked(clickedButton);
    console.log("cart items-", cartItems);
  };

  return (
    <div
      className={"item-container"}
      key={img.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex">
        <img src={img.url} alt={img.description} />
        <span>
          {img.itemName}- ${img.price}
        </span>
        <AddButton addToCart={addHandler} clicked={clicked} />
      </div>
    </div>
  );
}

export default Image;
