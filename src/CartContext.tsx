"use client"

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

interface CartContextType {
  items: { id: number; name: string; price: number; img: string; quantity: number }[];
  addToCart: (id: number, name: string, price: number, img: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

import { ReactNode } from 'react';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<{ id: number; name: string; price: number; img: string; quantity: number }[]>([]);

  const addToCart = useCallback((id: number, name: string, price: number, img: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      if (existingItem) {
        // Update the quantity if the item is already in the cart
        return prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      // Add the new item to the cart
      return [...prevItems, { id, name, price, img, quantity: 1 }];
    });
  }, []); // Dependency array is empty because addToCart function doesn't depend on any external values

  // Memoize the context value so it only changes when `items` or `addToCart` changes
  const value = useMemo(() => ({ items, addToCart }), [items, addToCart]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}