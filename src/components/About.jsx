import React from 'react'
import { IMAGE } from '../constent/theme'
import AboutSlider from '../element/AboutSlider'


const About = () => {
    return (

        <div className="row about-bx1">
            <div className="col-lg-5">
                <div className="dlab-media">
                    <img src={IMAGE.about1} alt="" />
                </div>
            </div>
            <div className="col-lg-7 align-self-center" >
                <div className="section-head">
                    <h6 className="text-primary sub-title">NOSOTROS</h6>
                    <h2 className="title">Sobre B&amp;P TECH</h2>
                </div>
                <p>Somos ingeniería alimentaria orientada a resultados: diseñamos y equipamos operaciones con foco en eficiencia, higiene, seguridad y continuidad. Hablamos claro, proponemos lo que funciona y acompañamos en el día a día para que tu negocio rinda mejor.</p>
               <AboutSlider/>
            </div>
        </div>
    )
}

export default About
