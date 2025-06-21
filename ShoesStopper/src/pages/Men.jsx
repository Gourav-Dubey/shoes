// import { useState, useEffect } from "react";

// const shoesData = [
//   {
//     id: 1,
//     name: "Air Max 2025",
//     category: "Running",
//     price: "$120",
//     image: "/shoe5.jpg",
//   },
//   {
//     id: 2,
//     name: "Street Vibe",
//     category: "Casual",
//     price: "$95",
//     image: "/shoe6.jpg",
//   },
//   {
//     id: 3,
//     name: "Trail Master",
//     category: "Hiking",
//     price: "$140",
//     image: "/shoe7.jpg",
//   },
//   {
//     id: 4,
//     name: "Ultra Boost",
//     category: "Running",
//     price: "$160",
//     image: "/shoe8.jpg",
//   },
//   {
//     id: 5,
//     name: "City Edge",
//     category: "Casual",
//     price: "$110",
//     image: "/shoe9.jpg",
//   },
//   {
//     id: 6,
//     name: "Rock Climber",
//     category: "Hiking",
//     price: "$130",
//     image: "/shoe10.jpg",
//   },
// ];

// const categories = ["All", "Running", "Casual", "Hiking"];

// function MenShoesPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   // Preload images
//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePromises = shoesData.map((shoe) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.src = shoe.image;
//           img.onload = resolve;
//           img.onerror = resolve; // Continue even if some images fail to load
//         });
//       });

//       await Promise.all(imagePromises);
//       setImagesLoaded(true);
//     };

//     loadImages();
//   }, []);

//   const filteredShoes = shoesData.filter((shoe) => {
//     const matchesCategory =
//       selectedCategory === "All" || shoe.category === selectedCategory;
//     const matchesSearch = shoe.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   if (!imagesLoaded) {
//     return (
//       <div className="min-h-screen bg-gray-950 text-white p-6">
//         <div className="max-w-8xl mx-auto">
//           <h1 className="text-4xl font-extrabold mb-6 text-center">
//             Explore Men's Collection
//           </h1>

//           {/* Search and Category Filter */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-8">
//             <div className="w-full sm:w-1/2 h-10 bg-gray-800 rounded-md animate-pulse"></div>
//             <div className="flex gap-2 overflow-x-auto">
//               {categories.map((cat) => (
//                 <div
//                   key={cat}
//                   className="w-20 h-10 bg-gray-800 rounded-full animate-pulse"
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Shoe Grid Skeleton */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800"
//               >
//                 <div className="h-48 bg-gray-800 animate-pulse"></div>
//                 <div className="p-5 bg-gray-950">
//                   <div className="h-6 w-3/4 bg-gray-800 rounded animate-pulse mb-2"></div>
//                   <div className="h-4 w-1/2 bg-gray-800 rounded animate-pulse mb-3"></div>
//                   <div className="flex items-center justify-between">
//                     <div className="h-5 w-1/4 bg-gray-800 rounded animate-pulse"></div>
//                     <div className="h-8 w-20 bg-gray-800 rounded-md animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <div className="max-w-8xl mx-auto">
//         <h1 className="text-4xl font-extrabold mb-6 text-center">
//           Explore Men's Collection
//         </h1>

//         {/* Search and Category Filter */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-8">
//           <input
//             type="text"
//             placeholder="Search for shoes..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <div className="flex gap-2 overflow-x-auto">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//                   selectedCategory === cat
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Shoe Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredShoes.map((shoe) => (
//             <div
//               key={shoe.id}
//               className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-800"
//             >
//               <div className="h-48 bg-gray-800 flex items-center justify-center">
//                 <img
//                   src={shoe.image}
//                   alt={shoe.name}
//                   className="h-full w-full object-cover"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>
//               <div className="p-5 bg-gray-950">
//                 <h3 className="text-xl font-semibold text-white mb-1">
//                   {shoe.name}
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-2">{shoe.category}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-blue-400 font-bold text-lg">
//                     {shoe.price}
//                   </span>
//                   <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MenShoesPage; 

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // import { SparklesCore } from "@/components/ui/sparkles";

// const shoesData = [
//   { id: 1, name: "Air Max 2025", category: "Running", price: "$120", image: "/shoe5.jpg" },
//   { id: 2, name: "Street Vibe", category: "Casual", price: "$95", image: "/shoe6.jpg" },
//   { id: 3, name: "Trail Master", category: "Hiking", price: "$140", image: "/shoe7.jpg" },
//   { id: 4, name: "Ultra Boost", category: "Running", price: "$160", image: "/shoe8.jpg" },
//   { id: 5, name: "City Edge", category: "Casual", price: "$110", image: "/shoe9.jpg" },
//   { id: 6, name: "Rock Climber", category: "Hiking", price: "$130", image: "/shoe10.jpg" },
// ];

// const categories = ["All", "Running", "Casual", "Hiking"];

// function MenShoesPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [imagesLoaded, setImagesLoaded] = useState(false);

//   useEffect(() => {
//     const loadImages = async () => {
//       const imagePromises = shoesData.map((shoe) => new Promise((resolve) => {
//         const img = new Image();
//         img.src = shoe.image;
//         img.onload = resolve;
//         img.onerror = resolve;
//       }));
//       await Promise.all(imagePromises);
//       setImagesLoaded(true);
//     };
//     loadImages();
//   }, []);

//   const filteredShoes = shoesData.filter((shoe) => {
//     const matchCategory = selectedCategory === "All" || shoe.category === selectedCategory;
//     const matchSearch = shoe.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   if (!imagesLoaded) {
//     return (
//       <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold animate-pulse mb-8">Loading Collection...</h1>
//         <div className="w-64 h-64 bg-gray-800 rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 relative">
//       <div className="absolute inset-0 -z-10">
//         {/* <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1.2}
//           particleDensity={120}
//           className="w-full h-full"
//           particleColor="#00FFFF"
//         /> */}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.h1
//           className="text-5xl font-extrabold text-center mb-10"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Explore Men's Shoes
//         </motion.h1>

//         <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
//           <motion.input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search shoes..."
//             className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           />

//           <div className="flex gap-2 overflow-x-auto">
//             {categories.map((cat, i) => (
//               <motion.button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
//                   selectedCategory === cat ? "bg-cyan-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//                 }`}
//                 initial={{ opacity: 0, x: -20 * i }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * i }}
//               >
//                 {cat}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//   {filteredShoes.map((shoe) => (
//     <motion.div
//       key={shoe.id}
//       className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden hover:ring-2 ring-cyan-500 transition-all duration-300"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       layoutId={`shoe-${shoe.id}`} // Ensure layoutId is unique
//     >
//       <div className="h-56 bg-gray-800 overflow-hidden">
//         <motion.img
//           src={shoe.image}
//           alt={shoe.name}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//         />
//       </div>
//       <div className="p-5">
//         <h3 className="text-2xl font-semibold mb-1">{shoe.name}</h3>
//         <p className="text-sm text-gray-400 mb-3">{shoe.category}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-cyan-400 font-bold text-xl">{shoe.price}</span>
//           <button className="px-4 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   ))}
// </AnimatePresence>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default MenShoesPage;


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