import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Инициализация корзины из localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart
      ? JSON.parse(storedCart)
      : { items: [], totalQuantity: 0, totalPrice: 0 }; // Пустая корзина по умолчанию
  });

  // Сохранение корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Проверяем, существует ли товар в корзине
      const existingItem = prevCart.items.find((item) => item.product_id === product.product_id);
  
      if (existingItem) {
        // Если товар уже есть, обновляем количество
        const updatedItems = prevCart.items.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return {
          ...prevCart,
          items: updatedItems,
          totalQuantity: prevCart.totalQuantity + quantity,
          totalPrice: prevCart.totalPrice + product.price * quantity,
        };
      }
  
      // Если товара нет, добавляем новый
      return {
        ...prevCart,
        items: [...prevCart.items, { ...product, quantity, images: product.images }],
        totalQuantity: prevCart.totalQuantity + quantity,
        totalPrice: prevCart.totalPrice + product.price * quantity,
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.filter((item) => item.product_id !== productId);
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
    if (newQuantity < 1) return;
  
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) =>
        item.product_id === productId ? { ...item, quantity: newQuantity } : item
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
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
