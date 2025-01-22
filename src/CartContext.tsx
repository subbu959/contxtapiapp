"use client"
import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

type CartItem = {
    quantity: number;
    id: number;
    name: string;
    price: number;
    img: string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (id: number, name: string, price: number, img: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Memoize addToCart to avoid unnecessary re-renders
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
};
