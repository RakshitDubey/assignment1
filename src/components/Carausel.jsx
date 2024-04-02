import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            p: "“Fantastic service! Great website! The website was very professional. I would highly recommend. After initial payment, everything was completed within a week.”",
            img: "https://static.wixstatic.com/media/0784b1_40ae29cb22e246f9bf461ef503d96dfa~mv2.png/v1/fill/w_844,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2img.png",
            author: 'Isaiah Christopher Thomas'

        },
        {
            p: "“Galaxy is the best. They were super punctual, communicated very well … I recommend if you need some work done these are definitely the guys to do it, the site they made for me is outstanding.”",
            img: "https://static.wixstatic.com/media/0784b1_416d43ea13e94f7b989fd88dcb928b34~mv2.jpg/v1/fill/w_844,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/apexbrandengineers.jpg",
            author: "Rosanna Maria Salcedo"
        }
        ,
        {
            p: "“Galaxy is the best. They were super punctual, communicated very well … I recommend if you need some work done these are definitely the guys to do it, the site they made for me is outstanding.”",
            img: "https://static.wixstatic.com/media/0784b1_91624e102c9d405c851eb43115f58f71~mv2.png/v1/fill/w_844,h_486,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/zay.png",
            author: "Rosanna Maria Salcedo"
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 mt-10">
            <h1 className="text-5xl font-bold mb-4 text-center p-20">Wix Marketplace user reviews</h1>
            <div className="flex items-center justify-center space-x-4 mb-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <FaStar key={index} className='pt-2 text-2xl'/>
                ))}
            </div>
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {data.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={item.img} alt={`${index}`} className="w-full h-auto" />
                            <p className="text-lg mb-4">{item.p}</p>
                            <p className="text-sm text-gray-500">{item.author}</p>
                        </div>
                    ))}
                </div>
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full" onClick={handlePrev}>Prev</button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-full" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Carousel;
