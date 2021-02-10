import React, { useState, useContext } from "react";
import "./Image.css";

import { Context } from "../../Context";
import AddButton from "../AddButton";
function Image({ img }) {
  const [hovered, setHovered] = useState(false);

  const { addToCart, cartItems, removeFromCart } = useContext(Context);

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(prev => !prev);
    !clicked ? addToCart(img) : removeFromCart(img.id);

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
        <AddButton clicked={clicked} img={img} clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default Image;
