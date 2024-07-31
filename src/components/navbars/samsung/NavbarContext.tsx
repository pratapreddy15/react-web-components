import { createContext, useState } from 'react';

import { shoppingMenus, helpMenus } from './menus';
import { Menu } from './types';

const initialValue: {
  menus: { shopping: Menu[]; help: Menu[] };
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  showOverlay: boolean;
  selectedMenuId: string;
  setShowOeverlay: (show: boolean) => void;
  setSelectedMenuId: (id: string) => void;
} = {
  menus: { shopping: [], help: [] },
  showMobileMenu: false,
  setShowMobileMenu: (_show: boolean) => {},
  showOverlay: false,
  selectedMenuId: '',
  setShowOeverlay: (_show: boolean) => {},
  setSelectedMenuId: (_id: string) => {},
};

export const NavbarContext = createContext(initialValue);

export function NavbarContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedMenuId, setSelectedMenuId] = useState('');
  const [showOverlay, setShowOeverlay] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        menus: { shopping: shoppingMenus, help: helpMenus },
        showMobileMenu,
        setShowMobileMenu,
        showOverlay,
        setShowOeverlay,
        selectedMenuId,
        setSelectedMenuId,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
