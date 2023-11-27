import React from 'react'
import { Container } from 'react-bootstrap'
import EarningCurve from '../assets/images/svg/Earning-curve.svg'

const StartEarning = () => {
    return (
        <> 
            <section id='start-earn' className='earning-bg py-4 py-xl-5'>
                <Container className=' py-4 d-flex flex-column align-items-start'>
                    <p className='mb-0 fs-15 ff-space'>Get Your Custom Marketing Plan</p>
                    <div className="d-flex align-items-center gap-4 flex-column flex-lg-row gap-lg-5 position-relative">
                        <p className='fs-40 ff-maison-li text-black mb-0 me-xl-5 pe-xl-4'>Start earning more money now</p>
                        <div className='earning-input '>
                            <input type="text" placeholder='Enter Your Website' className='fs-40 ff-maison-li earn-input' />
                            <button className='submit-btn' value="submit"> submit</button>
                        </div>
                        <img src={EarningCurve} alt="Earning-curve" className='position-absolute Earning-curve d-none d-xl-block' />
                    </div>
                </Container>

            </section>
        </>
    )
}

export default StartEarning