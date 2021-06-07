import classes from './Header.module.css'

const Header = () => {
    return(
        <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Fandom_heart-logo.svg/1024px-Fandom_heart-logo.svg.png"></img>
        </header>
    );
}

export default Header;