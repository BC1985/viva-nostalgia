import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [shopProducts, setShopProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
    
  }
  console.log('cart items--',cartItems)
  const shopProductsArray = [
    {
      id: 1,
      url: "https://picsum.photos/id/175/200/300",
      itemName: "Vintage clock",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "10",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/225/200/300",
      itemName: "Tea Infuser",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "10",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/30/200/300",
      itemName: "Mug",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "5",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/403/200/300",
      itemName: "Typewriter",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "50",
    },
    {
      id: 5,
      url: "https://picsum.photos/id/454/200/300",
      itemName: "Vintage camera",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "60",
    },
    {
      id: 6,
      url: "https://picsum.photos/id/355/200/300",
      itemName: "Vintage camera",
      itemDescription: "Lorem ipsum dolor sit amet",
      price: "70",
    },
  ];
  useEffect(() => {
    setShopProducts(shopProductsArray);
  }, []);

  return (
    <Context.Provider value={{ shopProducts, addToCart, cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
