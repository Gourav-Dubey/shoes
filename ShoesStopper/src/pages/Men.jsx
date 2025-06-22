

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shoesData = [
  { id: 1, name: "Air Max 2025", category: "Running", price: "$120", image: "/shoe5.jpg" },
  { id: 2, name: "Street Vibe", category: "Casual", price: "$95", image: "/shoe6.jpg" },
  { id: 3, name: "Trail Master", category: "Hiking", price: "$140", image: "/shoe7.jpg" },
  { id: 4, name: "Ultra Boost", category: "Running", price: "$160", image: "/shoe8.jpg" },
  { id: 5, name: "City Edge", category: "Casual", price: "$110", image: "/shoe9.jpg" },
  { id: 6, name: "Rock Climber", category: "Hiking", price: "$130", image: "/shoe10.jpg" },
];

const categories = ["All", "Running", "Casual", "Hiking"];

function MenShoesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const filteredShoes = useMemo(() => {
    return shoesData.filter((shoe) => {
      const matchCategory = selectedCategory === "All" || shoe.category === selectedCategory;
      const matchSearch = shoe.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      try {
        const imagePromises = shoesData.map((shoe) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = shoe.image;
            img.onload = resolve;
            img.onerror = resolve;
          });
        });
        
        await Promise.all(imagePromises);
        if (isMounted) setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        if (isMounted) setImagesLoaded(true);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black text-white p-4 sm:p-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold animate-pulse mb-6">Loading Collection...</h1>
        <div className="w-40 h-40 sm:w-64 sm:h-64 bg-gray-800 rounded-full animate-spin border-t-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4 sm:p-6 md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-16 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Men's Shoes
        </motion.h1>

        {/* Search and Filter Section - Mobile Optimized */}
        <div className="flex flex-col gap-4 mb-6 sm:mb-8">
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shoes..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
              aria-label="Search shoes"
            />
          </motion.div>

          <div className="relative">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium whitespace-nowrap text-xs sm:text-sm transition duration-300 ${
                    selectedCategory === cat 
                      ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30" 
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  initial={{ opacity: 0, x: -20 * i }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  aria-label={`Filter by ${cat}`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid - Responsive Layout */}
        {filteredShoes.length === 0 ? (
          <motion.div 
            className="text-center py-10 sm:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg sm:text-xl text-gray-400">No shoes found matching your criteria</h3>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <AnimatePresence>
              {filteredShoes.map((shoe) => (
                <motion.div
                  key={shoe.id}
                  className="bg-gray-900 rounded-lg sm:rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-cyan-500/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className="h-40 sm:h-48 md:h-56 bg-gray-800 overflow-hidden">
                    <motion.img
                      src={shoe.image}
                      alt={shoe.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 line-clamp-1">{shoe.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">{shoe.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold text-base sm:text-lg">{shoe.price}</span>
                      <button 
                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm rounded transition-colors"
                        aria-label={`Add ${shoe.name} to cart`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenShoesPage;