import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const { data } = await api.get("/cart");
    setCart(data.items || []);
  };

  const addToCart = async (productId, quantity = 1) => {
    await api.post("/cart", { productId, quantity });
    fetchCart();
  };

  const removeFromCart = async (productId) => {
    await api.delete(`/cart/${productId}`);
    fetchCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, fetchCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
