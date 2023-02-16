import Logo from "./logo";
import Nav from "./nav";
import classes from "styles/header.module.scss";

const Header = () => {
    return (
        <header>
            <div className={classes.flexContainer}>
                <Logo boxOn />
                <Nav />
            </div>
        </header>
    )
}

export default Header;