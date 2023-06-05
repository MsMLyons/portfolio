import React from 'react'

import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
        <div
            name='skills'
            className='w-full h-screen bg-gradient-to-b from-[#00d4ff] to-[#010f33] text-[#e6e8ed]'
        >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>
                Skills
                </p>
                <p className='py-8'>
                These are the technologies used to build this portfolio:
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4'>
                <div className=''>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={HTML}
                    alt='HTML icon'
                />
                <p className='text-[#e6e8ed]  my-4'>HTML</p>
                </div>
                <div>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={CSS}
                    alt='CSS icon'
                />
                <p className='text-[#e6e8ed]  my-4'>CSS</p>
                </div>
                <div>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={JavaScript}
                    alt='JavaScript icon'
                />
                <p className='text-[#e6e8ed] my-4'>JavaScript</p>
                </div>
                <div>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={ReactImg}
                    alt='React icon'
                />
                <p className='text-[#e6e8ed]  my-4'>React</p>
                </div>
                <div>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={Node}
                    alt='Node icon'
                />
                <p className='text-[#e6e8ed]  my-4'>Node</p>
                </div>
                <div>
                <img
                    className='w-20 mx-auto shadow-lg shadow-[#020024] hover:scale-110 duration-500'
                    src={Mongo}
                    alt='CSS icon'
                />
                <p className='text-[#e6e8ed]  my-4'>Mongo</p>
                </div>
            </div>

            <div className='pb-8'>
                <p className='py-8'>
                Interested in learning more about what I can do for you? Contact
                me on{' '}
                <a href='https://www.linkedin.com/in/marki-lyons/' rel='noreferrer' target='_blank'>
                    LinkedIn
                </a>
                , or fill out the form below.
                </p>
            </div>
            </div>
        </div>
    );
}

export default Skills;