import Link from "next/link";
import { useState } from "react";
import classes from 'styles/nav.module.scss';

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev)
    }

    const closeNav = () => {
        setIsNavOpen(false)
    }

    return (
        <nav className={isNavOpen ? classes.open : classes.close}>
            {isNavOpen && (
                <style jsx global>{`
                    @media(max-width: 767px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }
                    }
                `}</style>
            )}
            <button className={classes.btn} onClick={toggleNav}>
                <span className={classes.bar}></span>
                <span className='sr-only'>MENU</span>
            </button>
            <ul className={classes.list}>
                <li>
                    <Link onClick={closeNav} href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNav} href='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNav} href='/blog'>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;