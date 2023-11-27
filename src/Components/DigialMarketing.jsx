import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LetsMoreIcon from '../assets/images/svg/learn-more-icon.svg'
import DigitalLine from '../assets/images/svg/digital-line.svg'
import { DigitalIconFour, DigitalIconOne, DigitalIconThree, DigitalIconTwo } from './Icon'

const DigialMarketing = () => {
    return (
        <>
            <section id='digital-marketing' className='py-4 py-xl-5 position-relative'>
                <Container>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <p className='fs-30 ff-maison-light text-black text-center fw-light'>Problems we solve.</p>
                        <h2 className=' fs-80  ff-sohne fw-bold line-87 text-center text-black max-482 text-center'>Digital Marketing
                            for today’s Business</h2>
                        <p className=' max-641 text-black fs-15 ff-maison fw-normal line-133 text-center'>We help companies scale their strategies across multiple channels to drive more revenue, more quickly, without cutting corners.</p>
                        <Row className='justify-content-evenly w-100 '>
                            <Col lg={6} className='d-flex justify-content-center mb-57'>
                                <div className='digital-box d-flex flex-column flex-lg-row align-items-start cursor-pointer'>
                                    <span>
                                        <DigitalIconOne />
                                    </span>
                                    <div className='d-flex flex-column ps-lg-4'>
                                        <h6 className='fs-30 ff-maison-li fw-light text-black'>My website isn’t getting enough traffic</h6>
                                        <p className='fs-15 ff-maison fw-normal text-black line-133'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                        <ul className='list-disc'>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Boost your presence in search results</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Capture targeted site traffic</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Turn site visitors into customers</li>
                                        </ul>
                                        <div className='digi-btn'>
                                            <button className='digital-btn fs-15 fw-semibold line-133 text-black ff-maison-semi'>Explore SEO Services
                                                <img src={LetsMoreIcon} alt="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className='d-flex justify-content-center mb-57'>
                                <div className='digital-box d-flex flex-column flex-lg-row align-items-start cursor-pointer'>
                                    <span>
                                        <DigitalIconTwo />
                                    </span>
                                    <div className='d-flex flex-column ps-lg-4'>
                                        <h6 className='fs-30 ff-maison-li fw-light text-black'>My CPL from digital ad campaigns is too high</h6>
                                        <p className='fs-15 ff-maison fw-normal text-black line-133'>Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.</p>
                                        <ul className='list-disc'>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Refine ad targeting</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Engage your audience where they browse online</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Maximize paid ad budget</li>
                                        </ul>
                                        <div className='digi-btn'>
                                            <button className='digital-btn fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Explore SEO Services
                                                <img src={LetsMoreIcon} alt="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className='d-flex justify-content-center mb-57'>
                                <div className='digital-box d-flex flex-column flex-lg-row align-items-start cursor-pointer'>
                                    <span>
                                        <DigitalIconThree />
                                    </span>
                                    <div className='d-flex flex-column ps-lg-4'>
                                        <h6 className='fs-30 ff-maison-li fw-light text-black'>My website isn’t generating enough leads</h6>
                                        <p className='fs-15 ff-maison fw-normal text-black line-133'>Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.</p>
                                        <ul className='list-disc'>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Fill up your lead pipeline</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Reach your most valuable audience</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Maximize conversion opportunities</li>
                                        </ul>
                                        <div className="digi-btn">
                                            <button className='digital-btn fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Explore SEO Services
                                                <img src={LetsMoreIcon} alt="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className='d-flex justify-content-center mb-57 '>
                                <div className='digital-box d-flex flex-column flex-lg-row align-items-start cursor-pointer'>
                                    <span>
                                        <DigitalIconFour />
                                    </span>
                                    <div className='d-flex flex-column ps-lg-4'>
                                        <h6 className='fs-30 ff-maison-li fw-light text-black'>My marketing and sales data is disconnected</h6>
                                        <p className='fs-15 ff-maison fw-normal text-black line-133'>Don’t let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.</p>
                                        <ul className='list-disc'>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Unify sales and marketing data</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Prioritize leads with data-backed insights</li>
                                            <li className=' fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Turn opportunities into closed deals</li>
                                        </ul>
                                        <div className="digi-btn">
                                            <button className='digital-btn fs-15 fw-semibold lin-133 text-black ff-maison-semi'>Explore SEO Services
                                                <img src={LetsMoreIcon} alt="icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <img src={DigitalLine} alt="digital-line" className='digital-line position-absolute w-100' />
            </section>
        </>
    )
}

export default DigialMarketing