


// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     image: "/src/assets/shoe1.jpg",
//     title: "AirKnit Stretch From Heel to Toe",
//     subtitle: "Introducing Knit Gliders",
//     cta: "Try a Pair",
//   },
//   {
//     image: "/src/assets/shoe2.jpg",
//     title: "Comfort Meets Style",
//     subtitle: "Run Smart, Look Sharp",
//     cta: "Shop Now",
//   },
//   {
//     image: "/src/assets/shoe3.jpg",
//     title: "The Future of Footwear",
//     subtitle: "Engineered for Performance",
//     cta: "Explore Collection",
//   },
// ];

// const HeroSlider = () => {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-[80vh] bg-black overflow-hidden rounded-xl shadow-xl">
//       {slides.map((slide, i) => (
//         <div
//           key={i}
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             index === i ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 sm:px-20">
//             <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 drop-shadow">
//               {slide.title}
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-300 mb-4 drop-shadow">
//               {slide.subtitle}
//             </p>
//             <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full text-lg shadow">
//               {slide.cta}
//             </button>
//           </div>
//         </div>
//       ))}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white"
//       >
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

// export default HeroSlider;


import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/src/assets/shoe1.jpg", // Update this path based on your actual image location
    title: "AirKnit Stretch From Heel to Toe",
    subtitle: "Introducing Knit Gliders",
    cta: "Try a Pair",
  },
  {
    image: "/src/assets/shoe2.jpg",
    title: "Comfort Meets Style",
    subtitle: "Run Smart, Look Sharp",
    cta: "Shop Now",
  },
  {
    image: "/src/assets/shoe3.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
  },
  {
    image: "/src/assets/shoe4.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
  },
  {
    image: "/src/assets/shoes.jpg",
    title: "The Future of Footwear",
    subtitle: "Engineered for Performance",
    cta: "Explore Collection",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="relative w-full h-[100vh] bg-black overflow-hidden shadow-xl">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 sm:px-20">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2 drop-shadow">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 drop-shadow">
              {slide.subtitle}
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full text-lg shadow">
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 hover:bg-black p-2 rounded-full text-white z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;