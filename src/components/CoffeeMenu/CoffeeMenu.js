import React from "react";
import coffee from "../../Images/coffee copy.jpg";
import "./CoffeeMenu.css";

function CoffeeMenu() {
  const menu = [
    {
      product: "Drip",
      price: "2.5"
    },
    {
      product: "Americano",
      price: "3"
    },
    {
      product: "Cappuccino",
      price: "3"
    },
    {
      product: "Macchiato",
      price: "3"
    },
    {
      product: "Mocha",
      price: "3"
    },
    {
      product: "Mocha Latte",
      price: "3.5"
    },
    {
      product: "Cortado",
      price: "4"
    },
    {
      product: "Tea",
      price: "2"
    },
  ]

  const item = menu.map(item => {
    return (
      <li key={item.product} className={`menu_item-${item.product}`}>
        {item.product}
      </li>
    );
  });
  const price = menu.map(item => {
    return <li key={item.product}>${item.price}</li>;
  });
  return (
    <>
      <img src={coffee} alt="coffee" />
      <div className="shape"></div>
      <div className="coffee-menu-container">
        <h2>Our Coffee Menu</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="menu">
          <ul className="item-name">{item}</ul>
          <ul className="middle-column"> </ul>
          <ul className="item-price">{price}</ul>
        </div>
      </div>
    </>
  );
}

export default CoffeeMenu;

// "https://picsum.photos/id/42/200/300"
