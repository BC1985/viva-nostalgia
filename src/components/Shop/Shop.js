import React, { useContext, useState } from "react";
import shop from "../../Images/second_hand_shop.jpg";
import Image from "../productImages/Image";
import { Context } from "../../Context";

import "./Shop.css";
import Cart from "../Cart/Cart";
function Shop() {
  const { shopProducts, addToCart, cartItems, setCartItems } = useContext(Context);
  const images = shopProducts.map(img => {
    return <Image key={img.id} img={img} addToCart={addToCart} />;
  });
  return (
    <div>
      <img src={shop} alt="shop" />
      <div className="shop-shape"></div>
      <main className="shop-container">
        {images}
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </main>
    </div>
  );
}

export default Shop;

//   const addHandler = product => {
//     const exists = cartItems.find(x => x.id === product.id);
//     exists
//       ? setCartItems(
//           cartItems.map(x =>
//             x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
//           )
//         )
//       : setCartItems([...cartItems, { ...product, qty: 1 }]);
//     setClicked(!clicked);
//   };
