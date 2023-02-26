import Logo from "./logo";
import classes from 'styles/footer.module.scss';
import Container from "./container";

const Footer = () => {
    return (
        <footer className={classes.wrapper}>
            <Container>
                <div className={classes.flexContainer}>
                    <Logo />
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    );
}

export default Footer;