import React from 'react';

// Styles 
import styles from '../styles/SideTitle.module.scss'

const SideTitle = ({ children, type }) => {
    return (
        <h3 className={type == 'main' ? styles.side__title__main : styles.side__title}> {children}</h3 >
    )
};

export default SideTitle;
