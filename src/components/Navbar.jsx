import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import Cover from '../assets/logo_6.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#010f33] text-gray-300'>
    <div>
        <img src={Cover} alt='logo' style={{ width: '65px' }} />
    </div>

    {/* menu */}
    <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
        <li>
            <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
        </li>
        <li>
            <Link to='about' smooth={true} duration={500}>
            About
            </Link>
        </li>
        <li>
            <Link to='pythonprojects' smooth={true} duration={500}>
            Python
            </Link>
        </li>
        <li>
            <Link to='work' smooth={true} duration={500}>
            Front End
            </Link>
        </li>
        <li>
            <Link to='skills' smooth={true} duration={500}>
            Skills
            </Link>
        </li>
        <li>
            <Link to='contact' smooth={true} duration={500}>
            Contact
            </Link>
        </li>
        </ul>
    </div>

    {/* hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {/* creates toggle between hamburger to open menu and X to close menu */}
        {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/* mobile menu */}
    <div>
        {/* toggle the navbar */}
        <ul
        className={
            !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
        >
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='home'
            smooth={true}
            duration={500}
            >
            Home
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='about'
            smooth={true}
            duration={500}
            >
            About
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='pythonprojects'
            smooth={true}
            duration={500}
            >
            Python
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='frontend'
            smooth={true}
            duration={500}
            >
            Front End
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='skills'
            smooth={true}
            duration={500}
            >
            Skills
            </Link>
        </li>
        <li className='py-6 text-4xl'>
            <Link
            onClick={handleClick}
            to='contact'
            smooth={true}
            duration={500}
            >
            Contact
            </Link>
        </li>
        </ul>
</div>

    {/* social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
            className='flex justify-between items-center w-full text-gray-200'
            href='https://www.linkedin.com/in/marki-lyons/'
            rel='noreferrer'
            target='_blank'
            >
            Linkedin <FaLinkedin size={25} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
            className='flex justify-between items-center w-full text-gray-200'
            href='https://github.com/MsMLyons'
            rel='noreferrer'
            target='_blank'
            >
            Github <FaGithub size={25} />
            </a>
        </li>
        {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-200'
                    href="/">
                        Email < HiOutlineMail size={25} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-113px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-200'
                    href="/">
                        Resume < BsFillPersonLinesFill size={25} />
                    </a>
                </li> */}
        </ul>
    </div>
    </div>
    );
}

export default Navbar;