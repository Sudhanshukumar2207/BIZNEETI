import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isFullscreen, setIsFullscreen] = useState(false);
  // const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleSubmenu = (menuName) => {
  //   setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  // };


  // Handle window resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 991) {
  //       setIsMenuOpen(false);
  //       setActiveSubmenu(null);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // Handle fullscreen change
  // useEffect(() => {
  //   const handleFullscreenChange = () => {
  //     setIsFullscreen(!!document.fullscreenElement);
  //   };

  //   document.addEventListener('fullscreenchange', handleFullscreenChange);
  //   return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  // }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#aboutus' },
    { name: 'Service', href: '#service' },
    { name: 'Our Client', href: '#client' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  // const PlusIcon = ({ isOpen, className = "" }) => (
  //   <div className={`inline-block h-3 w-3 relative ml-1 ${className}`}>
  //     <div className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`} />
  //     <div className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
  //   </div>
  // );

  return (
    <div >
      <header className="w-full fixed top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div className="w-full ">
          <div className="bg-gray-300 flex justify-between items-center py-2.5">
            {/* Logo */}
            <div className="px-4">
              <a href="#" className="text-2xl flex lg:text-3xl uppercase text-pink-600 font-semibold">
                <img className='h-10' src="BIZNEETI-LOGO1.png" alt="loding..." />
                <img className='h-10' src="BIZNEETI-LOGO2.png" alt="loding..." />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block px-4 -mt-5 pr-20 ">.
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {navItems.map(
                (item, index) => (
                  <li
                    key={index}
                    className="relative max-w-fit py-1 -mt-2
                      after:content-[''] after:block after:absolute
                      after:bottom-0 after:left-0 after:h-1 after:w-0
                      after:bg-gradient-to-r after:from-[#2b68e0] after:to-[#e710ea]
                      hover:after:w-full after:transition-all after:duration-300"
                  >
                    <a href={item.href} className="pr-3 md:pr-0 text-black">
                      <b>{item.name}</b>
                    </a>
                  </li>
                )
              )}
            </ul>
            </nav>

            <div className="text-[30px] mr-5 cursor-pointer md:hidden text-black">
              {isMenuOpen ? (
                <></>
              ) : (
                <FaBars onClick={toggleMenu} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Navigation */}
        <nav className={`fixed top-0 w-70 h-full bg-gray-800 z-50 py-4 overflow-y-auto transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'right-0 visible' : '-right-70 invisible'
        }`}>
          <button
            className="flex items-center justify-center w-10 h-10 bg-white ml-4 mb-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="text-black text-xl"><b>X</b></span>
          </button>

        <ul className="flex pl-5 md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {navItems.map(
                (item, index) => (
                  <li onClick={toggleMenu}
                    key={index}
                    className="relative max-w-fit py-1 
                      after:content-[''] after:block after:absolute
                      after:bottom-0 after:left-0 after:h-1 after:w-0
                      after:bg-gradient-to-r after:from-[#2b68e0] after:to-[#e710ea]
                      hover:after:w-full after:transition-all after:duration-300"
                  >
                    <a href={item.href} className="pr-3 md:pr-0 text-white">
                      <b>{item.name}</b>
                    </a>
                  </li>
                )
              )}
            </ul>
        </nav>
      </header>

    </div>
  );
};

export default NavigationMenu;