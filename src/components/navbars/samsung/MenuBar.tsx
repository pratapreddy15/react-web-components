import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';
import { NavbarMenuItem } from './NavbarMenuItem';
import { NavbarSubMenu } from './NavbarSubMenu';
import { Menu } from './types';

import classes from './MenuBar.module.css';

function SubMenuContainer({ parentMenuItem, isOpen, alignment }: { parentMenuItem: Menu; isOpen: boolean; alignment: string }) {
  return (
    <div
      className={`${classes.subMenuContainer} ${classes[alignment]} ${isOpen ? classes.open : ''}`}
      data-parent-menu-item-id={parentMenuItem.id}
    >
      {parentMenuItem.subMenus.map((subMenuCategory, index) => {
        return (
          <div>
            {subMenuCategory.map((subMenu) => (
              <NavbarSubMenu
                key={`submenu-${index}-for-${parentMenuItem.id}`}
                parentMenuItemId={parentMenuItem.id}
                subMenu={subMenu}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export function MenuBar() {
  const {
    menus: { shopping, help },
    showMobileMenu,
    setShowMobileMenu,
    selectedMenuId,
  } = useContext(NavbarContext);

  return (
    <div className={`${classes.menuBarWrapper} ${showMobileMenu ? classes.open : ''}`}>
      <div className={classes.searchWrapper}>
        <button className={classes.searchButton}>
          <i className="bi bi-search"></i>
        </button>
        <button className={classes.closeMobileMenuButton} onClick={() => setShowMobileMenu(false)}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <div className={classes.accountWrapper}>
        <a href="#" className={classes.loginLink}>
          Log-In/Sign-Up
        </a>
        <a href="#" className={classes.accountBenefitLink}>
          Why Create a Samsung Account?<i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <ul className={`${classes.menuBar} ${classes.left}`}>
        {shopping.map((menuItem, menuItemIndex) => (
          <NavbarMenuItem id={menuItem.id} index={menuItemIndex} text={menuItem.text} hasSubMenu={menuItem.subMenus.length > 0}>
            {menuItem.subMenus.length > 0 && (
              <SubMenuContainer
                alignment={menuItemIndex > 2 ? 'centered' : 'right'}
                isOpen={selectedMenuId === menuItem.id}
                parentMenuItem={menuItem}
              />
            )}
          </NavbarMenuItem>
        ))}
      </ul>
      <ul className={`${classes.menuBar} ${classes.right}`}>
        {help.map((menuItem, menuItemIndex) => (
          <NavbarMenuItem id={menuItem.id} index={menuItemIndex} text={menuItem.text} hasSubMenu={menuItem.subMenus.length > 0}>
            {menuItem.subMenus.length > 0 && (
              <SubMenuContainer
                alignment={menuItemIndex > 2 ? 'centered' : 'left'}
                isOpen={selectedMenuId === menuItem.id}
                parentMenuItem={menuItem}
              />
            )}
          </NavbarMenuItem>
        ))}
      </ul>
    </div>
  );
}
