import classes from 'styles/container.module.scss';

const Container = ({ children, large = false }) => {
    return (
        <div className={large ? classes.large : classes.default}>
            {children}
        </div>
    );
}

export default Container;