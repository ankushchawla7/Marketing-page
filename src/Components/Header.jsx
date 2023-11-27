import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeftVector from '../assets/images/png/left-header-vector.png'
import RightVector from '../assets/images/png/right-bottom-header-vector.png'
import { Container } from 'react-bootstrap'
// import SearchIcon from '../assets/images/svg/search-icon.svg'
import LetsArrow from '../assets/images/svg/lets-arrow.svg'
import HeadingZig from '../assets/images/svg/hero_squiggle.svg'
import Video from '../assets/video/hero-video.mp4'
import Close from '../assets/images/svg/close.svg'
import Open from '../assets/images/svg/open.svg'
import Brands from '../assets/images/png/made-brands.png'
import HeaderBtmLine from '../assets/images/svg/header-btm-line.svg'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [])
    const [show, setShow] = useState(false)
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    }
    else {
        document.body.classList.remove("overflow_hidden")
    }
    const movement = () => {
        return (
            setShow(false)
        )
    }
    return (
        <>
            <header className='min-vh-xl-100 header-bg position-relative d-flex flex-column z-1 overflow-hidden'>
                <img src={LeftVector} alt="vector-img" className='left-vector h-60 w-25' />
                <img src={RightVector} alt="vector-img" className='right-vector h-25 w-30' />
                <nav className='d-flex justify-content-end'>
                    <ul className={`${show ? "show" : "hide"} nav-ul  d-flex align-items-center ps-0 mb-0 list-unstyled`}>
                        <li className=' nav-link-padding d-flex align-items-center text-black ff-maison-semi fs-15 line-106'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    How We Help
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#feature" onClick={movement}>Feature</Dropdown.Item>
                                    <Dropdown.Item href="#clients" onClick={movement}>Clients</Dropdown.Item>
                                    <Dropdown.Item href="#digital-marketing" onClick={movement}>Digital-Marketting</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='nav-link-padding d-flex align-items-center text-black  ff-maison-semi fs-15 line-106'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Who We Help
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#growth-partner" onClick={movement}>Growth-Partner</Dropdown.Item>
                                    <Dropdown.Item href="#actual-result" onClick={movement}>Actual-growth</Dropdown.Item>
                                    <Dropdown.Item href="#start-earn" onClick={movement}>Start-Earning</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className=' nav-link-padding d-flex align-items-center text-black ff-maison-semi fs-15 line-106'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Why Venveo
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#learning" onClick={movement}>Learning</Dropdown.Item>
                                    <Dropdown.Item href="#hit-goal" onClick={movement}>Hit-Goal</Dropdown.Item>
                                    <Dropdown.Item href="#digital-marketing" onClick={movement}>Digital-Marketing</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className=' nav-link-padding'>
                            <a href="#id" className='text-black ff-maison-semi fs-15 line-106 underline'>Resources
                            </a>
                        </li>
                        <li className='search-icon'>
                            <form role="search" method="get" class="search-form" action="">
                                <label>
                                    <input type="text" class="search-field" placeholder="Search …" />
                                </label>
                                <input type="text" class="search-submit" />
                            </form>
                        </li>
                        <li>
                            <button className='bg-greenish nav-btn ff-maison fs-15 line-106 fw-semibold'>Let’s Talk
                                <img src={LetsArrow} alt="arrow-icon" />
                            </button>
                        </li>
                    </ul>
                    <div className=' position-relative z-3 d-lg_none' onClick={() => { setShow(!show) }}>{show ? <img src={Close} alt='close' /> : <img src={Open} alt='open' />}</div>
                </nav>
                <section className="hero d-flex flex-grow-1">
                    <Container>
                        <h1 className='text-white fs-120 ff-sohne text-uppercase line-86 mb-4 text-center pt-79'>Make marketing
                            <span className='d-lg-block'></span> a <span className='position-relative'>growth
                                <img src={HeadingZig} alt="" className='position-absolute header-zig-line' />
                            </span>machine</h1>
                        <p className='fs-24 text-white ff-maison-light text-center fw-light'>We focus on results. Not just chatter. Elevate your business  <span className='d-lg-block'></span> with our top-tier services and tech. Get a proposal now.</p>
                        <div className='d-flex justify-content-center'>
                            <div className='hero-input d-flex align-items-center justify-content-between'>
                                <input type="text" placeholder='Enter Your Website' />
                                <button className='mb-0 analyse-padding analyse-btn bg-transparent border-0 text-white fs-15 ff-maison line-133'>Analyze </button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center pt-5 mt-4'>
                            <div className='position-relative d-flex justify-content-center video-parent'>
                                <video className='video-hero' autoPlay controls loop muted src={Video} frameborder="0">
                                </video>
                                <img src={Brands} alt="" className='position-absolute brand' />
                            </div>
                        </div>
                    </Container>
                </section>
                <img src={HeaderBtmLine} alt="btm-line" className='position-absolute w-100 header-btm-line' />
            </header >
        </>
    )
}

export default Header