import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

const Home = () => {   

  return (
    <div
      name='home'
      className='w-full h-screen bg-gradient-to-r from-[#020024]  to-[#00d5ff]'
    >
      {/* name property set to help with smooth scroll */}

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#00FFFF] py-1'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#e2e9fb] py-3'>
          Marki Lyons
        </h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#e2e9fb] py-2'>
          I'm a software developer
        </h2>
        <p className='text-[#bec2cd] py-1 max-w-[700px]'>
          With experience in full-stack web applications.
        </p>
        <div>
          <ScrollLink
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            offset={-90} // Adjust the offset based on your layout
            className='inline-block text-[#00FFFF] group border-2 border-[#00FFFF] rounded-xl px-6 py-3 my-4 hover:bg-[#0a192f]'
          >
            Learn More ↓
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Home;