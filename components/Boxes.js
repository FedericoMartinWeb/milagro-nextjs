import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Components 
import { BoxItem, SubTitle } from '../components'

// Styles
import '@splidejs/splide/dist/css/splide.min.css';
import style from '../styles/Boxes.module.scss'

const Boxes = ({ props }) => {

    return (
        <section className={style.boxes}>
            <SubTitle className={style.sub}>{props.Title}</SubTitle>

            <Splide className={style.splide__desktop} options={{
                arrows: false,
                pagination: false,
                padding: { right: '12%' },
                mediaQuery: 'min',
                perPage: 1,
                perMove: 1,
                gap: '15px',
                breakpoints: {
                    768: {
                        perPage: 2
                    },
                    1024: {
                        perPage: 3
                    },
                    1200: {
                        destroy: true
                    }
                }
            }}>
                {props.videos.data.map(video => (
                    <SplideSlide key={video.id}>
                        <BoxItem props={video} />
                    </SplideSlide>
                ))}
            </Splide>

        </section>
    )
};

export default Boxes;
