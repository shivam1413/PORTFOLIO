import React from 'react';
import P1 from '../assets/portfolio.png';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { FaBootstrap } from "react-icons/fa";
import Spotify from '../assets/spotify.png';
import Netflix from '../assets/netflix.png'
import Airbnb from '../assets/airbnb.png'
import Simon from '../assets/simongame.png'
import Amazon from '../assets/amazon.png'

function Projects({ ProjectRef }) {
    const cardItems = [
        {
            id: 1,
            img: P1,
            title: "Portfolio Website (Shivam Portfolio)",
            Dec: "This project is a portfolio website created using React for building the UI components and Tailwind CSS for styling.",
            Tech: <>&nbsp;<FaReact /> React, &nbsp;&nbsp;<RiTailwindCssFill /> Tailwind</>,
            view: "https://github.com/shivam1413",
        },
        {
            id: 2,
            img: Amazon,
            title: "Amazon Web UI Clone",
            Dec: "Created a responsive Amazon website UI clone using HTML and CSS, leveraging Flexbox and media queries to ensure compatibility across devices.",
            Tech: <>&nbsp;<FaReact /> HTML, &nbsp;&nbsp;<FaCss3Alt /> CSS</>,
            live: "https://shivam1413.github.io/AMAZONWEB_UI_CLONE/",
            view: "https://github.com/shivam1413/AMAZONWEB_UI_CLONE",
            
        },
        {
            id: 3,
            img: Netflix,
            title: "Netflix Web UI Clone",
            Dec: "This project is a responsive clone of the Netflix Website, developed using Flexbox, Media Queries, and Grid for seamless adaptability across devices.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS</>,
            live: "https://shivam1413.github.io/NETFLIXWEB_UI_CLONE//",
            view: "https://github.com/shivam1413/NETFLIXWEB_UI_CLONE",
            
        },
        {
            id: 4,
            img: Spotify,
            title: "Spotify_Clone",
            Dec: "Created a responsive Amazon website UI clone using HTML and CSS, leveraging Flexbox and media queries to ensure compatibility across devices.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3</>,
            live: "https://shivam1413.github.io/Spotify_WEB_UI_CLONE/",
            view: "https://github.com/shivam1413/Spotify_WEB_UI_CLONE",
            
        },
        {
            id: 5,
            img: Airbnb,
            title: "Airbnb(Wanderlust)",
            Dec: "Full Stack Project Full Functionility",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS&nbsp;&nbsp;<IoLogoJavascript />JavaScript&nbsp;&nbsp;<FaBootstrap /> Bootstrap , -MongoDb, -Node.js -Express.js</>,
            live: "https://shivam86.onrender.com/listings",
            view: "https://github.com/shivam1413/shivam86",
            
            
        },
        {
            id: 6,
            img: Simon,
            title: "Simon Says Game",
            Dec: "The game generates a random sequence of colors. Players must repeat the sequence correctly, with each round adding a new color to the sequence.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3, &nbsp;&nbsp;<IoLogoJavascript />JavaScript</>,
            live:"https://shivam1413.github.io/Simon-Says-Game/",
            view: "https://github.com/shivam1413/Simon-Says-Game",
            
        },
        
    
        // Add more card items if needed
    ];

    return (
        <>
            <div className='text-center mt-20' ref={ProjectRef} style={{ paddingTop: '70px' }}>
                <div className='mb-9'>
                    <div className='text-2xl font-semibold'>Projects</div>
                    <p className='text-md font-medium'>Things I've built so far</p>
                </div>
                <div className='flex flex-wrap justify-center gap-4'>
                    {cardItems.map(({ id, img, title, Dec, Tech , live, view}) => (
                        <motion.div 
                            key={id} 
                            className="w-full max-w-[350px] p-4 mx-auto text-center" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-auto" src={img} alt="" />
                                <div className="flex flex-col justify-between p-5 h-[270px]">
                                    <div>
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                        <p className="mb-3 text-xs md:text-sm text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis">{Dec}</p>
                                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 font-semibold flex justify-center items-center flex-wrap">Tech Stack: {Tech}</p>
                                    </div>
                                    <div className="flex justify-between mt-auto">
                                    <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:py-3 md:px-4">
                                                    Live Link
                                        </a>
                                        
                                        <a href={view} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:py-3 md:px-4">
                                            View Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br/>
            <hr />
        </>
    );
}

export default Projects;