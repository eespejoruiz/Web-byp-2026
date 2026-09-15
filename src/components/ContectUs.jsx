import React from 'react'
import { IMAGE } from '../constent/theme'
import { Link } from 'react-router-dom'

const ContectUs = () => {
    return (
        <>

            <div className="row call-to-action-bx">
                <div className="col-xl-5 col-lg-6 me-auto">
                    <div className="section-head">
                        <h2 className="title text-white">¿Tienes alguna pregunta sobre nosotros?</h2>
                    </div>
                    <a href="tel:+51985362946" className="btn btn-white me-3 mb-2"><i className="fas fa-phone-volume me-sm-3 me-0 shake"></i><span className="d-sm-inline-block d-none">+51 985 362 946</span></a>
                    <Link to="/contacto" className="btn btn-outline-white effect-1  mb-2"><span>Contáctanos</span></Link>
                </div>
                <div className="col-lg-6">
                    <div className="media-box">
                        <img src={IMAGE.aboutPic5} className="main-img" alt="" />
                        <img src={IMAGE.patternImg3} className="pt-img move-1" alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContectUs
