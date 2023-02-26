import classes from "styles/two-column.module.scss";

export const TwoColumn = ({ children }) => {
    return (
        <div className={classes.flexContainer}>
            {children}
        </div>
    );
}

export const TwoColumnMain = ({ children }) => {
    return (
        <div className={classes.main}>
            {children}
        </div>
    );
}

export const TwoColumnSidebar = ({ children }) => {
    return (
        <div className={classes.sidebar}>
            {children}
        </div>
    );
}