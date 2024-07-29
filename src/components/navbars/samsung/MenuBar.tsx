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
    selectedMenuId,
  } = useContext(NavbarContext);

  return (
    <>
      <ul className={classes.menuBar}>
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
      <ul className={classes.menuBar}>
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
    </>
  );
}
