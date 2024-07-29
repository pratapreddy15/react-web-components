import { useContext } from 'react';
import classes from './NavbarMenuItem.module.css';
import { NavbarContext } from './NavbarContext';

interface NavbarMenuItemProps {
  id: string;
  text: string;
  hasSubMenu: boolean;
  index?: number;
  children: React.ReactNode;
}

export function NavbarMenuItem(props: NavbarMenuItemProps) {
  const { selectedMenuId, setSelectedMenuId, setShowOeverlay } = useContext(NavbarContext);

  const { index, id, text, hasSubMenu, children } = props;
  const isExpanded = selectedMenuId === id;

  return (
    <li
      className={`${classes.menuItem} ${selectedMenuId === id ? classes.active : ''}`}
      data-index={index}
      data-menu-item-id={id}
      data-is-expanded={isExpanded}
    >
      <div
        className={classes.itemWrapper}
        onMouseEnter={() => {
          setSelectedMenuId(id);
          setShowOeverlay(hasSubMenu);
        }}
        onMouseLeave={() => {
          !hasSubMenu && setSelectedMenuId('');
        }}
      >
        <button id={id}>{text}</button>
      </div>
      {children}
    </li>
  );
}
