import { useState, useEffect } from 'react';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { url: 'https://source.unsplash.com/random/1600x900/?technology', title: 'Tech' },
    { url: 'https://source.unsplash.com/random/1600x900/?programming', title: 'Code' },
    { url: 'https://source.unsplash.com/random/1600x900/?computer', title: 'Computer' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 
            ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 text-white text-4xl font-bold">
            {slide.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
