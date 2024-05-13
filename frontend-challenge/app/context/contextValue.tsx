'use client';
import { ReactNode, createContext, useState } from 'react';
import { Product } from '../components/ProductGrid';

export const ContextValue = createContext<any | null>(null);

interface ProviderProps {
  children: ReactNode;
}

const Context = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  return (
    <ContextValue.Provider value={{ cart, setCart, isCheckout, setIsCheckout }}>
      {children}
    </ContextValue.Provider>
  );
};

export default Context;
