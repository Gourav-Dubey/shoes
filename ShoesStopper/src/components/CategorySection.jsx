import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(Array(3).fill(false));

  const categories = [
    { 
      title: "Running", 
      products: 42,
      description: "Performance footwear engineered for speed and endurance",
      gradient: "from-blue-600 to-purple-600",
      icon: "🏃‍♂️",
      popularModels: ["Air Max 270", "Pegasus 39", "Ultraboost 22"]
    },
    { 
      title: "Casual", 
      products: 56,
      description: "Stylish everyday shoes for urban explorers",
      gradient: "from-amber-500 to-pink-500",
      icon: "👟",
      popularModels: ["Air Force 1", "Classic Leather", "Old Skool"]
    },
    { 
      title: "Sports", 
      products: 38,
      description: "Specialized footwear for athletic performance",
      gradient: "from-green-500 to-emerald-600",
      icon: "⚽",
      popularModels: ["Metcon 8", "Curry Flow 9", "LeBron 19"]
    },
  ];

  const handleMouseEnter = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = true;
    setIsHovered(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...isHovered];
    newHoverState[index] = false;
    setIsHovered(newHoverState);
  };

  return (
    <section className="px-4 sm:px-8 py-16 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find the perfect shoes for every occasion and activity with our expertly curated collections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative bg-zinc-900 p-6 rounded-2xl h-full flex flex-col justify-between items-start shadow-xl border border-zinc-800 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                <div>
                  <div className="w-full h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="text-7xl z-10"
                      animate={{ 
                        scale: isHovered[index] ? [1, 1.1, 1] : 1,
                        y: isHovered[index] ? [0, -10, 0] : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {cat.icon}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-gray-400 mb-3">{cat.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-2">{cat.products} products</span>
                    <span className="h-1 w-1 rounded-full bg-gray-600 mr-2" />
                    <span>Top models: {cat.popularModels[0]}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold transition-all ${isHovered[index] ? 'bg-white text-black' : 'bg-zinc-800 text-white border border-zinc-700'}`}
                >
                  Shop Collection
                  <motion.span
                    animate={{ 
                      x: isHovered[index] ? [0, 4, 0] : 0 
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <ChevronRight size={18} />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isHovered[index] && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute -bottom-6 -right-6 text-8xl opacity-10 pointer-events-none"
                    >
                      {cat.icon}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 rounded-full border-2 border-gray-700 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center mx-auto gap-2 group">
            View All Categories
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;