import React from 'react';

// Styles
import style from '../styles/SubTitle.module.scss'

const SubTitle = ({ children }) => {
    return (
        <h2 className={style.subtitle}>{children}</h2>
    )
};

export default SubTitle;
