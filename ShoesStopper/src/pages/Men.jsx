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

  // Memoize filtered shoes to prevent unnecessary recalculations
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
        if (isMounted) setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold animate-pulse mb-8">Loading Collection...</h1>
        <div className="w-64 h-64 bg-gray-800 rounded-full animate-spin border-t-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Men's Shoes
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-10">
          <motion.input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search shoes..."
            className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            aria-label="Search shoes"
          />

          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition duration-300 ${
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

        {filteredShoes.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl text-gray-400">No shoes found matching your criteria</h3>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredShoes.map((shoe) => (
                <motion.div
                  key={shoe.id}
                  className="bg-gray-900 rounded-xl md:rounded-2xl shadow-xl border border-gray-700 overflow-hidden hover:shadow-cyan-500/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  layout
                >
                  <div className="h-56 bg-gray-800 overflow-hidden">
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
                  <div className="p-4 md:p-5">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">{shoe.name}</h3>
                    <p className="text-sm text-gray-400 mb-2 md:mb-3">{shoe.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold text-lg md:text-xl">{shoe.price}</span>
                      <button 
                        className="px-3 py-1 md:px-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md transition-colors"
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