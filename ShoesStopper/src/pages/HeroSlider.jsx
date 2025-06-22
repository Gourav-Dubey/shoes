 import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/shoe2.jpg",
    title: "AirKnit Stretch From Heel to Toe",
    subtitle: "Introducing Knit Gliders",
    cta: "Try a Pair",
    color: "bg-sky-600"
  },
  {
    image: "/shoe1.jpg",
    title: "Comfort Meets Style",
    subtitle: "Run Smart, Look Sharp",
    cta: "Shop Now",
    color: "bg-emerald-600"
  },
  {
    image: "/shoe3.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
    color: "bg-amber-600"
  },
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timerRef = useRef();
  const sliderRef = useRef();

  // Preload images with error handling
  useEffect(() => {
    let isMounted = true;
    const loadImages = async () => {
      try {
        await Promise.all(
          slides.map(slide => 
            new Promise(resolve => {
              const img = new Image();
              img.src = slide.image;
              img.onload = resolve;
              img.onerror = resolve;
            })
          )
        );
        if (isMounted) setLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        if (isMounted) setLoaded(true);
      }
    };
    loadImages();
    return () => { isMounted = false };
  }, []);

  const nextSlide = useCallback(() => 
    setIndex(prev => (prev + 1) % slides.length), []);

  const prevSlide = useCallback(() => 
    setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1)), []);

  const goToSlide = (i) => {
    clearInterval(timerRef.current);
    setIndex(i);
    timerRef.current = setInterval(nextSlide, 5000);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    clearInterval(timerRef.current);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    } else if (touchEnd - touchStart > 50) {
      prevSlide();
    }
    timerRef.current = setInterval(nextSlide, 5000);
  };

  // Auto-slide with cleanup
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  if (!loaded) return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] bg-gray-800 animate-pulse" />
  );

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[index].image} 
            alt={slides[index].title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3"
            >
              {slides[index].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-gray-200 mb-4 sm:mb-6 max-w-md"
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
              className={`${slides[index].color} text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity`}
            >
              {slides[index].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Larger on mobile for better touch */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Indicator - Larger on mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 w-6 sm:w-8 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;