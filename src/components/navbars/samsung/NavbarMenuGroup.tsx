import classes from './NavbarMenuGroup.module.css';

interface NavbarMenuGroupProps {
  children: React.ReactNode;
}

export function NavbarMenuGroup({ children }: NavbarMenuGroupProps) {
  return <ul className={classes.navbarMenuGroup}>{children}</ul>;
}
