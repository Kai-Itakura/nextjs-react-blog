import classes from 'styles/pagenation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
}) => {
    return (
        <ul className={classes.flexContainer}>
            {prevText && prevUrl && (
                <li className={classes.prev}>
                    <Link href={prevUrl} className={classes.iconText}>
                        <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
                        <span>{prevText}</span>
                    </Link>
                </li>
            )}
            {nextText && nextUrl && (
                <li className={classes.next}>
                    <Link href={nextUrl} className={classes.iconText}>
                        <span>{nextText}</span>
                        <FontAwesomeIcon icon={faChevronRight} color='var(--gray-25)' />
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Pagination;