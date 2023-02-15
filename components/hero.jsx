import classes from 'styles/hero.module.scss'

const Hero = ({ title, subtitle, imageOn = false }) => {
    return (
        <div>
            <div className={classes.text}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.subtitle}>{subtitle}</p>
            </div>
            {imageOn && <figure>[画像]</figure>}
        </div>
    );
}

export default Hero;