import { NavbarContextProvider } from './NavbarContext';
import { NabvarOverlay } from './NavbarOverlay';
import { UtilityMenuBar } from './UtilityMenuBar';
import { MenuBar } from './MenuBar';

import classes from './Navbar.module.css';
import { MenuToggleButton } from './MenuToggleButton';

export function Navbar() {
  return (
    <NavbarContextProvider>
      <header className={classes.navbarContainer}>
        <NabvarOverlay />
        <nav className={classes.navbar}>
          {/* Company name or logo */}
          <div className={classes.brandName}>
            <h1>BRAND NAME</h1>
          </div>
          <div className={classes.navbarMenuContainer}>
            <MenuBar />
            <UtilityMenuBar />
            <MenuToggleButton />
          </div>
        </nav>
      </header>
    </NavbarContextProvider>
  );
}
