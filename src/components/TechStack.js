import React from 'react';
import Group9 from '../assets/Group9.png'
import Group10 from '../assets/Group10.png'
import Group11 from '../assets/Group11.png'
import Group12 from '../assets/Group12.png'
import Group14 from '../assets/Group14.png'
import boot from '../assets/logos_bootstrap.png'
// import vec1 from '../assets/Vector.png'
import vec2 from '../assets/Vector1.png'
import vec3 from '../assets/Vector2.png'
// import post from '../assets/postman-icon.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Express from '../assets/express.png'

import { motion } from 'framer-motion';

function TechStack({ TechRef }) {
    const cardItems = [
        {
            id: 1,
            logo: Group9,
            name: "group9",
        },
        {
            id: 2,
            logo: Group10,
            name: "group10",
        },
        {
            id: 3,
            logo: Group11,
            name: "group11",
        },
        {
            id: 4,
            logo: Group12,
            name: "group12",
        },
        {
            id: 5,
            logo: Group14,
            name: "group14",
        },
        {
            id: 6,
            logo: boot,
            name: "boot",
        },
        // {
        //     id: 7,
        //     logo: vec1,
        //     name: "vec1",
        // },
        {
            id: 8,
            logo: vec2,
            name: "vec2",
        },
        {
            id: 9,
            logo: vec3,
            name: "vec3",
        },
        // {
        //     id: 10,
        //     logo: post,
        //     name: "postman",
        // },
        {
            id: 11,
            logo: Mongo,
            name: "mongo",
        },
        {
            id: 12,
            logo: Node,
            name: "node",
        },
        {
            id: 13,
            logo: Express,
            name: "express",
        },
    ];

    return (
        <>
            <div className='text-center mt-20' ref={TechRef} style={{ paddingTop: '100px' }}>
                <div className='mb-9'>
                    <div className='text-2xl font-semibold'>My Tech Stack</div>
                    <p className='text-md font-medium'>Technologies I&#39;ve been working with recently</p>
                </div>
                <br/>
                <div className='grid grid-cols-3 md:grid-cols-5 gap-9 my-3 mt-9'>
                    {
                        cardItems.map(({ id, logo, name }) => (
                            <motion.div 
                                key={id} 
                                whileHover={{ scale: 1.2 }} 
                                whileTap={{ scale: 0.9 }} 
                                transition={{ type: "spring", stiffness: 300 }}
                                className='flex justify-center'
                            >
                                <img src={logo} alt={name} className='w-10 h-10 md:w-15 md:h-15 mx-auto' />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
        </>
    );
}

export default TechStack;