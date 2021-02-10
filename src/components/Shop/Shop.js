import React, { useContext, useState } from "react";
import shop from "../../Images/second_hand_shop.jpg";
import Image from "../productImages/Image";
import { Context } from "../../Context";

import "./Shop.css";
import Cart from "../Cart/Cart";
function Shop({img}) {

  const { shopProducts, addToCart, cartItems, setCartItems } = useContext(Context);
//   const [cartItems, setCartItems] = useState([]);
  const [clicked, setClicked] = useState(false);

  const addHandler = () => {
    const clickedButton = shopProducts.some(x => x.id === img.id);
    addToCart(img);
    setClicked(clickedButton);
    console.log("cart items-", cartItems);
  };
  
  const images = shopProducts.map(img => {
      return (
          <Image
          key={img.id}
          img={img}
          addToCart={addToCart}
          />
          );
        });
        return (
            <div>
      <img src={shop} alt="shop" />
      <div className="shop-shape"></div>
      <main className="shop-container">
        {images}
        
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        {/* <p>You have {itemsInCart} items in your cart </p> */}
      </main>
      {/* <Cart
        cartItems={cartItems}
        // addHandler={addHandler}
        setCartItems={setCartItems}
    /> */}
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