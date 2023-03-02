import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from 'styles/post-header.module.scss'
import ConvertDate from './convert-date';

const PostHeader = ({ title, subtitle, publish = '' }) => {
    return (
        <div className={classes.stack}>
            <p className={classes.subtitle}>{subtitle}</p>
            <h1 className={classes.title}>{title}</h1>
            {publish && <div className={classes.publish}>
                <FontAwesomeIcon icon={faClock} size='lg' color='var(--gray-25)' />
                <ConvertDate dateISO={publish} />
            </div>}
        </div>
    );
}

export default PostHeader;