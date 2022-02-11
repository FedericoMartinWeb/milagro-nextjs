import React from 'react';
import Link from 'next/link'

// Components
import { SubTitle } from '.';

// Icons
import { SiGmail, SiInstagram, SiYoutube, SiWhatsapp, SiFacebook, SiTwitch, SiTwitter } from "react-icons/si";

// Style
import style from '../styles/Footer.module.scss'

const chooseIcon = (icon) => {
    switch (icon) {
        case 'Email':
            return <SiGmail />
            break;
        case 'Instagram':
            return <SiInstagram />
            break;
        case 'YouTube':
            return <SiYoutube />
            break;
        case 'Whatsapp':
            return <SiWhatsapp />
            break;
        case 'Facebook':
            return <SiFacebook />
            break;
        case 'Twitch':
            return <SiTwitch />
            break;
        case 'Twitter':
            return <SiTwitter />
            break;
        default:
            return 'Choose an Icon'
    }
}

const Footer = ({ social }) => {
    return (
        <footer className={style.footer}>
            <SubTitle>Contact</SubTitle>

            <address className={style.social}>
                {social.data.attributes.Media.map(item => (
                    <Link href={item.Url} key={item.id}>
                        <a target='_blank'>
                            {chooseIcon(`${item.Icon}`)}
                        </a>
                    </Link>
                ))}
            </address>

        </footer>
    )
};

export default Footer;
