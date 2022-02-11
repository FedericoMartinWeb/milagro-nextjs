import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

// Icons
import { MdOutlineClose } from "react-icons/md";

// Styles
import style from '../styles/PopUp.module.scss';

const PopUp = () => {
    const { togglePopUp, setTogglePopUp, video } = useContext(DataContext);
    const iconStyles = { color: "#f6ebef", fontSize: "4rem" };

    return (
        <>
            {togglePopUp && (
                <section className={style.popup}>
                    <div className={style.container}>

                        <a href="#" className={style.close} onClick={(event) => {
                            event.preventDefault();
                            setTogglePopUp(false);
                        }} >
                            <MdOutlineClose style={iconStyles} />
                        </a>

                        <div className={style.container__video}>
                            <iframe className={style.video} src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
};

export default PopUp;
