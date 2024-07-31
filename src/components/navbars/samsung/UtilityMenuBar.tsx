import classes from './UtilityMenuBar.module.css';

export function UtilityMenuBar() {
  return (
    <ul className={`${classes.menuBar} ${classes.utility}`}>
      <li className={classes.menuItem}>
        <i className="bi bi-search"></i>
      </li>
      <li className={classes.menuItem}>
        <i className="bi bi-cart2"></i>
      </li>
      <li className={classes.menuItem}>
        <i className="bi bi-person"></i>
      </li>
    </ul>
  );
}
