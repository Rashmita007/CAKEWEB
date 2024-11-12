import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name); 
      if (existingItem) {
        // Update quantity if item with the same name exists
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemName) => {
    // Filter out item based on its name
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const updateQuantity = (itemName, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && newQuantity > 0
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
