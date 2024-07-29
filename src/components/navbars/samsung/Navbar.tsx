import { NavbarContextProvider } from './NavbarContext';
import { NabvarOverlay } from './NavbarOverlay';
import { ShoppingMenuBar } from './ShoppingMenuBar';
import { HelpMenuBar } from './HelpMenuBar';

import classes from './Navbar.module.css';

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
            <ShoppingMenuBar />
            <HelpMenuBar />
          </div>
          {/* <NavbarMenus /> */}
        </nav>
      </header>
    </NavbarContextProvider>
  );
}
