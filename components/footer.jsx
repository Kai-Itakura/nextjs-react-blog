import Logo from "./logo";
import classes from 'styles/footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.wrapper}>
            <div className={classes.flexContainer}>
                <Logo />
                [ソーシャル]
            </div>
        </footer>
    );
}

export default Footer;