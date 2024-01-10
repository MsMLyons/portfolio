import React from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const PythonProjects = () => {
    return (
      <div
        name='pythonprojects'
        className='w-full md:h-screen bg-gradient-to-b from-[#010f33] to-[#00d4ff] text-[#e6e8ed]'
      >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
          {/* Section for Python Projects */}
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
            style={{ backgroundImage: `url(${p1})` }}
            className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:h-[250px]'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                Simplified Bank Management
              </span>
              <div className='pt-8 text-center'>
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
            style={{ backgroundImage: `url(${p2})` }}
            className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:h-[250px]'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                Lotto Probability
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-2 m-2 bg-[#0a192f] text-[#00FFFF] border-2 border-[#00FFFF] font-bold text-lg'>
                    <a
                      href='https://replit.com/@MarkiLyons/Lotto-Probability'
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
            style={{ backgroundImage: `url(${p3})` }}
            className='shadow-lg shadow-[#020024] group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:h-[250px]'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-[#00FFFF] text-2xl font-bold tracking-tight'>
                Comparison of Sorting Algorithms
              </span>
              <div className='pt-8 text-center'>
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
        </div>
      </div>
    );
}

export default PythonProjects;