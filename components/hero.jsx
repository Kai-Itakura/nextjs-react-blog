import classes from 'styles/hero.module.scss';
import Image from 'next/legacy/image';
import cube from 'images/cube.jpg';

const Hero = ({ title, subtitle, imageOn = false }) => {
    return (
        <div className={classes.flexContainer}>
            <div className={classes.text}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.subtitle}>{subtitle}</p>
            </div>
            {imageOn && (
                <figure className={classes.image}>
                    <Image
                        src={cube}
                        alt=''
                        layout='responsive'
                        sizes='(min-width: 1152px) 576px, (min-width: 786px) 50vw, 100vw'
                        priority
                        placeholder='blur'
                    />
                </figure>
            )}
        </div>
    );
}

export default Hero;