import React from 'react';
import style from './intro.module.scss';
import hoagie from '../assets/hoagie_big.svg';

const Intro = ()  => {
    return (
        <div className={"section " + style.section}>
            <div className={style.hoagies}>
                <img className={style.one} alt="Logo Icon" height="480px" src={hoagie}></img>
                {/* <img className={style.two} alt="Logo Icon" height="65px" src={icon}></img> */}
            </div>
            <div className="container">
                <div className={style.content}>
                    <img className={style.hoagie} alt="Logo Icon" height="480px" src={hoagie}></img>
                    <div className={style.text}>
                        <h1>
                            Hoagie is the digital experience club at Princeton
                        </h1>
                        <div>
                            <p>Dreamed up for Princeton students, Hoagie is a creative space that fosters community-centered design and implementation.</p>
                            <p>Our interests are UI/UX design and web app development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;