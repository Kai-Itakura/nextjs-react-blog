import Link from "next/link";
import classes from 'styles/logo.module.css';

const Logo = ({ boxOn = false }) => {
    return (
        <Link className={boxOn ? classes.box : classes.basic} href='/'>
            CUBE
        </Link>
    );
}

export default Logo;