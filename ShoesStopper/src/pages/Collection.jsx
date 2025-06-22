
// import { useState, useEffect } from "react";
// import { Sparkles, ArrowRightCircle } from "lucide-react";

// const collections = [
//   {
//     title: "Luxury Sneakers",
//     description: "Premium comfort and bold design for everyday streetwear.",
//     image: "/shoe25.jpg",
//     color: "from-indigo-600 to-purple-600",
//   },
//   {
//     title: "Heritage Heels",
//     description: "Classic elegance meets modern craftsmanship.",
//     image: "/shoe26.jpg",
//     color: "from-pink-500 to-rose-600",
//   },
//   {
//     title: "Minimalist Flats",
//     description: "Effortless styles perfect for everyday fashion.",
//     image: "/shoe27.jpg",
//     color: "from-gray-700 to-gray-900",
//   },
//   {
//     title: "Bold Boots",
//     description: "Unleash your wild side with durable, high-fashion boots.",
//     image: "/shoe28.jpg",
//     color: "from-yellow-500 to-orange-600",
//   },
//   {
//     title: "Elegant Loafers",
//     description: "Refined and versatile footwear for a modern lifestyle.",
//     image: "/shoe18.jpg",
//     color: "from-green-500 to-emerald-600",
//   },
//   {
//     title: "Sport Luxe",
//     description: "Where athletic design meets luxury streetwear.",
//     image: "/shoe19.jpg",
//     color: "from-cyan-500 to-blue-600",
//   },
// ];

// function CollectionPage() {
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   // Preload all collection images
//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePromises = collections.map((collection) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = collection.image;
//           img.onload = resolve;
//           img.onerror = resolve; // Continue even if some images fail to load
//         });
//       });

//       await Promise.all(imagePromises);
//       setImagesLoaded(true);
//     };

//     loadImages();
//   }, []);

//   if (!imagesLoaded) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden">
//         <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
//           <div className="h-12 w-3/4 mx-auto bg-gray-800 rounded animate-pulse mb-4"></div>
//           <div className="h-4 w-1/2 mx-auto bg-gray-800 rounded animate-pulse"></div>
//           <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10">
//             <Sparkles size={200} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
//           {[...Array(6)].map((_, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
//             >
//               <div className="h-56 rounded-lg mb-6 bg-gray-700 animate-pulse"></div>
//               <div className="h-8 w-3/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
//               <div className="h-4 w-full bg-gray-700 rounded mb-6 animate-pulse"></div>
//               <div className="h-10 w-32 bg-gray-700 rounded-full animate-pulse"></div>
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
//         <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
//           Explore Our Curated Collections
//         </h1>
//         <p className="text-gray-400 text-lg max-w-xl mx-auto">
//           Handpicked for trendsetters, crafted for comfort and style.
//         </p>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10 animate-pulse">
//           <Sparkles size={200} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
//         {collections.map((col, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-br ${col.color} rounded-2xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-800 backdrop-blur-sm bg-opacity-90`}
//           >
//             <div className="h-56 rounded-lg mb-6 overflow-hidden">
//               <img
//                 src={col.image}
//                 alt={col.title}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//               />
//             </div>
//             <h2 className="text-2xl font-bold mb-2 text-white tracking-tight">
//               {col.title}
//             </h2>
//             <p className="text-gray-100 text-sm mb-6 leading-relaxed">
//               {col.description}
//             </p>
//             <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition">
//               View Collection <ArrowRightCircle size={18} />
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
//     </div>
//   );
// }

// export default CollectionPage;  

import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const collections = [
  {
    title: "Luxury Sneakers",
    description: "Premium comfort and bold design for everyday streetwear.",
    image: "/shoe25.jpg",
    color: "from-indigo-600 to-purple-600",
    id: 1
  },
  {
    title: "Heritage Heels",
    description: "Classic elegance meets modern craftsmanship.",
    image: "/shoe26.jpg",
    color: "from-pink-500 to-rose-600",
    id: 2
  },
  {
    title: "Minimalist Flats",
    description: "Effortless styles perfect for everyday fashion.",
    image: "/shoe27.jpg",
    color: "from-gray-700 to-gray-900",
    id: 3
  },
  {
    title: "Bold Boots",
    description: "Unleash your wild side with durable, high-fashion boots.",
    image: "/shoe28.jpg",
    color: "from-yellow-500 to-orange-600",
    id: 4
  },
  {
    title: "Elegant Loafers",
    description: "Refined and versatile footwear for a modern lifestyle.",
    image: "/shoe18.jpg",
    color: "from-green-500 to-emerald-600",
    id: 5
  },
  {
    title: "Sport Luxe",
    description: "Where athletic design meets luxury streetwear.",
    image: "/shoe19.jpg",
    color: "from-cyan-500 to-blue-600",
    id: 6
  },
];

function CollectionPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const scrollContainerRef = useRef(null);

  // Preload all collection images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = collections.map((collection) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = collection.image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Auto-rotate collections
  useEffect(() => {
    if (!isHovering && inView) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % collections.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, inView]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + collections.length) % collections.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % collections.length);
  };

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <div className="h-12 w-3/4 mx-auto bg-gray-800 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-1/2 mx-auto bg-gray-800 rounded animate-pulse"></div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10">
            <Sparkles size={200} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="h-56 rounded-lg mb-6 bg-gray-700 animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-full bg-gray-700 rounded mb-6 animate-pulse"></div>
              <div className="h-10 w-32 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden relative"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              width: Math.random() * 5 + 1 + 'px',
              height: Math.random() * 5 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.05, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Explore Our Curated Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-xl mx-auto"
        >
          Handpicked for trendsetters, crafted for comfort and style.
        </motion.p>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10">
          <Sparkles size={200} />
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
        {collections.map((col, index) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${col.color} rounded-2xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-800 backdrop-blur-sm bg-opacity-90`}
            whileHover={{ y: -10 }}
          >
            <div className="h-56 rounded-lg mb-6 overflow-hidden relative group">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white tracking-tight">
              {col.title}
            </h2>
            <p className="text-gray-100 text-sm mb-6 leading-relaxed">
              {col.description}
            </p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition"
            >
              View Collection <ArrowRightCircle size={18} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative z-10">
        <div 
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${collections[activeIndex].color} rounded-2xl p-6 shadow-2xl border border-gray-800 backdrop-blur-sm bg-opacity-90 mx-4`}
            >
              <div className="h-64 rounded-lg mb-6 overflow-hidden relative">
                <img
                  src={collections[activeIndex].image}
                  alt={collections[activeIndex].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-white tracking-tight">
                {collections[activeIndex].title}
              </h2>
              <p className="text-gray-100 text-sm mb-6 leading-relaxed">
                {collections[activeIndex].description}
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition">
                View Collection <ArrowRightCircle size={18} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Previous collection"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            {collections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition ${index === activeIndex ? 'bg-white' : 'bg-gray-600'}`}
                aria-label={`Go to collection ${index + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            aria-label="Next collection"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Floating CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <Sparkles size={18} /> Shop New Arrivals
        </button>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default CollectionPage;  

