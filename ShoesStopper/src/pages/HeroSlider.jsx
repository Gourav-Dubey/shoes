
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
  {
    image: "/shoe4.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
    color: "bg-amber-600"
  },
  {
    image: "/shoe5.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
    color: "bg-amber-600"
  },
  
];

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef();

  // Preload images
  useEffect(() => {
    Promise.all(
      slides.map(slide => 
        new Promise(resolve => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = resolve;
        })
      )
    ).then(() => setLoaded(true));
  }, []);

  const nextSlide = useCallback(() => 
    setIndex(prev => (prev + 1) % slides.length), []);

  const prevSlide = useCallback(() => 
    setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1)), []);

  const goToSlide = (i) => setIndex(i);

  // Auto-slide with cleanup
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  if (!loaded) return (
    <div className="w-full h-[50vh] md:h-[80vh] bg-gray-200 animate-pulse" />
  );

  return (
    <div className="relative w-full h-[50vh] md:h-[100vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.0 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[index].image} 
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 md:p-10">
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2"
            >
              {slides[index].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-sm md:text-lg text-gray-200 mb-3 md:mb-6"
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.button
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className={`${slides[index].color} text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-base`}
            >
              {slides[index].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full md:p-2"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full md:p-2"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-1 w-6 md:w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;