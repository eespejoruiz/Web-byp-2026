import React from 'react'
import { IMAGE } from '../constent/theme'
import Ourproject from '../element/Ourproject'
import Testimonial from '../components/Testimonial';
import { Link } from 'react-router-dom';
import Homeslide from '../element/Homeslide';


const cards = [
  {
    img: IMAGE.teamPic1,
    title: 'La precisión del frío en la Alta Cocina',
    text: 'Cómo Virgilio Martínez y su equipo optimizan sus ecosistemas con True Refrigeration.',
    to: '/casos-de-exito/alta-cocina',
  },
  {
    img: IMAGE.testimonialPic2,
    title: 'Eficiencia en cada servicio de Banquete',
    text: 'La implementación de sistemas Winterhalter para manejar el alto volumen sin perder higiene.',
    to: '/casos-de-exito/hotel',
  },
  {
    img: IMAGE.galleryPic13,
    title: 'La ciencia de la masa perfecta',
    text: 'Automatización y estandarización de procesos con amasadoras Diosna y laminadoras Rondo.',
    to: '/casos-de-exito/panaderia',
  },
];
const ourService = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M2 3h20v14H6l-4 4V3zm4 4h12v2H6V7zm0 4h8v2H6v-2z" />
      </svg>
    ),
    text: 'Asesoría Especializada',
    desc: 'Diseño de proyectos y selección de equipos basados en el flujo operativo de tu cocina.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2l9 4v6c0 5-3.5 9.74-9 10-5.5-.26-9-5-9-10V6l9-4zm0 4.18L6 7.73V12c0 3.87 2.69 7.16 6 7.46 3.31-.3 6-3.59 6-7.46V7.73l-6-1.55z" />
      </svg>
    ),
    text: 'Garantía Sólida',
    desc: 'Respaldo directo de fábrica con hasta 5 años de garantía en marcas seleccionadas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M3 13h2l3 7h11l3-9H8l-2-5H1v2h4l3.6 8H18l-1 3H9l-3-6H3v-2z" />
      </svg>
    ),
    text: 'Entrega en Puerta',
    desc: 'Logística segura e instalación profesional con puesta en marcha en tu local.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M20 8h-3V5h-2v3H9V5H7v3H4v2h3v3h2v-3h6v3h2v-3h3zM4 18h16v2H4z" />
      </svg>
    ),
    text: 'Stock Real en Perú',
    desc: 'Disponibilidad inmediata de equipos clave para que tu proyecto no sufra demoras.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 5h-2v6l5 3 .9-1.45-3.9-2.3z" />
      </svg>
    ),
    text: 'Repuestos Originales',
    desc: 'Inventario permanente de piezas y consumibles para asegurar la vida útil de tu inversión.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0-6a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
      </svg>
    ),
    text: 'Soporte 24/7',
    desc: 'Servicio técnico preventivo y correctivo de respuesta rápida para operaciones críticas.',
  },
]
const Home4 = () => {
  return (
    <>
      <div className="page-content bg-white">
        <div className="section-full content-inner" id="byp-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${IMAGE.slide_pic2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 m-b30">
                <div className="section-head">
                  <h6 className="text-primary sub-title">B&amp;P TECH</h6>
                  <h1 className="title text-white">Ingeniería alimentaria para operaciones de alto rendimiento</h1>
                  <p className="m-b0 text-white">Diseñamos, equipamos y acompañamos unidades productivas con foco en eficiencia, higiene, seguridad y continuidad operativa.</p>
                </div>
                <div className="m-t30">
                  <Link to="/industrias" className="btn btn-primary m-r10">Ver industrias</Link>
                  <Link to="/contacto" className="btn btn-primary btn-border">Contactar</Link>
                </div>
              </div>
              <div className="col-lg-6">
                <Homeslide />
              </div>
            </div>
          </div>
        </div>
        {/* =======Casos de Éxito >>>>>> */}
        <div className="section-full content-inner overlay-white-dark" id="choose-us">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">El Respaldo de los Grandes</h2>
              <p>En B&amp;P TECH no solo entregamos equipos, construimos relaciones a largo plazo basadas en la confianza y la eficiencia operativa. Descubre cómo los líderes de la industria transformaron sus cocinas con nosotros.</p>
            </div>
            <div className="row">
              {cards.map((card, index) => {
                return (
                  <div key={index} className="col-md-6 col-lg-4 col-sm-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                    <div className="service-box">
                      <div className="dlab-media"><Link to={card.to} className='cursorUnsate'><img src={card.img} alt="" /></Link> </div>
                      <div className="dlab-info">
                        <h4 className="dlab-title m-t0 m-b20"><Link className=' cursorUnsate' to={card.to}>{card.title}</Link></h4>
                        <p className="m-b30">{card.text}</p>
                        <Link to={card.to} className="btn btn-primary">Ver Caso de Éxito</Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* ============Our project >>>>>>> */}
        <Ourproject />
        {/* ===========Our services >>>>>>> */}
        <div className="section-full bg-white content-inner" id="our-service">
          <div className="container">
            <div className="section-head text-center head-style-2 wow fadeIn">
              <h2 className="title">Agregamos valor a tu inversión</h2>
              <p>Valor agregado B2B para maximizar resultados y continuidad operativa.</p>
            </div>
            <div className="row">
              {ourService.map((item, ind) => {
                return (
                  <div key={ind} className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp d-flex">
                    <div className="icon-bx-wraper style-6 center m-b40 w-100">
                      <div className="icon-bx-sm bg-primary m-b20">
                        <span className="icon-cell">{item.icon}</span>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte text-uppercase">{item.text}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
        {/* ===============Testimonial >>>>> */}
        <div className="section-full bg-gray content-inner-1" id="client">
          <div className="container">
            <div className="section-head text-center wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
              <h2 className="title">Nuestros clientes ya lo saben</h2>
              <p>Testimoniales</p>
            </div>
            <Testimonial />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home4
