import React, { useState, useEffect } from 'react';

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
            setIsVisible(true);
            } else {
            setIsVisible(false);
            }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };


    return(
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <img src='./img/topbutton-icon.svg' alt='Top-button'></img>
            </button>
            )
    )
}

export default TopButton;
