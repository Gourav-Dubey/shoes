
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, Tag, ArrowRight, ShoppingBag, Percent, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";





const saleItems = [
  {
    id: 1,
    name: "Nebula Pro Runners",
    originalPrice: 179.99,
    salePrice: 129.99,
    discount: 28,
    image: "/shoe1.jpg",
    timeLeft: "12:45:33",
    badge: "HOT DEAL"
  },
  {
    id: 2,
    name: "Urban Chic Boots",
    originalPrice: 199.99,
    salePrice: 149.99,
    discount: 25,
    image: "/shoe2.jpg",
    timeLeft: "06:22:17",
    badge: "LIMITED"
  },
  {
    id: 3,
    name: "Eco Trail Masters",
    originalPrice: 159.99,
    salePrice: 119.99,
    discount: 25,
    image: "/shoe3.jpg",
    timeLeft: "18:10:45",
    badge: "POPULAR"
  },
  {
    id: 4,
    name: "Classic Oxford Deluxe",
    originalPrice: 229.99,
    salePrice: 179.99,
    discount: 22,
    image: "/shoe4.jpg",
    timeLeft: "09:35:12",
    badge: "PREMIUM"
  },
  {
    id: 5,
    name: "Sport Luxe Edition",
    originalPrice: 169.99,
    salePrice: 129.99,
    discount: 24,
    image: "/shoe5.jpg",
    timeLeft: "15:20:08",
    badge: "TRENDING"
  },
  {
    id: 6,
    name: "Minimalist Pro Flats",
    originalPrice: 139.99,
    salePrice: 99.99,
    discount: 29,
    image: "/shoe6.jpg",
    timeLeft: "23:59:59",
    badge: "LAST CHANCE"
  }
];

function SaleSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer format
  const formatTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(":");
    return { hours, minutes, seconds };
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-900/20"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing center effect */}
      <div className="absolute inset-0 bg-radial-gradient from-indigo-900/10 to-transparent pointer-events-none" />

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-indigo-600 px-6 py-2 rounded-full mb-6">
            <Zap className="h-5 w-5 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              Flash Sale
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
              Premium Deals
            </span>{" "}
            For Smart Shoppers
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Limited-time offers on our most exclusive footwear. Prices slashed for the season finale.
          </p>
        </motion.div>

        {/* Sale Countdown Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-rose-900/40 to-indigo-900/40 border border-rose-800/30 rounded-xl p-6 mb-16 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-600/20 rounded-lg border border-rose-600/30">
              <Clock className="h-8 w-8 text-rose-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Sale Ends In</h3>
              <p className="text-gray-400">Hurry before these deals disappear</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gray-900/60 rounded-lg px-4 py-2 text-white">
                {currentTime.getHours().toString().padStart(2, '0')}
              </div>
              <span className="text-xs text-gray-400 mt-1">HOURS</span>
            </div>
            <div className="text-2xl text-rose-400">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gray-900/60 rounded-lg px-4 py-2 text-white">
                {currentTime.getMinutes().toString().padStart(2, '0')}
              </div>
              <span className="text-xs text-gray-400 mt-1">MINUTES</span>
            </div>
            <div className="text-2xl text-rose-400">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gray-900/60 rounded-lg px-4 py-2 text-white">
                {currentTime.getSeconds().toString().padStart(2, '0')}
              </div>
              <span className="text-xs text-gray-400 mt-1">SECONDS</span>
            </div>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-bold transition-all group">
            Shop All Deals
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Sale Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleItems.map((item) => {
            const time = formatTime(item.timeLeft);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className={`bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-rose-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  hoveredItem === item.id ? "ring-2 ring-rose-500/50" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative h-80">
                  {/* Product image with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-800/70 flex items-center justify-center p-8">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>

                  {/* Discount badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-rose-600 to-rose-800 rounded-full shadow-lg">
                      <span className="text-white font-bold text-sm">-{item.discount}%</span>
                    </div>
                  </div>

                  {/* Hot deal badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-gray-900/80 text-rose-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-rose-800/50">
                      {item.badge}
                    </div>
                  )}

                  {/* Countdown timer */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>Offer ends in</span>
                      <Clock className="h-3 w-3" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-sm font-mono font-bold text-white">{time.hours}</div>
                        <span className="text-[0.6rem] text-gray-400">HRS</span>
                      </div>
                      <div className="text-sm text-rose-400">:</div>
                      <div className="text-center">
                        <div className="text-sm font-mono font-bold text-white">{time.minutes}</div>
                        <span className="text-[0.6rem] text-gray-400">MIN</span>
                      </div>
                      <div className="text-sm text-rose-400">:</div>
                      <div className="text-center">
                        <div className="text-sm font-mono font-bold text-white">{time.seconds}</div>
                        <span className="text-[0.6rem] text-gray-400">SEC</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick add to cart button */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-20 left-1/2 -translate-x-1/2"
                      >
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-medium shadow-lg"
                        >
                          <ShoppingBag className="h-4 w-4" />
                          Quick Add
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-bold text-rose-400">${item.salePrice}</span>
                    <span className="text-sm text-gray-400 line-through">${item.originalPrice}</span>
                    <span className="text-xs bg-rose-900/30 text-rose-400 px-2 py-1 rounded">
                      Save ${(item.originalPrice - item.salePrice).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                      <Tag className="h-4 w-4" />
                      View Details
                    </button>
                    
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-rose-600/20 to-indigo-600/20 border border-rose-500/20 rounded-full px-1 py-1 mb-8">
            <div className="bg-gradient-to-r from-rose-600 to-indigo-600 rounded-full px-6 py-2 flex items-center gap-2">
              <Percent className="h-5 w-5 text-white" />
              <span className="text-sm font-bold uppercase tracking-widest text-white">
                Extra 10% Off With Code: PREMIUM10
              </span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Don't Miss These Exclusive Deals
          </h3>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
              Shop Men's Sale
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
              Shop Women's Sale
            </button>
          </div> */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
          <button
            onClick={() => navigate("/men")}
            className="px-8 py-4 bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-700 hover:to-indigo-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
                  Shop Men's Sale
          </button>

           <button
           onClick={() => navigate("/womens")}
           className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
         >
           Shop Women's Sale
          </button>
         </div>

        </motion.div>
      </div>
    </section>
  );
}

export default SaleSection;