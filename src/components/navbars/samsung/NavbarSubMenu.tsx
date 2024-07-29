import { SubMenu } from './types';

import classes from './NavbarSubMenu.module.css';

interface NavbarSubMenuProps {
  parentMenuItemId: string;
  subMenu: SubMenu;
}

export function NavbarSubMenu(props: NavbarSubMenuProps) {
  const { parentMenuItemId, subMenu } = props;
  const { title, list } = subMenu;

  return (
    <div className={classes.subMenu} data-parent-menu-item-id={parentMenuItemId}>
      {title && <h3 className={classes.subMenuTitle}>{title}</h3>}
      <ul className={classes.subMenuList}>
        {list.map((subMenuItem) => (
          <li key={subMenuItem.id} className={classes.subMenuListItem}>
            {subMenuItem.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
