import classes from 'styles/contact.module.scss';
import Social from './social';

const Contact = () => {
    return (
        <div className={classes.stack}>
            <h3 className={classes.heading}>Contact</h3>
            <Social iconSize='30px' />
            <address>cube@web.mail.address</address>
        </div>
    );
}

export default Contact;