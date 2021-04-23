import React from 'react';
import style from './Card.module.css'
import union from '../../asses/image/Group164.svg'
import SuperButton from "../../castom_components/SuperButton";
import Tilt from 'react-tilt'
import birds from '../../asses/image/birds.svg'
import birdsEnd from '../../asses/image/birdseEnd.svg'


export default function Card() {

    return (<div className={style.container}>
            <div className={style.carbBackgroundContainer}>
                <img src={birds} alt={'Birds'}/>
                <img src={birdsEnd} alt={'Birds'}/>
            </div>
            <div className={style.card}>
                <Tilt className="Tilt" options={{max: 45, reverse: true, speed: 1000}}>
                    <div className={style.cardContainer}>
                        <div className={style.image}>
                            <img alt={'background image'} src={union}/>
                        </div>
                        <div className={style.titleCard}>
                            <span>Интерактивная карточка</span>
                        </div>
                        <div>
                            <SuperButton>
                                {'Кнопка'}
                            </SuperButton>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}
