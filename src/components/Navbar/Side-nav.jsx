import { NavLink } from 'react-router-dom';
import classes from './Side-nav.module.css';



const Side_nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink className={classes.item} activeClassName={classes.active}  to="/profile">Profile</NavLink>
      </div>
      <div >
        <NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Dialogs</NavLink>
      </div>
      <div >
        <NavLink className={classes.item} activeClassName={classes.active}  to="/news">News</NavLink>
      </div>
      <div>
        <NavLink className={classes.item} activeClassName={classes.active}  to="/music">Music</NavLink>
      </div>
    </nav>
  );
}

export default Side_nav;