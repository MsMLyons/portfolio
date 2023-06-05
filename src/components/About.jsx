import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#010f33] text-[#bec2cd]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>
                About
                </p>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full gap-8 px-8'>
                <div className='sm:text-center'>
                <p>
                    Hi. I'm Marki. Nice to meet you. I'm an experienced educator who
                    loves web development.
                </p>
                <br></br>
                <p>
                    I enjoy collaborating with small businesses, entrepreneurs,
                    non-profits, and other organizations to build and maintain their
                    web presence.
                </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid gap-8 px-8'>
                <div className='sm:text-center'>
                <p>
                    I find that my background as an educator offers a holistic and
                    inquisitive viewpoint when planning a new project.
                </p>
                <br></br>
                <p>
                    In my free time I spend time with my family and volunteer as a
                    teaching assistant with{' '}
                    <a href='http://girldevelopit.com' rel='noreferrer' target='_blank'>Girl Develop It</a>.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default About;