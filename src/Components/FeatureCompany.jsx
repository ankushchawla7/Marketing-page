import React from 'react'
import { Container } from 'react-bootstrap'
import FeatureOne from '../assets/images/svg/feature-one.svg'
import FeatureTwo from '../assets/images/svg/feature-two.svg'
import FeatureThree from '../assets/images/svg/feature-three.svg'
import FeatureFour from '../assets/images/svg/feature-four.svg'
import FeatureFive from '../assets/images/svg/feature-five.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureBtmLine from '../assets/images/svg/feature-section-btm-line.svg'

const FeatureCompany = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {

                breakpoint: 2500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 0,
                }
            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section id='feature' className='overflow-hidden position-relative py-4 py-xl-5'>
                <Container className='py-4 py-xl-5'>
                    <p className='text-center fs-15  ff-maison fw-normal text-black pt-xl-5'>Featured in</p>
                    <div className=" py-4 py-xl-5 ">
                        <Slider {...settings}>
                            <div className='d-flex justify-content-center feat-company cursor-pointer'>
                                <img src={FeatureOne} alt="img" />
                            </div>
                            <div className='d-flex justify-content-center feat-company cursor-pointer'>
                                <img src={FeatureTwo} alt="img" />
                            </div>
                            <div className='d-flex justify-content-center feat-company cursor-pointer'>
                                <img src={FeatureThree} alt="img" />
                            </div>
                            <div className='d-flex justify-content-center feat-company cursor-pointer'>
                                <img src={FeatureFour} alt="img" />
                            </div>
                            <div className='d-flex justify-content-center feat-company cursor-pointer'>
                                <img src={FeatureFive} alt="img" />
                            </div>
                        </Slider>
                    </div>
                </Container>
                <img src={FeatureBtmLine} alt="line-img" className='position-absolute feature-btm-line w-100 bottom-0 start-0' />
            </section>
        </>
    )
}

export default FeatureCompany