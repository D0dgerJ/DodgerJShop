import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [], // Массив товаров
    totalQuantity: 0, // Общее количество
    totalPrice: 0, // Общая стоимость
  });

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Обновляем количество и цену для существующего товара
        const updatedItems = prevCart.items.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalQuantity: prevCart.totalQuantity + quantity,
          totalPrice: prevCart.totalPrice + product.price * quantity,
        };
      }

      // Добавляем новый товар
      return {
        ...prevCart,
        items: [...prevCart.items, { ...product, quantity }],
        totalQuantity: prevCart.totalQuantity + quantity,
        totalPrice: prevCart.totalPrice + product.price * quantity,
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.id !== productId);
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
  
      return {
        ...prevCart,
        items: updatedItems,
        totalQuantity,
        totalPrice,
      };
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Минимальное количество - 1
  
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      const totalPrice = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
  
      return {
        ...prevCart,
        items: updatedItems,
        totalQuantity,
        totalPrice,
      };
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
  
};
