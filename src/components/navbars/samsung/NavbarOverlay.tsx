import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';

import classes from './NavbarOverlay.module.css';

export function NabvarOverlay() {
  const { showOverlay, setShowOeverlay, setSelectedMenuId } = useContext(NavbarContext);

  return (
    <div
      className={`${classes.overlay} ${showOverlay ? classes.show : ''}`}
      onMouseEnter={() => {
        setSelectedMenuId('');
        setShowOeverlay(false);
      }}
    ></div>
  );
}
