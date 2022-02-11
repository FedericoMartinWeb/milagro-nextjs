import React from 'react';

// Components
import { SideTitle } from '.';

// Styles
import style from '../styles/Aside.module.scss'

const Aside = () => {
    return (
        <aside className={style.aside}>

            <article className={style.aside__items}>
                <SideTitle type='main'>Lucas Pablo Busso Orozco</SideTitle>
            </article>

            <article className={style.aside__items}>
                <SideTitle>Movie Maker Degree</SideTitle>
            </article>

            <article className={style.aside__items}>
                <SideTitle>LiveVJ</SideTitle>
                <ul>
                    <li>{`< Analog Video >`}</li>
                    <li>{`< Resolume >`}</li>
                    <li>{`< Mapping >`}</li>
                </ul>
            </article>

            <article className={style.aside__items}>
                <SideTitle>Premier After Effects</SideTitle>
            </article>
        </aside >
    )
};

export default Aside;
