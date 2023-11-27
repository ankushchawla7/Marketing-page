import React from 'react'
import { Container } from 'react-bootstrap'
import LearnMoreIcon from '../assets/images/svg/lets-arrow.svg'


const HitGoals = () => {
    return (
        <>
            <section id='hit-goal' className='Hit-Goal-bg'>
                <Container className='d-flex justify-content-center'>
                    <div className='d-flex align-items-center gap-37'>
                        <h3 className='text-white fs-40 ff-maison-li mb-0'>Ready to hit your goals?</h3>
                        <button className='d-flex align-items-center border-0 hit-goal-btn fs-15 text-black ff-maison-semi'>
                            Book a Strategy Call
                            <img src={LearnMoreIcon} alt="" />
                        </button>
                    </div>
                </Container>

            </section>

        </>
    )
}

export default HitGoals