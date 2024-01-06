import React from 'react';
import Adventure from '../assets/Adventure.jpg';
import Inara from '../assets/Inara.jpg';
import Cafe from '../assets/Cafe.jpg';
import PythonProject1 from '../assets/PythonProject1.png';
import PythonProject2 from '../assets/PythonProject2.png';
import PythonProject3 from '../assets/PythonProject3.png';


const Work = () => {
return (
    <div
    name='work'
    className='w-full md:h-screen bg-gradient-to-b from-[#010f33] to-[#00d4ff] text-[#e6e8ed]'
    >
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        {/* New section for Python Projects */}
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>
            Python Development
        </p>
        <p className='py-8'>Take a look at some of my Python projects:</p>
        </div>
    </div>
    {/* Grid Container for Python Projects */}
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/* Card for Python Project 1 */}
        <div
        style={{ backgroundImage: `url(${PythonProject1})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            {/* Replace 'Python Project 1' with the actual title of your project */}
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Simplified Bank Management
            </span>
            <div className='pt-8 text-center'>
            {/* Replace '#' with the actual URLs for your project */}
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://replit.com/@MarkiLyons/Simplified-Bank-Management'
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
                    href='https://github.com/MsMLyons/CSC6003_Python_Programs/blob/main/Module_8/Assignment_Simplified/lyonsm_module_8_simplified.py'
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
        {/* Card for Python Project 2 */}
        <div
        style={{ backgroundImage: `url(${PythonProject2})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            {/* Replace 'Python Project 2' with the actual title of your project */}
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Lotto Probability
            </span>
            <div className='pt-8 text-center'>
            {/* Replace '#' with the actual URLs for your project */}
            <a href='https://replit.com/@MarkiLyons/Lotto-Probability'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a href='/' rel='noreferrer' target='_blank'>
                    Demo
                </a>
                </button>
            </a>
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://github.com/MsMLyons/CSC6000_Python_Modules/blob/main/Module_7/mod7.py'
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
        {/* Card for Python Project 3 */}
        <div
        style={{ backgroundImage: `url(${PythonProject3})` }}
        className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div'
        >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
            {/* Replace 'Python Project 1' with the actual title of your project */}
            <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
            Comparison of Sorting Algorithms
            </span>
            <div className='pt-8 text-center'>
            {/* Replace '#' with the actual URLs for your project */}
            <a href='/'>
                <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                <a
                    href='https://replit.com/@MarkiLyons/Comparison-of-Sorting-Algorithms'
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
                    href='https://github.com/MsMLyons/CSC6003_Python_Programs/blob/main/Module_7/Assignment/lyonsm_module_7.py'
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

        {/* New section for Web Projects */}
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>
            Web Development
        </p>
        <p className='py-8'>Take a look at some of my work:</p>
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
    </div>
);
}

export default Work;