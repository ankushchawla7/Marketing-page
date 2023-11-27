import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabOne from '../assets/video/tab-one.mp4'
import TabTwo from '../assets/video/tab-two.mp4'
import TabThree from '../assets/video/tab-three.mp4'
import YellowCard from '../assets/images/png/yellow-card.png'
import SolarOne from '../assets/images/png/solar-card-one.webp'
import SolarTwo from '../assets/images/png/solar-card-two.webp'
import SolarThree from '../assets/images/png/solar-card-three.webp'
import SolarFour from '../assets/images/png/solar-card-four.webp'
import TabOnec1 from '../assets/images/png/Home-Depot-Logo.png'
import TabOnec2 from '../assets/images/png/tab-one-c2.png'
import TabOnec3 from '../assets/images/png/tab-one-c3.png'
import TabOnec4 from '../assets/images/png/tab-one-c4.png'
import TabOnec5 from '../assets/images/png/tab-one-c5.png'
import TabOneCard from '../assets/images/png/tab-one-card-img.png'
import { Hotspot, ThirdTab } from './Icon';
import LearnMore from '../assets/images/svg/lets-arrow.svg'
import ThirdCard from '../assets/images/png/tab-three-card.png'
import GrowthBtmLine from '../assets/images/svg/growth-btm-line.svg'

const GrowthPartner = () => {

    return (
        <>
            <section id='growth-partner' className='growth-partner overflow-hidden position-relative py-4 py-xl-5'>
                <Container>
                    <h2 className='fs-80 ff-sohne line-87 text-black fw-bold text-uppercase text-center mb-1'>The growth partner </h2>
                    <p className='fs-30 ff-maison-light text-center text-black'>you’ve been looking for.</p>
                    <p className='fs-15 text-black line-133 ff-maison text-center'>Businesses trust Venveo to power grow.</p>
                    <div className="tabs-section position-relative z-1">
                        <Tabs
                            defaultActiveKey="Industry Expertise "
                            id="uncontrolled-tab-example"
                            className="mb-3 d-flex justify-content-center">
                            <Tab eventKey="Industry Expertise" title="Industry Expertise" >
                                <div className='position-relative w-100'>
                                    <video src={TabOne} autoPlay muted loop className=' position-absolute h-100 object-fit-cover w-100 tab-video z-n1 '></video>
                                    <div className="tab-card h-100">
                                        <Row className='px-lg-5 tab-row h-100 justify-content-around'>
                                            <div className='col-lg-4 col-sm-6 mb-4 mb-lg-0 text-center text-sm-start'>
                                                <div>
                                                    <h2 className='fs-80  text-white text-uppercase ff-sohne fw-bold line-87'>the smartest minds in the
                                                        industry</h2>
                                                    <p className='fs-30 ff-maison-light text-white line-133 pb-4 mb-2'>Answer our questions and listen to our answers.</p>
                                                    <p className='fs-15 ff-maison text-white pb-5 mb-5'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                                                </div>
                                                <div className='d-flex justify-content-center justify-content-sm-start'>
                                                    <button className='tab-one-btn d-flex align-items-center fs-15 ff-maison-li gap-2'>
                                                        <Hotspot />
                                                        Subscribe to Podcast ▼
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='col-lg-2 col-sm-6 mb-4 mb-lg-0 d-flex flex-column justify-content-between gap-3 gap-lg-0 align-items-center'>
                                                <div className="tab-card-line cursor-pointer">
                                                    <img src={TabOnec1} alt="icon-one" className='tab-one-c1' />
                                                </div>
                                                <div className="tab-card-line cursor-pointer">
                                                    <img src={TabOnec2} alt="icon-two" className='tab-one-c2' />
                                                </div>
                                                <div className="tab-card-line-2 cursor-pointer">
                                                    <img src={TabOnec3} alt="icon-three" className='tab-one-c3' />
                                                </div>
                                                <div className="tab-card-line-4 cursor-pointer">
                                                    <img src={TabOnec4} alt="icon-four" className='tab-one-c4' />
                                                </div>
                                                <div className="tab-card-line-4 cursor-pointer">
                                                    <img src={TabOnec5} alt="icon-five" className='tab-one-c5' />
                                                </div>
                                            </div>
                                            <div className='col-lg-4 col-sm-6'>
                                                <img src={TabOneCard} alt="card-img" className='w-100 h-100' />
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="ROI Focused" title="ROI Focused">
                                <div className='position-relative bg-dange overflow-hidden'>
                                    <video src={TabTwo} autoPlay muted loop className='w-100 h-100 position-absolute object-fit-cover z-n1'></video>
                                    <div className="d-flex flex-column px-5 pt-6">
                                        <h2 className='text-white fs-80 ff-sohne fw-bold line-87 mb-0 text-uppercase'>proven results</h2>
                                        <p className='fs-30 ff-maison-li text-white'>Not hopes and prayers.</p>
                                    </div>
                                    <div className='pt-189 pb-5'>
                                        <img src={YellowCard} alt="yellow-card" className=' yellow-card h-100' />
                                    </div>
                                    <img src={SolarOne} alt="yellow-card" className='solar-card-two green-card ' />
                                    <img src={SolarTwo} alt="yellow-card" className=' solar-card-three green-card' />
                                    <img src={SolarThree} alt="yellow-card" className=' solar-card-four green-card' />
                                    <img src={SolarFour} alt="yellow-card" className=' solar-card-five green-card' />

                                </div>
                            </Tab>
                            <Tab eventKey="Proprietary Technology" title="Proprietary Technology">
                                <div className='position-relative '>
                                    <video src={TabThree} autoPlay muted loop className=' position-absolute h-100 w-100 object-fit-cover  tab-video z-n1'></video>
                                    <div className='d-flex align-items-center w-100 third-tab h-100'>
                                        <Row className='justify-content-around align-items-center px-5 py-5 px-lg-0 py-lg-0 h-100'>
                                            <div className='col-lg-4 mb-4 mb-lg-0'>
                                                <div className='d-flex flex-column pb-96'>
                                                    <h2 className='fs-80 ff-sohne text-uppercase text-white  '>Project radar</h2>
                                                    <p><ThirdTab /></p>
                                                </div>
                                                <p className=' fs-30 text-white ff-maison-li'>Lorem ipsum what this
                                                    product actually does.</p>
                                                <p className='fs-15 text-white ff-maison line-133'>This is placeholder but can add more the business of building, some epic fails (and how to avoid them) and everything building science.</p>
                                                <button className='call-btn tab-one-btn text-black fs-15 ff-maison-li'>
                                                    Call to Action Somewhere
                                                    <img src={LearnMore} alt="arrow-icon" />
                                                </button>
                                            </div>
                                            <div className="col-lg-4">
                                                <img src={ThirdCard} alt="" className=' w-100' />
                                            </div>
                                        </Row>
                                    </div>
                                </div>


                            </Tab>
                        </Tabs>
                    </div>
                </Container>
                <img src={GrowthBtmLine} alt="btm-line" className='position-absolute bottom-0 z-n1 left-0 w-100 growth-line' />
            </section>
        </>
    )
}

export default GrowthPartner