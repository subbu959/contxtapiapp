"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
type CartItem = {
    quantity: number;
    id:  number;
    name: string;
    price: number;
    img: string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (id:number,name: string, price: number, img: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (id: number, name: string, price: number, img: string) => {
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
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
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