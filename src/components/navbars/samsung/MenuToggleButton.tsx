import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';

import classes from './MenuToggleButton.module.css';

export function MenuToggleButton() {
  const { setShowOeverlay, setShowMobileMenu } = useContext(NavbarContext);

  return (
    <div className={classes.toggleMenuWrapper}>
      <button
        className={classes.toggleMenuButton}
        onClick={() => {
          setShowOeverlay(true);
          setShowMobileMenu(true);
        }}
      >
        <i className="bi bi-list"></i>
      </button>
    </div>
  );
}
