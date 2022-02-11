import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

// Icons
import { MdArrowForward } from "react-icons/md";

// Styles
import style from '../styles/BoxItem.module.scss';

// Images 
import images from '../constants/images'

const BoxItem = ({ props }) => {
    const { setTogglePopUp, setVideo } = useContext(DataContext);
    const iconStyles = { color: '#f6ebef', fontSize: '2rem' };

    return (
        <article className={style.box__item} >
            <a href={props.attributes.Playlist ? props.attributes.videoUrl : '#'} target='_blank' data-video={props.attributes.videoUrl} rel="noreferrer" onClick={(event) => {

                if (props.attributes.Playlist) {
                    setTogglePopUp(false);
                } else {
                    event.preventDefault();
                    setTogglePopUp(true);
                    setVideo(props.attributes.videoUrl);
                }

            }}>
                <figure className={style.box__item__figure}>
                    <img src={images[props.attributes.image].src} alt={props.attributes.image} />
                </figure>

                <div className={style.box__item__content}>
                    <h4>{props.attributes.title}</h4>
                    <div className={style.box__item__content_description}>
                        {props.attributes.description && <p>{`<${props.attributes.description}>`}</p>}
                        {props.attributes.info && <small>{props.attributes.info}</small>}
                    </div>

                    <i><MdArrowForward style={iconStyles} /></i>
                </div>
            </a>
        </article >
    )
};

export default BoxItem;
