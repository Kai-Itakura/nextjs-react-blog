import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import classes from 'styles/accordion.module.scss';

const Accordion = ({ heading, children }) => {
    const [textIsOpen, setTextIsOpen] = useState(false);

    const toggleText = () => {
        setTextIsOpen((prev) => !prev);
    }

    return (
        <div className={textIsOpen ? classes.open : classes.close}>
            <h3 className={classes.heading}>
                <button onClick={toggleText}>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={classes.icon} />
                </button>
            </h3>
            <div className={classes.text}>
                <div className={classes.textInner}>{children}</div>
            </div>
        </div>
    );
}

export default Accordion;
