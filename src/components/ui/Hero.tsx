import React, { useEffect, useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  overlayColor?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  overlayColor = 'bg-purple-900/60',
  buttonText,
  buttonLink
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden h-[70vh] min-h-[500px] flex items-center justify-center">
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />
      <div className={`absolute inset-0 ${overlayColor}`} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            {subtitle}
          </p>
        )}
        {buttonText && buttonLink && (
          <a 
            href={buttonLink}
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-delayed-more"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;