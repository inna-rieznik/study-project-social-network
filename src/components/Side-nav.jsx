import classes from './Side-nav.module.css';


console.log(classes);

const Side_nav = () => {
    return (
        <nav className={classes.nav}>
        <div><a className={`${classes.item} ${classes.active}`} href="#">Profile</a></div>
        <div ><a className={classes.item} href="#">Messages</a></div>
        <div ><a className={classes.item} href="#">News</a></div>
        <div><a className={classes.item} href="#">Music</a></div>
      </nav>
    );
}

export default Side_nav;