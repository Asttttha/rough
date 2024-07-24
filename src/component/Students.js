import React from 'react'
import { BiMusic } from 'react-icons/bi'
import { SiMusicbrainz } from "react-icons/si";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GiDramaMasks } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { GiRobotAntennas } from "react-icons/gi";
import Slider from 'react-slick';



const students = [
    {
        id: "1",
        icon: <SiMusicbrainz className="text-4xl text-green-600" />,
        name: "Music",
        link: "https://example.com/educational-websites"
    }, {
        id: "2",
        icon: <PiPersonArmsSpreadFill className="text-4xl text-red-600" />,
        name: "Dance",
        link: "https://example.com/educational-websites"
    },
    {
        id: "3",
        icon: <GiDramaMasks className="text-4xl text-blue-600" />,
        name: "Drama",
        link: "https://example.com/educational-websites"
    },
    {
        id: "4",
        icon: <FaPaintBrush className="text-4xl text-violet-600" />,
        name: "Art",
        link: "https://example.com/educational-websites"
    },
    {
        id: "5",
        icon: <FcSportsMode className="text-4xl text-green-600" />,
        name: "Sports",
        link: "https://example.com/educational-websites"
    },
    {
        id: "6",
        icon: <GiRobotAntennas className="text-4xl text-orange-600" />,
        name: "Robotics",
        link: "https://example.com/educational-websites"
    },

]

const clubs = [
    {
        id: "1",
        name: " Debate Club",
        link: "https://example.com/educational-websites"
    }, {
        id: "2",
        name: "Science Club",
        link: "https://example.com/educational-websites"
    },
    {
        id: "3",
        name: "Literary Society",
        link: "https://example.com/educational-websites"
    },
    {
        id: "4",
        name: "Environmental Club",
        link: "https://example.com/educational-websites"
    },
    {
        id: "5",
        name: "Astronomy Club",
        link: "https://example.com/educational-websites"
    },
    {
        id: "6",
        name: "Coding Club",
        link: "https://example.com/educational-websites"
    },

]

const achievements = [
    {
        id: 1,
        name: "John Smith",
        title: "National Level Math Olympiad Winner",
    },
    {
        id: 2,
        name: "Sarah Lee",
        title: "Gold Medalist in State Swimming Championship",
    },
    {
        id: 3,
        name: "Tech Innovators Club",
        title: "Winners of Inter-School Robotics Competition",
    }
];


const studentCouncil = [
    {
        id: 1,
        role: "President",
        name: "Amy Parker",
        grade: 12
    },
    {
        id: 2,
        role: "Vice President",
        name: "Rajiv Mehta",
        grade: 11
    },
    {
        id: 3,
        role: "Secretary",
        name: "Lisa Wong",
        grade: 10
    }
];
const Students = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='p-10'>
            <p className='text-4xl font-bold text-gray-700 text-center mb-10'>Student activities</p>

            <div className='bg-white p-10 flex flex-col w-full justify-center'>
                <p className='text-3xl font-bold text-gray-700 pb-5'>Life at Springdale</p>
                <div className=''>
                    <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>
                        Extracurricular activities
                    </p>
                    <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center p-5 '>
                        {students.map((activity) => (
                            <div key={activity.id} className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 md:w-1/4'>
                                <div className='flex justify-center mb-4'>{activity.icon}</div>
                                <p className="text-xl font-semibold text-center mb-2">{activity.name}</p>
                                <a href={activity.link}
                                    className="block text-center text-blue-500 hover:text-blue-700 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer">Learn more</a>
                            </div>
                        ))}

                    </div>
                </div>
                <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>
                    Clubs and Societies
                </p>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-full justify-center p-5'>
                    {clubs.map((activity) => (
                        <div key={activity.id} className='bg-white shadow-md rounded-lg pb-6 hover:shadow-lg transition-shadow duration-300 md:w-1/4'>
                            <img src='https://via.placeholder.com/400' alt='clubs' className='mb-2 rounded' />
                            <p className="text-xl font-semibold text-center mb-2">{activity.name}</p>
                            <a href={activity.link}
                                className="block text-center text-blue-500 hover:text-blue-700 transition duration-300"
                                target="_blank"
                                rel="noopener noreferrer">Learn more</a>
                        </div>
                    ))}

                </div>
            </div>


            {/* Achievements */}
            <div className='bg-white p-10 flex flex-col w-full justify-center'>
                <p className='text-3xl font-bold text-gray-700 pb-5 border-b-2 border-blue-900 mb-2'>Achievements</p>
                <div className="w-full mt-2 md:w-2/4 md:max-w-4xl md:mx-auto md:p-10">

                    <Slider {...settings}>
                        {achievements.map((achievement) => (
                            <div key={achievement.id}>
                                <img src='https://via.placeholder.com/400' alt='achievements' className=" w-full md:h-96" />
                                <p className='text-white px-4 bg-blue-950/100 py-2 h-24 md:h-auto md:py-4'>{achievement.name}, {achievement.title}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Student councils */}
            <div className='bg-white p-10 flex flex-col w-full justify-center'>
                <p className='text-3xl font-bold text-gray-700 pb-5 border-b-2 border-blue-900 mb-2'>Student Council</p>
                <div className='flex flex-col md:flex-row md:flex-wrap justify-center bg-white md:p-5'>
                    {studentCouncil.map((sc) => (
                        <div key={sc.id} className='md:w-1/5 m-2 bg-blue-950/100 text-white rounded'>
                            <img src='https://via.placeholder.com/400' alt='faculty1' />
                            <div className='h-auto text-white text-center p-2'>
                                <p className='text-center'>{sc.name}</p>
                                <p className='text-center'>{sc.role} | {sc.grade}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Students