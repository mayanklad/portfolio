import './navbar.css';
import React, { useState, useEffect }  from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
// import { MoonIcon } from '@heroicons/react/24/outline'
import resume from 'assets/documents/resume/dummy.pdf';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isNavbarOpen, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };

  useEffect(() => {
    const scrollElement = document.getElementsByClassName('App')[0];

    const scrollEventListner = () => {
      console.log(scrollElement.scrollTop);
      const navbarContainer = document.getElementsByClassName('navbar-container')[0];
      if (scrollElement.scrollTop > navbarContainer.clientHeight) {
        setScrolling(true);
      }
      else {
        setScrolling(false);
      }
    };

    scrollElement.addEventListener('scroll', scrollEventListner);
  });

  const hireOnClick = () => {
    const link = document.createElement('a');
    link.href = '#contact';
    link.click();
    link.remove();
  };

  const resumeOnClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume - Mayank Ashokkumar Lad.pdf';
    link.click();
    link.remove();
  };

  return (
    <header className={`navbar-container absolute flex flex-row w-full h-[60px] bg-white justify-between items-center [transition:opacity_700ms,visibility_700ms] ${scrolling | isNavbarOpen ? 'opacity-100 z-10 visible' : 'opacity-0 collapse'}`}>
      <span className='mx-5'>Logo</span>
      <nav className={`menu-container absolute top-[60px] w-full bg-white border-t border-solid [transition:opacity_700ms,visibility_700ms] ${isNavbarOpen ? 'opacity-100 z-10 visible' : 'opacity-0 collapse'}`}>
        <ul className='menu flex flex-col justify-evenly'>
          <li className='menu-item'><a href="#home"><b>Home</b></a></li>
          <li className='menu-item'><a href="#about"><b>About</b></a></li>
          <li className='menu-item'><a href="#projects"><b>Projects</b></a></li>
          <li className='menu-item'><a href="#contact"><b>Contact</b></a></li>
        </ul>
      </nav>
      <div className='buttons-container flex flex-row items-center mx-5'>
        <button
          type='button'
          onClick={hireOnClick}
          className='hire-button bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Hire me
        </button>
        <button
          type='button'
          onClick={resumeOnClick}
          className='resume-button ml-2.5'
        >
          Resume
        </button>
        {/* <button type='button' className='theme-button ml-2.5'>
          <MoonIcon className='w-6 text-black' />
        </button> */}
        <button type='button' className='menu-button ml-2.5' onClick={toggleNavbar}>
          <Bars3Icon className='w-6 text-black' />
        </button>
      </div>
    </header>
  );
}

export default Navbar;