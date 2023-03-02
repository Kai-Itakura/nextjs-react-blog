import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classes from 'styles/post-categories.module.scss'

const PostCategories = ({ categories }) => {
    return (
        <div className={classes.flexContainer}>
            <h3 className={classes.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className='sr-only'>Categories</span>
            </h3>
            <ul className={classes.list}>
                {categories.map(({ name, slug }) => (
                    <li key={slug}>
                        <Link href={`blog/category/${slug}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostCategories;