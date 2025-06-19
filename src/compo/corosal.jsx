import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  { image: "hdimage1.jpg" },
  { image: "hdimage2.jpg" },
  { image: "hdimage3.jpg" },
  { image: "hdimage4.jpg" },
  { image: "hdimage5.jpg" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();
  const intervalRef = useRef();

  // Auto slide function
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Animate on index change
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;

      // Animate details content
      const details = sliderRef.current.children[index]?.querySelector(".details");
      if (details) {
        gsap.fromTo(
          details,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.inOut" }
        );
      }
    }
  }, [index]);

  const manualSlide = (direction) => {
    clearInterval(intervalRef.current);
    const nextIndex =
      direction === "next"
        ? (index + 1) % slides.length
        : (index - 1 + slides.length) % slides.length;
    setIndex(nextIndex);
    startAutoSlide();
  };

  const slideTo = (i) => {
    clearInterval(intervalRef.current);
    setIndex(i);
    startAutoSlide();
  };

  return (
    <div id="home" className="relative overflow-hidden w-screen max-h-150 text-white">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full min-h-full flex items-center justify-center relative"
          >
            {/* <div className="details absolute top-10 left-10 z-10">
              <h1 className="text-4xl font-bold mb-4">Slide {i + 1}</h1>
              <p className="text-lg text-gray-300 mb-4">
                This is slide number {i + 1}
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-full">
                Explore
              </button>
            </div> */}
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => manualSlide("prev")}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white opacity-30 hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="prev" width="56.898" height="91" viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" />
        </svg>
      </button>
      <button
        onClick={() => manualSlide("next")}
        className="absolute top-1/2 right-8 -translate-y-1/2 text-white opacity-30 hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="next" width="56.898" height="91" viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" />
        </svg>
      </button>

      {/* Trail Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => slideTo(i)}
            className={`w-6 h-2 cursor-pointer border-t-4 transition-opacity duration-300 ${
              i === index ? "opacity-100 border-white" : "opacity-40 border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
