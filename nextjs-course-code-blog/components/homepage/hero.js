import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/jeroen.jpeg' alt='An Image showing jeroen' width={300} height={350} />
        </div>
        <h1>Hi i'm Jeroen</h1>
        <p>I blog about web development</p>
    </section>
}

export default Hero;