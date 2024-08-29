import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollTop.css"

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${isVisible?"scroll-top-to-bottom-animation":"scroll-bottom-to-top-animation"} right-4 z-20`}>
            
                <button
                    onClick={scrollToTop}
                    className="bg-red-600 p-3 text-white  rounded-b-full rounded-l-full shadow-lg "
                >
                    <FaArrowUp className='font-extrabold'/>
                </button>
            
        </div>
    );
}

export default ScrollToTop;
