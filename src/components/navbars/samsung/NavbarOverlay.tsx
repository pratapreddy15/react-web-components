import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';

import classes from './NavbarOverlay.module.css';

export function NabvarOverlay() {
  const { showOverlay, showMobileMenu, setShowOeverlay, setSelectedMenuId } = useContext(NavbarContext);

  return (
    <div
      className={`${classes.overlay} ${showOverlay ? classes.show : ''}`}
      onMouseEnter={() => {
        !showMobileMenu && setSelectedMenuId('');
        !showMobileMenu && setShowOeverlay(false);
      }}
    ></div>
  );
}
