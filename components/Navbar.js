import React from 'react';

// Styles
import styles from './../styles/Navbar.module.scss';

// Images 
import images from '../constants/images'


const Navbar = () => {

    return (
        <nav className={styles.navbar}>

            <figure>
                <img src={images.bannergif.src} alt="banner gif" />
            </figure>

            <h1>Milagro de Catamarca</h1>
        </nav>
    )
};

export default Navbar;
