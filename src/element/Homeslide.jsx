import React from 'react'
import { IMAGE } from '../constent/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import { Link } from 'react-router-dom';


const slider = [
    { title: 'Restaurantes y Horeca', imag1: IMAGE.bnr2, link: '/industrias/restaurantes' },
    { title: 'Panadería y Pastelería', imag1: IMAGE.bnr3, link: '/industrias/panaderia' },
    { title: 'Supermercados y Retail', imag1: IMAGE.productGridPic1, link: '/industrias/supermercados' },
]

const Homeslide = (props) => {
    const swiperRef = React.useRef(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <div className="banner-slider">
            <Swiper className="swiper-container main-silder-swiper"
                spaceBetween={30}
                effect={"fade"}
                speed={1500}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
                ref={swiperRef}
                onSlideChange={(e) => setActiveIndex(e.realIndex ?? e.activeIndex ?? 0)}
            >
                {
                    slider.map((slide, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                            <div className="dlab-slide-item">
                                <div className="silder-content">
                                    <div className="inner-content">
                                        <div className="left" style={{ width: '100%' }}>
                                            <p className="car-type">B&amp;P TECH</p>
                                            <h1 className="car-name slide-vertical text-center" data-splitting>{slide.title}</h1>
                                        </div>
                                        <div className="right d-none">
                                            <p className="price-label">Diseño • Equipamiento • Soporte</p>
                                            <p className="car-price" data-splitting>Ingeniería alimentaria</p>
                                        </div>
                                    </div>
                                    <Link to={slider[activeIndex]?.link || slide.link} data-splitting className="discover-link">VER SOLUCIONES</Link>
                                </div>
                                <div className="slider-img">
                                    <img src={slide.imag1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="slider-one-pagination">
                    <div className="btn-prev swiper-button-prev1 cursorPointer"
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    ><i className="fas fa-chevron-left"></i></div>
                    <div className="btn-next swiper-button-next1 cursorPointer"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    ><i className="fas fa-chevron-right"></i></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Homeslide
