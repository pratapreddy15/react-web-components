import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';
import { NavbarMenuItem } from './NavbarMenuItem';
import { NavbarSubMenu } from './NavbarSubMenu';

import classes from './MenuBar.module.css';

export function ShoppingMenuBar() {
  const {
    menus: { shopping },
    selectedMenuId,
  } = useContext(NavbarContext);

  return (
    <ul className={classes.menuBar}>
      {shopping.map((menuItem, menuItemIndex) => (
        <NavbarMenuItem id={menuItem.id} index={menuItemIndex} text={menuItem.text} hasSubMenu={menuItem.subMenus.length > 0}>
          {menuItem.subMenus.length > 0 && (
            <div
              className={`${classes.subMenuContainer} ${menuItemIndex > 2 ? classes.centered : classes.right} ${
                selectedMenuId === menuItem.id ? classes.open : ''
              }`}
              data-parent-menu-item-id={menuItem.id}
            >
              {menuItem.subMenus.map((subMenuCategory, index) => {
                return (
                  <div>
                    {subMenuCategory.map((subMenu) => (
                      <NavbarSubMenu
                        key={`submenu-${index}-for-${menuItem.id}`}
                        parentMenuItemId={menuItem.id}
                        subMenu={subMenu}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </NavbarMenuItem>
      ))}
    </ul>
  );
}
