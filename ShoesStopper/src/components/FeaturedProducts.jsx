// import { useState, useEffect } from 'react';
// import shoe1 from "/shoe1.jpg";
// import shoe2 from "/shoe2.jpg";
// import shoe3 from "/shoe3.jpg";
// import shoe4 from "/shoe4.jpg";

// function FeaturedProducts() {
//   const [isLoading, setIsLoading] = useState(true);
//   const products = [
//     {
//       title: "Air Cloud 9",
//       category: "Running",
//       price: "$199.99",
//       image: shoe1,
//       colors: ["bg-red-500", "bg-green-500", "bg-blue-500"]
//     },
//     {
//       title: "Street Force One",
//       category: "Casual",
//       price: "$149.99",
//       image: shoe2,
//       colors: ["bg-white", "bg-black", "bg-red-500"]
//     },
//     {
//       title: "Velocity Max",
//       category: "Sports",
//       price: "$179.99",
//       image: shoe3,
//       colors: ["bg-blue-500", "bg-white", "bg-red-500"]
//     },
//     {
//       title: "Urban Walker",
//       category: "Casual",
//       price: "$129.99",
//       image: shoe4,
//       colors: ["bg-green-500", "bg-black", "bg-blue-500"]
//     }
//   ];

//   useEffect(() => {
//     // Preload images
//     const imagePromises = products.map(product => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = product.image;
//         img.onload = resolve;
//         img.onerror = resolve; // Even if error occurs, we still want to show the component
//       });
//     });

//     Promise.all(imagePromises).then(() => {
//       setIsLoading(false);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className="px-8 py-16 bg-black text-white">
//         <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
//         <p className="text-gray-400 mb-8">Discover our most popular styles loved by customers worldwide</p>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((_, index) => (
//             <div key={index} className="bg-zinc-900 p-4 rounded-xl shadow">
//               <div className="bg-zinc-800 h-48 rounded-lg animate-pulse"></div>
//               <div className="mt-4 h-4 bg-zinc-800 rounded animate-pulse"></div>
//               <div className="mt-2 h-6 bg-zinc-800 rounded animate-pulse w-3/4"></div>
//               <div className="mt-2 h-4 bg-zinc-800 rounded animate-pulse w-1/2"></div>
//               <div className="flex space-x-1 mt-2">
//                 <span className="w-4 h-4 rounded-full bg-zinc-800 animate-pulse"></span>
//                 <span className="w-4 h-4 rounded-full bg-zinc-800 animate-pulse"></span>
//                 <span className="w-4 h-4 rounded-full bg-zinc-800 animate-pulse"></span>
//               </div>
//               <div className="mt-4 w-full h-10 bg-zinc-800 rounded-full animate-pulse"></div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="px-8 py-16 bg-black text-white">
//       <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
//       <p className="text-gray-400 mb-8">Discover our most popular styles loved by customers worldwide</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-zinc-900 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 relative group"
//           >
//             <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center overflow-hidden relative">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <button className="absolute top-2 right-2 text-white hover:text-red-500">
//                 <i className="far fa-heart"></i>
//               </button>
//             </div>
//             <div className="mt-4 text-sm text-gray-400">{product.category}</div>
//             <div className="text-lg font-semibold">{product.title}</div>
//             <div className="text-sm font-bold mt-1">{product.price}</div>
//             <div className="flex space-x-1 mt-2">
//               {product.colors.map((color, idx) => (
//                 <span
//                   key={idx}
//                   className={`w-4 h-4 rounded-full border border-white ${color}`}
//                 ></span>
//               ))}
//             </div>
//             <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;
 
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight, Zap } from "lucide-react";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "Nebula Runner Pro",
//     price: 149.99,
//     rating: 4.8,
//     colors: ["#6366f1", "#f43f5e", "#f59e0b"],
//     image: "/shoe1.png",
//     description: "Performance running shoes with cloud-like cushioning",
//     badge: "BESTSELLER",
//   },
//   {
//     id: 2,
//     name: "Urban Chic Heels",
//     price: 119.99,
//     rating: 4.6,
//     colors: ["#000000", "#a78bfa", "#ec4899"],
//     image: "/shoe2.png",
//     description: "Elegant heels for the modern city dweller",
//     badge: "NEW",
//   },
//   {
//     id: 3,
//     name: "Eco Trailblazer",
//     price: 134.99,
//     rating: 4.9,
//     colors: ["#10b981", "#84cc16", "#0ea5e9"],
//     image: "/shoe3.png",
//     description: "Sustainable hiking shoes for outdoor adventures",
//     badge: "ECO PICK",
//   },
//   {
//     id: 4,
//     name: "Classic Oxford Deluxe",
//     price: 159.99,
//     rating: 4.7,
//     colors: ["#1e293b", "#64748b", "#57534e"],
//     image: "/shoe4.png",
//     description: "Timeless formal footwear with premium leather",
//     badge: "LIMITED",
//   },
// ];

// function FeaturedProducts() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   // const sliderRef = useRef(null);

//   // Auto-rotate products
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHovered && !isDragging) {
//         setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isHovered, isDragging]);

//   // Drag to scroll functionality
//   const startDrag = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - sliderRef.current.offsetLeft);
//     setScrollLeft(sliderRef.current.scrollLeft);
//   };

//   const duringDrag = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     sliderRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const endDrag = () => {
//     setIsDragging(false);
//   };

//   const nextProduct = () => {
//     setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
//   };

//   const prevProduct = () => {
//     setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full mb-4">
//             <Zap className="h-4 w-4" />
//             <span className="text-xs font-semibold uppercase tracking-wider">Featured Collection</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Our Premium Selection
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Handcrafted excellence meets innovative design in these standout pieces
//           </p>
//         </motion.div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {featuredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//               className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
//                 index % 2 === 0 ? "lg:-translate-y-8" : "lg:translate-y-8"
//               }`}
//               onMouseEnter={() => setIsHovered(product.id)}
//               onMouseLeave={() => setIsHovered(null)}
//             >
//               <div className="relative h-96">
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-8">
//                   <motion.img
//                     src={product.image}
//                     alt={product.name}
//                     className="h-full object-contain"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   />
//                 </div>
//                 {product.badge && (
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-xs font-bold uppercase tracking-wide">
//                     {product.badge}
//                   </div>
//                 )}
//                 <AnimatePresence>
//                   {isHovered === product.id && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
//                     >
//                       <motion.button
//                         whileTap={{ scale: 0.95 }}
//                         className="w-full bg-white text-gray-900 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
//                       >
//                         <ShoppingCart className="h-5 w-5" />
//                         Add to Cart
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
//                   <button className="text-gray-400 hover:text-rose-500 transition-colors">
//                     <Heart className="h-5 w-5" />
//                   </button>
//                 </div>
//                 <p className="text-gray-600 mb-4">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`h-4 w-4 ${
//                           i < Math.floor(product.rating)
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                     <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
//                   </div>
//                   <div className="text-xl font-bold text-gray-900">${product.price}</div>
//                 </div>
//                 <div className="mt-4 flex items-center gap-2">
//                   <span className="text-sm text-gray-500">Colors:</span>
//                   {product.colors.map((color) => (
//                     <button
//                       key={color}
//                       className="h-5 w-5 rounded-full border-2 border-white shadow-sm"
//                       style={{ backgroundColor: color }}
//                       aria-label={`Color ${color}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden relative">
//           <div
//             // ref={sliderRef}
//             className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
//             onMouseDown={startDrag}
//             onMouseMove={duringDrag}
//             onMouseUp={endDrag}
//             onMouseLeave={endDrag}
//             onTouchStart={(e) => startDrag(e.touches[0])}
//             onTouchMove={(e) => duringDrag(e.touches[0])}
//             onTouchEnd={endDrag}
//             style={{ cursor: isDragging ? "grabbing" : "grab" }}
//           >
//             {featuredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex-shrink-0 w-full snap-center px-2"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="bg-white rounded-2xl overflow-hidden shadow-lg"
//                 >
//                   <div className="relative h-64">
//                     <div className="absolute inset-0 bg-gray-100 flex items-center justify-center p-6">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="h-full object-contain"
//                       />
//                     </div>
//                     {product.badge && (
//                       <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow text-xs font-bold uppercase">
//                         {product.badge}
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
//                       <button className="text-gray-400 hover:text-rose-500">
//                         <Heart className="h-5 w-5" />
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-3">{product.description}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`h-3 w-3 ${
//                               i < Math.floor(product.rating)
//                                 ? "text-yellow-400 fill-yellow-400"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                         <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
//                       </div>
//                       <div className="text-lg font-bold text-gray-900">${product.price}</div>
//                     </div>
//                     <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
//                       <ShoppingCart className="h-4 w-4" />
//                       Add to Cart
//                     </button>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={prevProduct}
//             className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//             aria-label="Previous product"
//           >
//             <ChevronLeft className="h-5 w-5 text-gray-800" />
//           </button>
//           <button
//             onClick={nextProduct}
//             className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//             aria-label="Next product"
//           >
//             <ChevronRight className="h-5 w-5 text-gray-800" />
//           </button>
//           <div className="flex justify-center mt-4 gap-2">
//             {featuredProducts.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition ${
//                   index === currentIndex ? "bg-gray-900" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to product ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
//             View All Products
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts; 


import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight, Zap } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Nebula Runner Pro",
    price: 149.99,
    rating: 4.8,
    colors: ["#6366f1", "#f43f5e", "#f59e0b"],
    image: "/shoe1.jpg",
    description: "Performance running shoes with cloud-like cushioning",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Urban Chic Heels",
    price: 119.99,
    rating: 4.6,
    colors: ["#000000", "#a78bfa", "#ec4899"],
    image: "/shoe2.jpg",
    description: "Elegant heels for the modern city dweller",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Eco Trailblazer",
    price: 134.99,
    rating: 4.9,
    colors: ["#10b981", "#84cc16", "#0ea5e9"],
    image: "/shoe3.jpg",
    description: "Sustainable hiking shoes for outdoor adventures",
    badge: "ECO PICK",
  },
  {
    id: 4,
    name: "Classic Oxford Deluxe",
    price: 159.99,
    rating: 4.7,
    colors: ["#1e293b", "#64748b", "#57534e"],
    image: "/shoe4.jpg",
    description: "Timeless formal footwear with premium leather",
    badge: "LIMITED",
  },
];

function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isDragging) {
        setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  // Drag to scroll functionality
  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-900/30 text-indigo-400 px-4 py-1 rounded-full mb-4 border border-indigo-800/50">
            <Zap className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Featured Collection</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Premium Selection
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Handcrafted excellence meets innovative design in these standout pieces
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className={`bg-gray-800/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-700/50 backdrop-blur-sm ${
                index % 2 === 0 ? "lg:-translate-y-8" : "lg:translate-y-8"
              }`}
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="relative h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 flex items-center justify-center p-8">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-gray-900/80 text-indigo-400 px-3 py-1 rounded-full shadow-md text-xs font-bold uppercase tracking-wide border border-gray-700">
                    {product.badge}
                  </div>
                )}
                <AnimatePresence>
                  {isHovered === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6"
                    >
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Add to Cart
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <button className="text-gray-400 hover:text-rose-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <div className="text-xl font-bold text-white">${product.price}</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Colors:</span>
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="h-5 w-5 rounded-full border-2 border-gray-700 shadow-sm hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      aria-label={`Color ${color}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
            onMouseDown={startDrag}
            onMouseMove={duringDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => startDrag(e.touches[0])}
            onTouchMove={(e) => duringDrag(e.touches[0])}
            onTouchEnd={endDrag}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full snap-center px-2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-700/50"
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain"
                      />
                    </div>
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-gray-900/80 text-indigo-400 px-2 py-1 rounded-full shadow text-xs font-bold uppercase border border-gray-700">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                      <button className="text-gray-400 hover:text-rose-500">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                      </div>
                      <div className="text-lg font-bold text-white">${product.price}</div>
                    </div>
                    <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <button
            onClick={prevProduct}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-full shadow-md border border-gray-700 hover:bg-gray-700/80 transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/80 p-2 rounded-full shadow-md border border-gray-700 hover:bg-gray-700/80 transition-colors"
            aria-label="Next product"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          <div className="flex justify-center mt-4 gap-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? "bg-indigo-500" : "bg-gray-600"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all border border-indigo-500/30">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProducts;