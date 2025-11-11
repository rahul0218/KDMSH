import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: any;
    const startAutoplay = () => {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000); // Change slide every 5 seconds
    };

    startAutoplay();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[720px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center">
            <div className="w-full h-full bg-gray-700 animate-pulse" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              style={{
                opacity: 0,
                transition: 'opacity 500ms ease-in-out',
                position: 'absolute',
                top: '0',
                left: '0',
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            />
          </div>
          <div className="absolute inset-0 bg-primary-medium bg-opacity-50"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
            <div className="px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Link
                to={slide.buttonLink}
                className="bg-accent-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-base"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-8 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110 shadow-lg'
                : 'bg-white bg-opacity-30 hover:bg-opacity-50 shadow-md cursor-pointer hover:scale-105'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center rounded-full transition-opacity duration-300 hover:opacity-80"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;