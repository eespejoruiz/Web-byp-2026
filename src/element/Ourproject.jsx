import React from 'react';
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const gallery = [
    { categery: 'restaurantes', img: IMAGE.bnr2 },
    { categery: 'bares', img: IMAGE.galleryImg4 },
    { categery: 'hoteles', img: IMAGE.galleryImg1 },
    { categery: 'panaderia', img: IMAGE.bnr3 },
    { categery: 'bares', img: IMAGE.galleryImg3 },
    { categery: 'restaurantes', img: IMAGE.galleryImg2 },
]
const Ourproject = () => {

    const [imgGallery, setImgGallery] = useState(gallery);
    const [addactive, setAddactive] = useState(undefined)
    const gelleryfilterBtn = (filterImgdata) => {
        let upadateItems = gallery.filter((updates) => {
            return updates.categery === filterImgdata
        });
        setAddactive(filterImgdata)
        setImgGallery(upadateItems)
    }

    const toForCategory = (cat) => {
        switch (cat) {
            case 'restaurantes': return '/industrias/restaurantes';
            case 'bares': return '/industrias/bares-cafeterias';
            case 'hoteles': return '/industrias/hoteles-catering';
            case 'panaderia': return '/industrias/panaderia';
            default: return '/industrias';
        }
    }



    return (
        <>

            <div className="section-full bg-img-fix content-inner bg-gray" id="project">
                <div className="container">
                    <div className="section-head text-center head-style-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <h2 className="title">Industrias</h2>
                        <div className="dlab-separator-outer">
                            <div className="dlab-separator bg-primary"></div>
                        </div>
                        <p>Seleccionamos y configuramos la tecnología exacta que tu operación necesita para maximizar la rentabilidad, reducir mermas y garantizar la máxima seguridad alimentaria.</p>
                    </div>
                    <div className="site-filters style-1 clearfix center  m-b40">
                        <ul className="filters" data-toggle="buttons">
                            <li onClick={() => { gelleryfilterBtn('all'); setImgGallery(gallery) }} className={`btn
                            ${addactive === undefined ? 'active' : false}
                            ${addactive === 'all' ? 'active' : false}`}>
                                <input type="radio" />
                                <Link className="site-button-secondry wow fadeInUp"><span>Ver todas</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('restaurantes')} className={`btn ${addactive === 'restaurantes' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Restaurantes</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('bares')} className={`btn ${addactive === 'bares' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Bares y Cafeterías</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('hoteles')} className={`btn ${addactive === 'hoteles' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Hoteles y Catering</span></Link> </li>
                            <li onClick={() => gelleryfilterBtn('panaderia')} className={`btn ${addactive === 'panaderia' ? 'active' : false}`}>
                                <Link className="site-button-secondry wow fadeInUp"><span>Panadería y Pastelería</span></Link> </li>
                        </ul>
                    </div>
                    <div className="masonaryContainer">
                        <div className="container">
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                            >
                                {imgGallery.map((image, index) => {
                                    return (
                                        <div data-exthumbimage={image.img} data-src={image.img} className="figure" key={index}>
                                            <li className="office card-container">
                                                <div className="dlab-box dlab-gallery-box">
                                                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom-slow dlab-img-effect zoom">
                                                        <img src={image.img} alt="" />
                                                        <div className="overlay-bx">
                                                            <div className="overlay-icon">
                                                                {/* <i className="fa fa-link icon-bx-xs check-km"></i> */}
                                                                <span className="fas fa-image icon-bx-xs check-km lightimg m-l10" title="Light Gallery Grid 1"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>

                                    )
                                })}
                            </LightGallery>
                            <div className="text-center m-t30">
                                <Link to={toForCategory(addactive)} className="btn btn-primary">
                                    {addactive && addactive !== 'all' ? `Ver soluciones para ${addactive}` : 'Ver soluciones'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourproject
