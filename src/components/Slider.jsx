import React, { useState } from 'react';
import './Slider.css'; 

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        'https://static.vecteezy.com/system/resources/previews/010/838/129/non_2x/coffee-pattern-with-turkish-beans-and-croissants-on-a-white-background-illustration-in-doodle-style-vector.jpg',
        'https://c8.alamy.com/comp/2EHH4F7/coffee-pattern-background-for-coffeehouse-or-cafe-vector-seamless-design-of-coffee-makers-cups-and-beans-hot-espresso-americano-or-cappuccino-and-2EHH4F7.jpg',
        'https://via.placeholder.com/1600x900?text=Slide+3'
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <div className="slider-container">
            <div className="slide" style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
                <button className="prev-button" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="next-button" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;
