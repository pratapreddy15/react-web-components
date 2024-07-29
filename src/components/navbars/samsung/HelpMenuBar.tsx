import { useContext } from 'react';
import { NavbarContext } from './NavbarContext';
import { NavbarMenuItem } from './NavbarMenuItem';
import { NavbarSubMenu } from './NavbarSubMenu';

import classes from './MenuBar.module.css';

export function HelpMenuBar() {
  const {
    menus: { help },
    selectedMenuId,
  } = useContext(NavbarContext);

  return (
    <ul className={classes.menuBar}>
      {help.map((menuItem) => (
        <NavbarMenuItem id={menuItem.id} text={menuItem.text} hasSubMenu={menuItem.subMenus.length > 0}>
          {menuItem.subMenus.length > 0 && (
            <div
              className={`${classes.subMenuContainer} ${classes.left} ${selectedMenuId === menuItem.id ? classes.open : ''}`}
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
