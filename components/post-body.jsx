import classes from 'styles/post-body.module.scss';

const PostBody = ({ children }) => {
    return (
        <div className={classes.stack}>
            {children}
        </div>
    );
}

export default PostBody;