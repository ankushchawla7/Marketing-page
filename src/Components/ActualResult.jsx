import React from 'react'
import ResultOne from '../assets/images/png/Jon-Vaughan-Testimonial.png'
import ResultTwo from '../assets/images/png/michal-img.png'
import ResultThree from '../assets/images/png/grant-img.png'
import Slider from "react-slick";
import SliderIcon from '../assets/images/svg/result-slider-icon.svg'
import PrevIcon from '../assets/images/png/prev-arrow.png'
import NextIcon from '../assets/images/png/next-arrow.png'
import SliderVideoBtn from '../assets/images/svg/slider-video-btn.svg'

const ActualResult = () => {
    const slider = React.useRef(null);
    const setslider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplayspeed:5000,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <>
            <section id='actual-result' className='actual-result-bg d-flex  flex-column justify-content-center overflow-hidden position-relative pt-119'>
                <p className='fs-30 ff-maison-li fw-light text-white text-center mb-0 line-87'>actual business</p>
                <h2 className='fs-80 ff-sohne fw-bold text-uppercase text-uppercase text-white text-center'>Actual results.</h2>
                <p className='text-white fs-15 ff-maison-li fw-normal line-133 text-center pt-4 pt-xl-5'>Businesses trust Venveo to power grow.</p>
                <Slider ref={slider} {...setslider} className='setslider '>
                    <div className="slider-card">
                        <div className='position-relative'>
                            <img src={ResultOne} alt="img-one" className='slider-img' />
                            <img src={SliderVideoBtn} alt="btn" className='slider-btn position-absolute  cursor-pointer' />
                        </div>
                        <p className='max-613 fs-30  ff-maison-light fw-light text-white text-center pt-4'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                        <div className='d-flex flex-column align-items-center justify-content-center pt-xl-5 mt-4 pb-133'>
                            <p className='text-white'>Jon Vaughan,</p>
                            <p className='text-white'>REGIONAL VP-SE AT US LBM</p>
                            <img src={SliderIcon} alt="icon-img" />
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className='position-relative'>
                            <img src={ResultTwo} alt="img-one" className='slider-img' />
                            <img src={SliderVideoBtn} alt="btn" className='slider-btn position-absolute  cursor-pointer' />
                        </div>
                        <p className='max-613 fs-30  ff-maison-light fw-light text-white text-center pt-4'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                        <div className='d-flex flex-column align-items-center justify-content-center pt-xl5 mt-4 pb-133'>
                            <p className='text-white'>Jon Vaughan,</p>
                            <p className='text-white'>REGIONAL VP-SE AT US LBM</p>
                            <img src={SliderIcon} alt="icon-img" />
                        </div>
                    </div>
                    <div className="slider-card">
                        <div className='position-relative'>
                            <img src={ResultThree} alt="img-one" className='slider-img' />
                            <img src={SliderVideoBtn} alt="btn" className='slider-btn position-absolute cursor-pointer ' />
                        </div>
                        <p className='max-613 fs-30  ff-maison-light fw-light text-white text-center pt-4'>“They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.”</p>
                        <div className='d-flex flex-column align-items-center justify-content-center pt-xl-5 mt-4 pb-133'>
                            <p className='text-white'>Jon Vaughan,</p>
                            <p className='text-white'>REGIONAL VP-SE AT US LBM</p>
                            <img src={SliderIcon} alt="icon-img" />
                        </div>

                    </div>
                </Slider>
                <img onClick={() => slider?.current?.slickPrev()} src={PrevIcon} alt="prev-arrow" className='position-absolute prev-arrow cursor-pointer' />
                <img onClick={() => slider?.current?.slickNext()} src={NextIcon} alt="next-arrow" className='position-absolute next-arrow cursor-pointer' />
            </section>
        </>
    )
}

export default ActualResult