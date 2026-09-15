import React, { useState } from 'react'
import { IMAGE } from '../constent/theme'
import nosotrosHero from '../assets/images/gen/nosotros-hero.webp'
import CarlistingBanner from '../element/CarlistingBanner'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ContectUs from '../components/ContectUs';




const imageCard = [
    {
        location: 1, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 2, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear4)" />
            <defs>
                <linearGradient id="paint0_linear4" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 3, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear2)" />
            <defs>
                <linearGradient id="paint0_linear2" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }, {
        location: 4, img: <svg width="71" height="59" viewBox="0 0 71 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.3341 17.2083H61.0318L58.7243 10.8167C56.3531 4.24523 50.6938 0 44.3052 0H26.6939C20.3066 0 14.646 4.24523 12.2734 10.8167L9.96586 17.2083H1.66495C0.581918 17.2083 -0.212673 18.3361 0.0508043 19.4992L0.882837 23.1867C1.06727 24.0072 1.7329 24.5833 2.49698 24.5833H5.28013C3.41776 26.3856 2.21825 29.0053 2.21825 31.9583V39.3333C2.21825 41.8101 3.07247 44.0456 4.437 45.7757V54.0833C4.437 56.7983 6.42417 59 8.87451 59H13.312C15.7623 59 17.7495 56.7983 17.7495 54.0833V49.1667H53.2496V54.0833C53.2496 56.7983 55.2367 59 57.6871 59H62.1246C64.5749 59 66.5621 56.7983 66.5621 54.0833V45.7757C67.9266 44.0472 68.7808 41.8116 68.7808 39.3333V31.9583C68.7808 29.0053 67.5813 26.3856 65.7203 24.5833H68.5035C69.2676 24.5833 69.9332 24.0072 70.1176 23.1867L70.9497 19.4992C71.2118 18.3361 70.4172 17.2083 69.3341 17.2083ZM20.5133 14.4688C21.5242 11.6694 23.9717 9.83333 26.6939 9.83333H44.3052C47.0274 9.83333 49.4749 11.6694 50.4858 14.4688L53.2496 22.125H17.7495L20.5133 14.4688ZM13.312 39.3026C10.6495 39.3026 8.87451 37.3421 8.87451 34.4013C8.87451 31.4605 10.6495 29.5 13.312 29.5C15.9745 29.5 19.9683 33.9112 19.9683 36.852C19.9683 39.7927 15.9745 39.3026 13.312 39.3026ZM57.6871 39.3026C55.0246 39.3026 51.0308 39.7927 51.0308 36.852C51.0308 33.9112 55.0246 29.5 57.6871 29.5C60.3496 29.5 62.1246 31.4605 62.1246 34.4013C62.1246 37.3421 60.3496 39.3026 57.6871 39.3026Z" fill="url(#paint0_linear3)" />
            <defs>
                <linearGradient id="paint0_linear3" x1="17.2703" y1="-1.43331e-06" x2="63.7282" y2="75.5192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0D3DE6" />
                    <stop offset="1" stopColor="#0DE6CC" />
                </linearGradient>
            </defs>
        </svg>
    }
];







const About = () => {
    const [addAcrtive, setActive] = useState(1);
    const [swiperWidth, setSwiperWidth] = useState(false);

    window.onresize = function () {
        const isNarrowScreen = window.matchMedia("(max-width: 990px)");
        if (isNarrowScreen.matches) {
            setSwiperWidth(true);
        } else {
            setSwiperWidth(false);
        }
    }
    return (
        <>
            <div className="page-content bg-white">
                <CarlistingBanner img={nosotrosHero} title={'Nosotros'} />
                {/* Content */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 me-auto">
                                <div className="section-head">
                                    <h6 className="text-primary sub-title">PROCESO</h6>
                                    <h2 className="title">Así trabajamos</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <p>Somos B&amp;P TECH: ingeniería alimentaria aplicada a resultados. Diseñamos y equipamos operaciones con foco en eficiencia, higiene, seguridad y continuidad. Hablamos claro, proponemos lo que funciona y acompañamos en el día a día.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Dónde operamos</h2>
                            <p>Atendemos proyectos en múltiples verticales: restaurantes, panadería, retail y producción industrial. Si necesitas precisión, orden y continuidad, podemos ayudarte.</p>
                        </div>
                        <div className="map-bx-wraper">
                            <img src={IMAGE.mapPic1} className="map-img" alt="" />
                            {imageCard.map((i, ind) => (
                                <div onMouseEnter={() => { setActive(ind) }} className={`shop-location location${i.location} ${addAcrtive === ind ? 'active' : ''} `} key={ind}>{i.img}</div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ======= */}
                <section className="content-inner">
                    <div className="container">
                        <ContectUs />
                    </div>
                </section>
            </div >
        </>
    )
}

export default About
