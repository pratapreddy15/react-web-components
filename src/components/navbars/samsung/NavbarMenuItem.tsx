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
  const { selectedMenuId, setSelectedMenuId, showMobileMenu, setShowOeverlay } = useContext(NavbarContext);

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
          if (!showMobileMenu) {
            setSelectedMenuId(id);
            setShowOeverlay(hasSubMenu);
          }
        }}
        onMouseLeave={() => {
          !showMobileMenu && !hasSubMenu && setSelectedMenuId('');
        }}
      >
        <button
          id={id}
          onClick={() => {
            if (showMobileMenu) {
              setSelectedMenuId(id);
            }
          }}
        >
          {text}
        </button>
      </div>
      {children}
    </li>
  );
}
