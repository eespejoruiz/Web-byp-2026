import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IMAGE } from '../constent/theme'


const testimonial = [
    {
        img: IMAGE.testimonialPic1,
        text: 'Desde que implementamos los hornos y la línea de amasado con B&P TECH, nuestra merma bajó un 15%. El servicio post-venta es impecable.',
        name: 'Carlos R.',
        role: 'Director de Operaciones (Cadena de Panaderías)',
    },
    {
        img: IMAGE.testimonialPic2,
        text: 'El sistema de lavado Winterhalter cambió el ritmo de nuestra cocina. Ahorramos agua mensual y la higiene de la vajilla es absoluta.',
        name: 'María F.',
        role: 'Chef Ejecutiva (Hotel 5 Estrellas)',
    },
    {
        img: IMAGE.testimonialPic3,
        text: 'Necesitábamos refrigeración robusta que soportara el calor de la cocina. True y el respaldo de B&P TECH nos dieron la tranquilidad que buscábamos.',
        name: 'Jorge T.',
        role: 'Gerente General (Grupo Gastronómico)',
    },
]
const Testimonial = () => {
    const swiperRef = React.useRef(null)
    return (
        <>

            <div className="section-content" style={{ overflow: 'hidden' }}>
                <Swiper className="testimonial-one swiper-container"
                    slidesPerView={3}
                    spaceBetween={30}
                    speed={1200}
                    ref={swiperRef}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {testimonial.map((monials, index) => {
                        return (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="testimonial-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div className="testimonial-text">
                                        <p>{monials.text}</p>
                                    </div>
                                    <div className="testimonial-detail clearfix">
                                        <div className="testimonial-pic quote-left radius shadow">
                                            <img src={monials.img} width="100" height="100" alt="" /></div>
                                        <strong className="testimonial-name">{monials.name}</strong> <span className="testimonial-position">{monials.role}</span> </div>
                                </div>
                            </SwiperSlide>)
                    })}
                    <div className="testimonial-pagination text-center m-t50">
                        <div className="btn-prev swiper-button-prev7 cursorPointer" onClick={() => { swiperRef.current.swiper.slidePrev() }}><i className="las la-arrow-left"></i></div>
                        <div className="btn-next swiper-button-next7 cursorPointer" onClick={() => { swiperRef.current.swiper.slideNext() }}><i className="las la-arrow-right"></i></div>
                    </div>
                </Swiper>
            </div >
        </>
    )
}

export default Testimonial
