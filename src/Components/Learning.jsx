import React from 'react'
import { Container } from 'react-bootstrap'
import BigLearning from '../assets/images/png/big-learning.png'
import LearningOne from '../assets/images/png/learning-one.png'
import LearningTwo from '../assets/images/png/learning-two.png'
import LearningThree from '../assets/images/png/learning-three.png'
import LearnMore from '../assets/images/svg/learn-more-icon.svg'
import SeeAll from '../assets/images/svg/learn-more-icon.svg'
import Brands from '../assets/images/png/made-brands.png'
import LearningLine from '../assets/images/svg/digital-line.svg'

const Learning = () => {
    return (
        <>
            <section id='learning' className='py-4 py-xl-5 overflow-hidden position-relative'>
                <Container>
                    <h2 className='fs-80 ff-sohne text-center fw-bold text-uppercase text-black line-87'>Learn from us.</h2>
                    <p className='text-center fs-15 ff-maison text-black line-133 pt-2'>Digital marketing resources from Venveo to help you grow.</p>
                    <div className='d-flex justify-content-center py-4 py-xl-5'>
                        <button className='d-flex align-items-center see-all-btn fs-15 ff-maison-semi gap-2'>See All
                            <img src={SeeAll} alt="see-all-arrow" />
                        </button>
                    </div>
                    <div className='position-relative learn-bg-section cursor-pointer my-5'>
                        <img src={BigLearning} alt="img" className='w-100' />
                        <div className="big-learning-card position-sm-absolute mt-4 mt-sm-0">
                            <p className='fs-15 ff-maison fw-normal text-uppercase skyish-color line-133'>guides</p>
                            <p className='fs-30 text-black ff-maison-light fw-light'>Marketing to Contractors <span className="d-sm-block"></span> and Installers: <span className="d-sm-block"></span>The Ultimate Guide</p>
                            <p className='fs-15 ff-maison fw-normal  text-black line-133'>Understanding the process and <span className="d-sm-block"></span> maximize the opportunities</p>
                            <button className='learning-btn fs-15 ff-maison-semi fw-normal text-black  line-133'>Read More
                                <img src={LearnMore} alt="icon" />
                            </button>
                        </div>
                        <img src={Brands} alt="made for brands" className='position-absolute learning-brands-img' />
                    </div>
                </Container>
                <div className="container-fluid px-0 pt-5 mt-2">
                    <div className="row justify-content-center justify-content-lg-between">
                        <div className="col-lg-4 col-sm-6 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0" data-aos="fade-right">
                            <div className='position-relative learning-card cursor-pointer'>
                                <img src={LearningOne} alt="img-one" className='w-100' />
                                <div className="big-learning-card position-absolute right-4 mt-3 mt-sm-0">
                                    <p className='fs-15 ff-maison fw-normal text-uppercase skyish-color line-133 max-334'>multi-channel marketing</p>
                                    <p className='fs-30 text-black ff-maison-light fw-light max-334'>How to Get Your Product into Lowe’s</p>
                                    <p className='fs-15 ff-maison fw-normal  text-black line-133 max-334'>Understanding the process and maximize the opportunities</p>
                                    <button className='learning-btn fs-15 ff-maison-semi fw-normal text-black  line-133'>Read More
                                        <img src={LearnMore} alt="icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex justify-content-center  mb-4 mb-lg-0" data-aos="fade-down">
                            <div className='position-relative learning-card cursor-pointer'>
                                <img src={LearningTwo} alt="img-one" className='w-100' />
                                <div className="big-learning-card position-absolute right-4 mt-3 mt-sm-0 ">
                                    <p className='fs-15 ff-maison fw-normal text-uppercase skyish-color line-133 max-334'>multi-channel marketing</p>
                                    <p className='fs-30 text-black ff-maison-light fw-light max-334'>How to Get Your Product into Lowe’s</p>
                                    <p className='fs-15 ff-maison fw-normal  text-black line-133 max-334'>Understanding the process and maximize the opportunities</p>
                                    <button className='learning-btn fs-15 ff-maison-semi fw-normal text-black  line-133'>Read More
                                        <img src={LearnMore} alt="icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 d-flex justify-content-center justify-content-lg-end mb-4 mb-lg-0" data-aos="fade-left">
                            <div className='position-relative learning-card cursor-pointer'>
                                <img src={LearningThree} alt="img-one" className='w-100' />
                                <div className="big-learning-card position-absolute right-4  mt-3 mt-sm-0 ">
                                    <p className='fs-15 ff-maison fw-normal text-uppercase skyish-color line-133 max-334'>multi-channel marketing</p>
                                    <p className='fs-30 text-black ff-maison-light fw-light max-334'>How to Get Your Product into Lowe’s</p>
                                    <p className='fs-15 ff-maison fw-normal  text-black line-133 max-334'>Understanding the process and maximize the opportunities</p>
                                    <button className='learning-btn fs-15 ff-maison-semi fw-normal text-black  line-133'>Read More
                                        <img src={LearnMore} alt="icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={LearningLine} alt="learning-line" className='position-absolute learning-line z-n1 w-100' />
            </section>
        </>
    )
}

export default Learning