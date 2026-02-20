import React, { useRef, useState } from 'react'
import CarlistingBanner from '../element/CarlistingBanner'
import { IMAGE } from '../constent/theme'
import BlogDridCard from '../element/BlogDridCard'
import ModalVideo from 'react-modal-video'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogPosts } from '../data/blogPostsData'


const blogSlider = [
    { img: IMAGE.blogGridpic9 },
    { img: IMAGE.blogGridpic10 },
    { img: IMAGE.blogGridpic11 },
]
const BlogGrid = () => {
    const [open, setOpen] = useState(false);
    const swiperRef = useRef(null);
    return (
        <>
            <ModalVideo channel="youtube" autoplay
                isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)} />

            <div className="page-content bg-white">
                <CarlistingBanner img={IMAGE.bnr1} title={'Blog'} />

                <section className="content-inner">
                    <div className="container">
                        <div className="clearfix">
                            <ul id="masonry" className="row blog-masonry">
                                {blogPosts.slice(0, 4).map((p) => (
                                    <BlogDridCard
                                        key={p.slug}
                                        date={p.date}
                                        img={p.img}
                                        heading={p.title}
                                        excerpt={p.excerpt}
                                        to={`/blog/${p.slug}`}
                                    />
                                ))}
                                <li className="card-container grid-item col-xl-4 col-md-6">
                                    <div className="dlab-card style-1 shadow m-b30">
                                        <div className="dlab-media video-bx style-2 h-auto">
                                            <Link to="/blog"><img src={IMAGE.blogGridpic3}
                                                alt="" /></Link>
                                            <div className="video-btn sm" onClick={() => { setOpen(true) }}>
                                                <Link to={'#'}
                                                    className="popup-youtube"><i className="fa fa-play"></i></Link>
                                            </div>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date">Jun 26,2023</li>
                                                </ul>
                                            </div>
                                            <h4 className="dlab-title"><Link to="/blog/cadena-de-frio-retail-puertas-vs-abiertos">Galería en retail: consistencia visual y frío</Link></h4>
                                            <p>Buenas prácticas de exhibición y control térmico con deslizables para merchandising.</p>
                                        </div>
                                    </div>
                                </li>
                                {blogPosts.slice(4, 6).map((p) => (
                                    <BlogDridCard
                                        key={p.slug}
                                        date={p.date}
                                        img={p.img}
                                        heading={p.title}
                                        excerpt={p.excerpt}
                                        to={`/blog/${p.slug}`}
                                    />
                                ))}

                                <li className="card-container grid-item col-xl-4 col-md-6">
                                    <div className="dlab-card style-1 shadow m-b30">
                                        <div className="dlab-media">
                                            <Swiper className="swiper-container post-swiper"
                                                speed={1200}
                                                loop={true}
                                                ref={swiperRef}
                                            >
                                                <div className="swiper-wrapper">
                                                    {blogSlider.map((item, ind) => (
                                                        <SwiperSlide className="swiper-slide" key={ind}>
                                                            <Link to="/blog"><img
                                                                src={item.img} alt="" /></Link>
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                                <div className="prev-post-swiper-btn cursorPointer" onClick={() => { swiperRef.current.swiper.slidePrev() }}><i className="fas fa-chevron-left"></i></div>
                                                <div className="next-post-swiper-btn cursorPointer" onClick={() => { swiperRef.current.swiper.slideNext() }}><i className="fas fa-chevron-right"></i></div>
                                            </Swiper>
                                        </div>
                                        <div className="dlab-info">
                                            <div className="dlab-meta">
                                                <ul>
                                                    <li className="post-date">Jun 26,2023</li>
                                                </ul>
                                            </div>
                                            <h4 className="dlab-title"><Link to="/blog/energia-y-eficiencia-en-retail">Eficiencia energética en casos refrigerados</Link></h4>
                                            <p>Medidas prácticas para reducir consumo sin comprometer operación.</p>
                                        </div>
                                    </div>
                                </li>
                                {blogPosts.slice(6, 9).map((p) => (
                                    <BlogDridCard
                                        key={p.slug}
                                        date={p.date}
                                        img={p.img}
                                        heading={p.title}
                                        excerpt={p.excerpt}
                                        to={`/blog/${p.slug}`}
                                    />
                                ))}

                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center m-b30">
                                <Link to={'/blog'} className="btn btn-primary btn-border">LOAD MORE</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BlogGrid
