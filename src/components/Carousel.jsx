import { useState, useEffect } from 'react';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3',
      title: 'Modern Development',
      subtitle: 'Build the future with cutting-edge tech'
    },
    {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3',
      title: 'Clean Code',
      subtitle: 'Write maintainable, efficient code'
    },
    {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
      title: 'Web Solutions',
      subtitle: 'Create powerful web applications'
    }
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
