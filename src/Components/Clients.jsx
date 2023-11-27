import React from 'react'
import FrameOneLogo from '../assets/images/svg/frame-one-logo.svg'
import FrameTwoLogo from '../assets/images/svg/frame-two-logo.svg'
import FrameThreeLogo from '../assets/images/svg/frame-three-logo.svg'
import LearnMoreIcon from '../assets/images/svg/learn-more-icon.svg'
import ClientsBtmLine from '../assets/images/svg/clients-btm-line.svg'
const Clients = () => {
    return (
        <>
            <section id='clients' className=' overflow-hidden py-4 py-xl-5'>
                <div className="container-fluid px-lg-0">
                    <h3 className='fs-30 ff-maison-light text-black fw-light text-center'>Driving digital revenue for over</h3>
                    <h2 className='text-black fs-80 ff-sohne fw-bold line-87 text-center text-uppercase py-3'> <span className='position-relative'>1,400
                    <img src={ClientsBtmLine} alt="btm-line" className=' w-100 position-absolute client-btm-line start-0 bottom-0' />
                    </span>+ satisfied clients.</h2>
                    <div className=" row justify-content-center justify-content-lg-between  py-xl-5">
                        <div className="col-lg-4 col-sm-6 col-12 d-flex mb-4 mb-lg-0  justify-content-start" data-aos="fade-right">
                            <div className="frame-one frame">
                                <div className="card">
                                    <img src={FrameOneLogo} alt="logo-one" className='frame-logo-one' />
                                    <h5 className='fs-30 ff-maison-light fw-light text-black pt-4 mb-3'>Driving digital revenue <span className="d-block"></span> for over 1,000+ <span className="d-block"></span> satisfied clients.</h5>
                                    <p className='fs-15 ff-maison fw-normal line-133 pb-5 text-black'>Elevate your business with our top-  <span className="d-block"></span> tier services and tech</p>
                                    <button className='d-flex align-items-center border-0 bg-transparent gap-2 py-12 fs-18 line-133 ff-maison fw-semibold'>Learn more
                                        <img src={LearnMoreIcon} alt="icon" />
                                    </button>
                                </div>
                                <div className='d-flex justify-content-evenly pt-4'>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>80%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>2X</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Ad Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>520%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Web Traffic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 d-flex mb-4 mb-lg-0 justify-content-center" data-aos="fade-down">
                            <div className="frame-two frame">
                                <div className="card">
                                    <img src={FrameTwoLogo} alt="logo-one" className='frame-logo-one' />
                                    <h5 className='fs-30 ff-maison-light fw-light text-black pt-4 mb-3'>Driving digital revenue <span className="d-block"></span> for over 1,000+ <span className="d-block"></span> satisfied clients.</h5>
                                    <p className='fs-15 ff-maison fw-normal line-133 pb-5 text-black'>Elevate your business with our top-  <span className="d-block"></span> tier services and tech</p>
                                    <button className='d-flex align-items-center border-0 bg-transparent gap-2 py-12 fs-18 line-133 ff-maison fw-semibold'>Learn more
                                        <img src={LearnMoreIcon} alt="icon" />
                                    </button>
                                </div>
                                <div className='d-flex justify-content-evenly pt-4'>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>80%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>2X</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Ad Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>520%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Web Traffic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 d-flex justify-content-end" data-aos="fade-left">
                            <div className="frame-three frame">
                                <div className="card">
                                    <img src={FrameThreeLogo} alt="logo-one" className='frame-logo-one' />
                                    <h5 className='fs-30 ff-maison-light fw-light text-black pt-4 mb-3'>Driving digital revenue <span className="d-block"></span> for over 1,000+ <span className="d-block"></span> satisfied clients.</h5>
                                    <p className='fs-15 ff-maison fw-normal line-133 pb-5 text-black'>Elevate your business with our top-  <span className="d-block"></span> tier services and tech</p>
                                    <button className='d-flex align-items-center border-0 bg-transparent gap-2 py-12 fs-18 line-133 ff-maison fw-semibold'>Learn more
                                        <img src={LearnMoreIcon} alt="icon" />
                                    </button>
                                </div>
                                <div className='d-flex justify-content-evenly pt-4'>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>80%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>2X</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Ad Leads</p>
                                    </div>
                                    <div>
                                        <p className='fs-50 fw-bold ff-sohne line-88 text-uppercase text-black mb-0'>520%</p>
                                        <p className='fs-16 ff-maison fw-normal  line-150 text-black mb-0'>Web Traffic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients