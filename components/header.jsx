import Logo from "./logo";
import Nav from "./nav";
import classes from "styles/header.module.scss";
import Container from "./container";

const Header = () => {
    return (
        <header>
            <Container large>
                <div className={classes.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}

export default Header;