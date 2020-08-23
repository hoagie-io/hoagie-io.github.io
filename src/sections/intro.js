import React from 'react';
import style from './intro.module.scss';
import styleData from '../styles/variables.scss'
import hoagie from '../assets/hoagie_big.svg';
import Button from '../components/button';

const Intro = ()  => {
    const formURL = 'https://forms.gle/Rh5BGj7YgzCdyo3Z7';
    return (
        <div id="intro" className={"section " + style.section}>
            <div className={style.hoagies}>
                <img className={style.one} alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img>
                <img className={style.two} alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img>
            </div>
            <div className="container">
                <div className={style.content}>
                    <div className={style.hoagie}>
                        <img alt="Hoagie" height={styleData.hoagieBigHeight} src={hoagie}></img>
                    </div>
                    <div className={style.text}>
                        <h1>
                            Hoagie is the digital experience club at Princeton
                        </h1>
                        <div className={style.description}>
                            <p>Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation.</p>
                            <br />
                            <p>Our interests are UI/UX design and web app development.</p>
                        </div>
                        <div className={style.buttons}>
                            <Button href={formURL} external={true}>Join Us</Button>
                            <Button href="#learn" outlined={true}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;