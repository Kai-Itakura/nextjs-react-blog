import Logo from "./logo";
import classes from 'styles/footer.module.scss';
import Container from "./container";
import Social from "./social";

const Footer = () => {
    return (
        <footer className={classes.wrapper}>
            <Container>
                <div className={classes.flexContainer}>
                    <Logo />
                    <Social />
                </div>
            </Container>
        </footer>
    );
}

export default Footer;