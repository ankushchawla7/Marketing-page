import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Cross, Facebook, Instagram, Linkdin, Youtube } from './Icon'

const Footer = () => {
    return (
        <>
            <footer className='footer-bg'>
                <Container className=' py-4 py-xl-5'>
                    <Row className='justify-content-between py-4 py-xl-5'>
                        <Col lg={2} md={4} className=' col-6 text-mywra order-2 mb-4 order-lg-0'>
                            <ul className='list-unstyled text-white'>
                                <li className='text-uppercase fs-12'>how we help</li>
                                <li><a href="#id" className='text-white text-capitalize fs-15 f-link-underline ff-maison-light line-200'>Drive More Awareness</a></li>
                                <li><a href="#id" className='text-white text-capitalize fs-15 f-link-underline ff-maison-light line-200'>Get more Customers</a></li>
                                <li><a href="#id" className='text-white text-capitalize fs-15 f-link-underline ff-maison-light line-200'>Build Your Brand</a></li>
                                <li><a href="#id" className='text-white text-capitalize fs-15 f-link-underline ff-maison-light line-200'>Improve your reputation </a></li>
                                <li><a href="#id" className='text-white text-capitalize fs-15 f-link-underline ff-maison-light line-200'>Track Results</a></li>

                            </ul>
                        </Col>
                        <Col lg={2} md={3} className=' col-6 text-mywra order-3 mb-4 order-lg-0'>
                            <ul className='list-unstyled text-white'>
                                <li className='text-white fs-12 text-uppercase'>who we help</li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Digital Advertising</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Search Engine Ranking</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Content Marketing</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Programic Advertising</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Email Marketing</a></li>

                            </ul>
                        </Col>
                        <Col lg={2} md={3} className=' col-6 text-mywra order-4 order-lg-0'>
                            <ul className='list-unstyled text-white'>
                                <li className='text-white fs-12 text-uppercase'>why venveo</li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>About Us</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Careers</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Growth Studies</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Testimonials</a></li>
                            </ul>
                        </Col>
                        <Col lg={1} md={2} className=' col-6 text-mywra order-5 order-lg-0'>
                            <ul className='list-unstyled text-white'>
                                <li className='text-white fs-12 text-uppercase'>resources</li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Articles</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'> News</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Webinars </a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>eBooks</a></li>
                                <li><a href="#id" className='text-white f-link-underline fs-15'>Podcast</a></li>

                            </ul>
                        </Col>
                        <Col lg={5} className=' col-12 d-flex flex-column align-items-lg-end order-1 mb-4 order-lg-0'>
                            <p className='fs-30 text-white ff-maison-light fw-light'>Get weekly data — and insights.</p>
                            <div className='footer-input d-flex align-items-center justify-content-between w-100'>
                                <input type="text" placeholder='Enter Your Website' />
                                <button className='mb-0 text-white started-btn fs-15 ff-maison line-133'>Get Started </button>
                            </div>

                        </Col>
                    </Row>
                    <Row className=' py-4 py-xl-5'>
                        <Col lg={4} md={3} className='mb-4'>
                            <p className='text-white fs-13 ff-maison-li'>Venveo is an award-winning digital marketing solutions provider. Since 2003.
                                ©2023 Venveo
                            </p>
                        </Col>
                        <Col lg={2} md={3}className='col-6 mb-4'>
                            <ul className='list-unstyled text-white'>
                                <li className='fs-12'>Visit</li>
                                <li className='fs-13'>100 N Main Street</li>
                                <li className='fs-13'>#201 </li>
                                <li className='fs-13'>Blacksburg, VA 24060</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={2} className='col-6 mb-4'>
                            <ul className='list-unstyled text-white'>
                                <li className='text-uppercase fs-12'>contact</li>
                                <li className='contact-mail'><a href="#id" className='text-white fs-13'>info@venveo.com </a></li>
                                <li className='phone-li'><a href="#id" className='text-white fs-13'>1 · 800 · 123 · 4567</a></li>
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <div className='d-flex align-items-center gap-32'>
                                <p className='text-white fs-13'>All Rights Reserved</p>
                                <p className='text-white fs-13'>Privacy Policy</p>
                            </div>
                            <div className='d-flex gap-32 align-items-center'>
                                <a href="https://www.facebook.com/" target='blank'><Facebook /></a>
                                <a href="https://www.instagram.com/" target='blank'> <Instagram /></a>
                                <a href="https://www.twitter.com/" target='blank'> <Cross /></a>
                                <a href="https://in.linkedin.com/" target='blank'> <Linkdin /></a>
                                <a href="https://www.youtube.com/" target='blank'> <Youtube /></a>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </footer>
        </>
    )
}

export default Footer