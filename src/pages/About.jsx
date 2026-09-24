import React from 'react'
import nosotrosHero from '../assets/images/gen/nosotros-hero.webp'
import CarlistingBanner from '../element/CarlistingBanner'
import { Link } from 'react-router-dom';
import { industryData } from '../data/industryData';

const About = () => {
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
                        <div className="byp-chips" style={{ justifyContent: 'center', marginBottom: 56 }}>
                            {industryData.map((ind) => (
                                <Link className="byp-chip" to={`/industrias/${ind.slug}`} key={ind.slug}>
                                    {ind.title.toUpperCase()}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default About
