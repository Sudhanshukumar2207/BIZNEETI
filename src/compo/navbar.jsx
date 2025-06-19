import React, { useState, useEffect } from 'react';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleSubmenu = (menuName) => {
  //   setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  // };


  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const PlusIcon = ({ isOpen, className = "" }) => (
    <div className={`inline-block h-3 w-3 relative ml-1 ${className}`}>
      <div className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`} />
      <div className={`absolute left-1/2 top-1/2 w-full h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
    </div>
  );

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
            <nav className="hidden lg:block px-4 pr-20">
              <ul className="flex space-x-10">
                <li><a href="#home" className="block py-3 text-black font-semibold hover:text-pink-600  transition-colors duration-300">Home</a></li>
                <li><a href="#aboutus" className="block py-3 text-black font-semibold hover:text-pink-600 transition-colors duration-300">About Us</a></li>
                <li className="relative group">
                  <a href="#service" className="flex items-center py-3 text-black font-semibold hover:text-pink-600 transition-colors duration-300">
                    Service
                    {/* <PlusIcon isOpen={false} className="group-hover:text-pink-600" /> */}
                  </a>
                  {/* <ul className="absolute left-0 top-full w-56 bg-white shadow-lg border-t-2 border-pink-600 py-2.5 opacity-0 invisible transform translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <li><a href="#" className="block px-5 py-2.5 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Business Solution</a></li>
                    <li><a href="#" className="block px-5 py-2.5 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Digital Marketing</a></li>
                    <li><a href="#" className="block px-5 py-2.5 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Offline Marketting</a></li>
                    <li><a href="#" className="block px-5 py-2.5 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Hiring Sels Team</a></li>
                  </ul> */}
                </li>
                <li><a href="#client" className="block py-3 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Our Client</a></li>
                <li><a href="#team" className="block py-3 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Our Team</a></li>
                <li><a href="#contact" className="block py-3 text-black font-semibold hover:text-pink-600 transition-colors duration-300">Contact</a></li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-8 mr-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 bg-black relative">
                <span className="absolute left-0 w-full h-full bg-black -top-1.5"></span>
                <span className="absolute left-0 w-full h-full bg-black top-1.5"></span>
              </span>
            </button>
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

          <ul>
            <li><a href="#home" onClick={toggleMenu} className="px-4 flex py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Home</a></li>
            <li><a href="#aboutus" onClick={toggleMenu} className="px-4 flex py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">About Us</a></li>
            <li>
              {/* <button
                className="w-full flex justify-between items-center cursor-pointer px-4 py-3 text-white border-b border-gray-600 text-left hover:text-pink-600 transition-colors duration-300"
                onClick={() => toggleSubmenu('pages')}
              > */}
              <a href="#service" onClick={toggleMenu} className="px-4 flex py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Service</a>
                
                {/* <PlusIcon isOpen={activeSubmenu === 'pages'} />
              </button> */}
              {/* <ul className={`bg-transparent overflow-hidden transition-all duration-500 ${
                activeSubmenu === 'pages' ? 'max-h-96' : 'max-h-0'
              }`}>
                <li><a href="#" className="block px-11 py-3 text-black bg-gray-300 border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Business Solution</a></li>
                <li><a href="#" className="block px-11 py-3 text-black bg-gray-300  border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Digital Marketing</a></li>
                <li><a href="#" className="block px-11 py-3 text-black bg-gray-300 border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Offline Marketting</a></li>
                <li><a href="#" className="block px-11 py-3 text-black bg-gray-300 border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Hiring Sels Team</a></li>
              </ul> */}
            </li>
            <li><a href="#client" onClick={toggleMenu} className="flex px-4 py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Our Client</a></li>
            <li><a href="#team" onClick={toggleMenu} className="flex px-4 py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Our Team</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="flex px-4 py-3 text-white border-b border-gray-600 hover:text-pink-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

    </div>
  );
};

export default NavigationMenu;