import { useState, useEffect } from 'react';

export default function InteriorSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/id/1011/1200/800",
      title: "we help you make modern interior",
      description: "we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer."
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1026/1200/800",
      title: "we help you make modern interior",
      description: "we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer."
    },
    {
      id: 3,
      image: "https://picsum.photos/id/201/1200/800",
      title: "we help you make modern interior",
      description: "we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer."
    },
    {
      id: 4,
      image: "https://picsum.photos/id/167/1200/800",
      title: "we help you make modern interior",
      description: "we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer."
    }
  ];

  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoplay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const ArrowIcon = ({ className = "" }) => (
    <svg className={`w-7 h-7 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
        <circle className="transition-all duration-300" cx="16" cy="16" r="15.12" strokeDasharray="95" strokeDashoffset="95"></circle>
        <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
      </g>
    </svg>
  );

  const ScrollIcon = () => (
    <div className="w-[70px] h-[70px] bg-white/80 backdrop-blur-lg rotate-[-90deg] cursor-pointer transition-all duration-500 hover:bg-white/90 flex items-center justify-center overflow-hidden relative group">
      <div className="w-4 h-4 border-t-2 border-l-2 border-[#2b2d42] rotate-[-135deg] relative">
        <div className="absolute w-0.5 h-6 bg-[#2b2d42] rotate-[-45deg] translate-x-2 translate-y-0.5"></div>
      </div>
      <div className="absolute inset-0 bg-[#ff215a] translate-y-[-100%] group-hover:translate-y-full transition-transform duration-500 ease-in-out"></div>
    </div>
  );

  const PaginationBullet = ({ index, isActive }) => (
    <button
      onClick={() => goToSlide(index)}
      className="w-7 h-7 mx-1 my-1.5 opacity-80 hover:opacity-100 transition-opacity"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" className="rotate-[-90deg]">
        <circle 
          className={`transition-all duration-300 ${isActive ? 'stroke-[#ff215a]' : 'stroke-[#2b2d42]'}`}
          cx="14" 
          cy="14" 
          r="10" 
          fill="none" 
          strokeWidth="2"
          strokeDasharray={isActive ? "75" : "0"}
          strokeDashoffset={isActive ? "0" : "75"}
          style={{
            animation: isActive ? 'progress 4s ease-in-out 1 forwards' : 'none'
          }}
        />
        <circle 
          className={`transition-all duration-300 ${isActive ? 'fill-[#2b2d42] stroke-[#ff215a]' : 'fill-transparent stroke-[#2b2d42]'}`}
          cx="14" 
          cy="14" 
          r="2" 
          strokeWidth="3"
        />
      </svg>
    </button>
  );

  return (
    <div id='home' className="max-w-[1200px] mx-auto px-4 overflow-hidden mt-12 mb-12">
      <style jsx>{`
        @keyframes progress {
          0% {
            stroke-dashoffset: 75;
            opacity: 1;
          }
          95% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            opacity: 0;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      
      <div className="flex flex-row bg-white shadow-lg h-[400px] md:h-[550px] lg:h-[650px] xl:h-[700px] p-8 md:p-16 lg:p-20 xl:p-20 relative overflow-hidden">
        
        {/* Slider Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-row-reverse transition-all duration-1200 ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-4/5 lg:w-[70%] h-full">
                <img
                  className="w-full h-[800px] object-cover"
                  src={slide.image}
                  alt="Interior Design"
                />
              </div>

              {/* Content */}
              <div className="absolute left-0 bottom-0 md:top-1/2 md:transform md:-translate-y-1/2 md:bottom-auto max-w-[460px] bg-white/55 backdrop-blur-lg p-5 md:p-10 lg:p-12 overflow-hidden">
                <h3 
                  className={`text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#2B2D42] capitalize mb-5 transition-all duration-1200 ${
                    index === currentSlide ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-150px]'
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '200ms' : '0ms' }}
                >
                  {slide.title}
                </h3>
                
                <div 
                  className={`text-[#656565] text-sm lg:text-base leading-relaxed capitalize mb-5 transition-all duration-1400 ${
                    index === currentSlide ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-200px]'
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '400ms' : '0ms' }}
                >
                  {slide.description}
                </div>
                
                <div 
                  className={`transition-all duration-1500 ${
                    index === currentSlide ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-300px]'
                  }`}
                  style={{ transitionDelay: index === currentSlide ? '600ms' : '0ms' }}
                >
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#2b2d42] hover:text-[#ff215a] font-medium text-sm lg:text-base capitalize transition-all duration-300 group"
                  >
                    read more
                    <div className="ml-2 text-[#ff215a] group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowIcon className="group-hover:[&_circle]:stroke-dashoffset-0" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Button - Hidden on mobile */}
        <div className="absolute bottom-[8%] right-[5%] rotate-90 z-10 hidden md:block">
          <ScrollIcon />
        </div>

        {/* Navigation and Pagination */}
        <div className="absolute top-0 right-0 h-full flex flex-col">
          {/* Navigation */}
          <div className="mt-10 md:mt-16 lg:mt-20 mr-0.5 md:mr-5 lg:mr-8">
            <div className="mb-4">
              <button 
                onClick={prevSlide}
                className="rotate-[-90deg] text-[#2b2d42] hover:text-[#ff215a] transition-colors group"
              >
                <ArrowIcon className="group-hover:[&_circle]:stroke-dashoffset-0" />
              </button>
            </div>
            <div>
              <button 
                onClick={nextSlide}
                className="rotate-90 text-[#2b2d42] hover:text-[#ff215a] transition-colors group"
              >
                <ArrowIcon className="group-hover:[&_circle]:stroke-dashoffset-0" />
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="absolute top-[43%] right-0 mr-6 md:mr-12 lg:mr-14">
            <div className="flex flex-col">
              {slides.map((_, index) => (
                <PaginationBullet 
                  key={index} 
                  index={index} 
                  isActive={currentSlide === index} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Button */}
      {/* <a 
        href="https://bdthemes.net/demo/wordpress/ultimate-post-kit/demo/" 
        className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold text-sm uppercase px-5 py-4 mt-12 mb-12 transition-colors duration-300"
      >
        view wordpress demo
      </a> */}
    </div>
  );
}