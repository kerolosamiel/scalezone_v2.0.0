'use client';
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
