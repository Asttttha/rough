import React from 'react';
import Slider from 'react-slick';
import { ImBullhorn } from "react-icons/im";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide arrows for cleaner mobile view
    };

    return (
        <div className="p-5 inset-x-0 gap-10 h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-3/4 max-w-4xl mb-8 md:mb-0">
                <Slider {...settings}>
                    <div className="relative ">
                        <img
                            src="https://via.placeholder.com/800x400?text=Slide+1"
                            alt="Slide 1"
                            className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
                        <p className="absolute bottom-0 text-center text-white px-4 bg-blue-950/100 py-4 md:py-6 w-full text-sm md:text-base lg:text-lg">
                            Annual Sports Day - Celebrating Excellence in Sports
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/800x400?text=Slide+2"
                            alt="Slide 2"
                            className="w-full h-64 sm:h-80 md:h-96 object-cover"
                        />
                        <p className="absolute bottom-0 text-center text-white px-4 bg-blue-950/100 py-4 md:py-6 w-full text-sm md:text-base lg:text-lg">
                            Science Exhibition - Showcasing Student Innovations
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/800x400?text=Slide+3"
                            alt="Slide 3"
                            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded"
                        />
                        <p className="absolute bottom-0 text-center text-white px-4 bg-blue-950/100 py-4 md:py-6 w-full text-sm md:text-base lg:text-lg">
                            Cultural Fest - Embracing Diversity and Creativity
                        </p>
                    </div>
                </Slider>
            </div>

            <div className="w-full md:w-1/4 flex justify-center items-center overflow-hidden">
                <div className="w-full p-5 bg-white rounded shadow-md">
                    <div className="flex justify-center mb-5 gap-3 items-center">
                        <p className="text-2xl md:text-3xl text-gray-600 font-bold">Notice Board</p>
                        <ImBullhorn className="text-2xl md:text-3xl text-yellow-600" />
                    </div>

                    <div className="flex justify-center gap-3 md:gap-5 flex-col text-black-600/100">
                        <p className="p-4 rounded text-white border-b-2 text-sm md:text-xl bg-green-500 shadow-md">
                            Announcement
                        </p>
                        <p className="p-4 rounded text-white border-b-2 text-sm md:text-xl bg-green-500 shadow-md">
                            Announcement
                        </p>
                        <p className="p-4 rounded text-white border-b-2 text-sm md:text-xl bg-green-500 shadow-md">
                            Announcement
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
