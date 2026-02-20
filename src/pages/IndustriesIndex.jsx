import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE } from '../constent/theme';

const IndustriesIndex = () => {
  const industries = [
    { title: 'Restaurantes y Horeca', to: '/industrias/restaurantes', img: IMAGE.bnr2 },
    { title: 'Bares y Cafeterías', to: '/industrias/bares-cafeterias', img: IMAGE.galleryImg4 },
    { title: 'Hoteles y Catering', to: '/industrias/hoteles-catering', img: IMAGE.galleryImg1 },
    { title: 'Panadería y Pastelería', to: '/industrias/panaderia', img: IMAGE.bnr3 },
    { title: 'Cocinas Industriales', to: '/industrias/cocinas-industriales', img: IMAGE.home3BackgroundImg },
    { title: 'Supermercados y Retail', to: '/industrias/supermercados', img: IMAGE.productGridPic1 },
    { title: 'Comida Rápida', to: '/industrias/comida-rapida', img: IMAGE.productPic2 },
    { title: 'Laboratorios', to: '/industrias/laboratorios', img: IMAGE.mapPic1 },
    { title: 'Carnicerías', to: '/industrias/carnicerias', img: IMAGE.galleryPic5 },
    { title: 'Estadios', to: '/industrias/estadios', img: IMAGE.galleryPic12 },
    { title: 'Otros', to: '/industrias/otros', img: IMAGE.galleryPic16 },
  ];
  return (
    <>
      <div className="page-content bg-white">
        <div className="section-full content-inner" id="industries-index">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Soluciones por Industria</h2>
              <p>Explora nuestras verticales y descubre la tecnología adecuada para tu operación.</p>
            </div>
            <div className="row align-items-stretch">
              {industries.map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3 col-sm-12 m-b30 d-flex">
                  <div className="service-box industries-card w-100 d-flex flex-column">
                    <div className="dlab-media">
                      <Link to={item.to}><img src={item.img || IMAGE.bnr2} alt={item.title} /></Link>
                    </div>
                    <div className="dlab-info d-flex flex-column">
                      <h4 className="dlab-title m-t0 m-b20"><Link to={item.to}>{item.title}</Link></h4>
                      <Link to={item.to} className="btn btn-primary mt-auto text-center mx-auto">Ver soluciones</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustriesIndex;
