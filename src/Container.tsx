import React from 'react';
import style from './Container.module.css'
import Card from "./components/interactive_card/Card";
import FormSelection from "./components/form/FormSelection";
import FormTabs from "./components/form_tabs/FormTabs";
import ModelFox from './components/model/ModelFox';


export default function Container() {
    return (
        <div className={style.flexContainer}>
            <div className={style.container}>
                <div className={style.flexitem}>
                    <div className={style.project}><ModelFox/></div>
                    <div className={style.project}><Card/></div>
                    <div className={style.project}><FormSelection/></div>
                    <div className={style.project}><FormTabs/></div>
                </div>
            </div>
        </div>
    );
}
