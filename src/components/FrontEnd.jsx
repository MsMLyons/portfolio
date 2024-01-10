import React from 'react';
import Adventure from '../assets/Adventure.jpg';
import Inara from '../assets/Inara.jpg';
import Cafe from '../assets/Cafe.jpg';

const FrontEnd = () => {
    return (
    <div
    name='work'
    className='w-full min-h-screen bg-gradient-to-l from-[#020024]  to-[#00d5ff] text-[#e6e8ed]'
    >
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        {/* Section for Web Projects */}
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>
            Front End Development
        </p>
        <p className='py-8'>Take a look at some of my work:</p>
        </div>
    </div>

    {/* Grid Container - change grid size here, first line of container */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Card */}
        <div
        style={{ backgroundImage: `url(${Inara})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Career Coach
            </span>
            <div className='pt-8 text-center'>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://career-coach-demo.netlify.app'
                    rel='noreferrer'
                    target='_blank'
                >
                    Demo
                </a>
                </button>
            </a>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://github.com/MsMLyons/inara-career-coach'
                    rel='noreferrer'
                    target='_blank'
                >
                    Code
                </a>
                </button>
            </a>
            </div>
        </div>
        </div>

        {/* Card */}
        <div
        style={{ backgroundImage: `url(${Cafe})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Café & Bakery
            </span>
            <div className='pt-8 text-center'>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://cafe-bakery-demo.netlify.app/'
                    rel='noreferrer'
                    target='_blank'
                >
                    Demo
                </a>
                </button>
            </a>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://github.com/MsMLyons/bakery'
                    rel='noreferrer'
                    target='_blank'
                >
                    Code
                </a>
                </button>
            </a>
            </div>
        </div>
        </div>

        {/* Card */}
        <div
        style={{ backgroundImage: `url(${Adventure})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Brazilian Adventure
            </span>
            <div className='pt-8 text-center'>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://your-next-adventure-demo.netlify.app'
                    rel='noreferrer'
                    target='_blank'
                >
                    Demo
                </a>
                </button>
            </a>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://github.com/MsMLyons/your-next-adventure'
                    rel='noreferrer'
                    target='_blank'
                >
                    Code
                </a>
                </button>
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
}

export default FrontEnd;