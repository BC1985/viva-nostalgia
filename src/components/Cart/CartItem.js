import React, { useContext } from "react";
import "./cart.css";
import { Context } from "../../Context";

function CartItem({ item }) {
  const { increaseQty } = useContext(Context);

  item.qty = 1;
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dropDown = options.map(x => {
    return <option key={x}>{x}</option>;
  });

  return (
    <div className="cart-item-container">
      <img src={item.url} className="cart-img" />
      <span>
        {item.itemName}-{item.price}$
      </span>
      <select onChange={e => increaseQty(item, e.target.value)}>
        {dropDown}
      </select>
    </div>
  );
}

export default CartItem;
