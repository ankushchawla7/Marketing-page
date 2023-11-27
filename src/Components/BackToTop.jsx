import React, { useState, useEffect } from "react";
import BackTop from '../assets/images/svg/backtotop-arrow.svg'

const BackToTop = () => {
        const [showScroll, setShowScroll] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", checkScrollTop);
            return function cleanup() {
                window.removeEventListener("scroll", checkScrollTop);
            };
        });

        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 100) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 100) {
                setShowScroll(false);
            }
        };

        const scrollTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        return (
            <>
                <section>
                    <div className='back-to-top'>
                        <img src={BackTop} alt="back-top-arrow" className='scrollTop' onClick={scrollTop}
                            style={{ height: 40, display: showScroll ? "flex" : "none" }} />
                    </div>
                </section>

            </>
        )
    }

 export default BackToTop;