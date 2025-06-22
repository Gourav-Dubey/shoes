// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Loader2 } from "lucide-react";

// function AiStylistPage() {
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [results, setResults] = useState([]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setResults([]);

//     const formData = new FormData();
//     if (image) formData.append("image", image);
//     if (description) formData.append("description", description);

//     try {
//       const res = await fetch("/api/recommend", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await res.json();
//       setResults(data);
//     } catch (err) {
//       console.error("Error fetching AI results:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-12 px-4">
//       <div className="max-w-3xl mx-auto space-y-8">
//         <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-center">
//           AI Shoe Stylist
//         </motion.h1>

//         <div className="bg-gray-800 rounded-xl p-6 shadow-xl space-y-6">
//           <div>
//             <label className="block font-semibold mb-2">Upload Your Outfit Photo:</label>
//             <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
//             {preview && <img src={preview} alt="Preview" className="mt-4 w-48 rounded-lg border border-gray-600" />}
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Or Describe Your Outfit:</label>
//             <textarea
//               className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
//               rows="4"
//               placeholder="e.g., White hoodie and black jeans"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             ></textarea>
//           </div>

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition-all"
//           >
//             {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Get Recommendations"}
//           </button>
//         </div>

//         {results.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
//             {results.map((shoe, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 className="bg-gray-800 rounded-lg p-4 shadow-xl"
//               >
//                 <img src={shoe.image} alt={shoe.name} className="w-full h-40 object-contain rounded" />
//                 <h3 className="text-lg font-bold mt-3">{shoe.name}</h3>
//                 <p className="text-gray-400 text-sm mt-1">{shoe.reason}</p>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AiStylistPage;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, Upload, Wand2, ScanEye, Stars } from "lucide-react";

function AiStylistPage() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState("upload");
  const [isHolographic, setIsHolographic] = useState(false);

  // Holographic effect toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHolographic(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResults([]);

    // Simulate AI processing with dramatic effect
    await new Promise(resolve => setTimeout(resolve, 1500));

    const formData = new FormData();
    if (image) formData.append("image", image);
    if (description) formData.append("description", description);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Error fetching AI results:", err);
    } finally {
      setLoading(false);
    }
  };

  // Futuristic grid background
  const GridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4f46e510_0%,transparent_70%)]"></div>
    </div>
  );

  // Holographic card effect
  const HolographicEffect = () => (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20 blur-xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-10 blur-lg"
        animate={{
          rotate: [90, 450],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 relative overflow-hidden">
      {/* Futuristic grid background */}
      <GridBackground />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/20"
            style={{
              width: Math.random() * 8 + 2 + "px",
              height: Math.random() * 8 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating AI orb */}
      <motion.div 
        className="fixed top-1/4 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-600/20 to-pink-600/20 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-100 space-y-20">
        {/* Futuristic header with animated gradient */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-rose-400 mb-3"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Sparkles className="inline mr-3 animate-pulse" />
            <span className="text-white">STYLIST</span> AI
          </motion.h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Next-generation fashion intelligence AI
          </p>
        </motion.div>

        {/* Futuristic input panel with tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-1 shadow-2xl shadow-indigo-500/10 overflow-hidden"
        >
          {isHolographic && <HolographicEffect />}
          
          {/* Futuristic tabs */}
          <div className="flex border-b border-gray-700/50">
            <button
              onClick={() => setActiveTab("upload")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-all ${activeTab === "upload" ? "text-indigo-400 border-b-2 border-indigo-400" : "text-gray-400 hover:text-white"}`}
            >
              <Upload className="inline mr-2 h-4 w-4" /> Image Scan
            </button>
            <button
              onClick={() => setActiveTab("describe")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-all ${activeTab === "describe" ? "text-pink-400 border-b-2 border-pink-400" : "text-gray-400 hover:text-white"}`}
            >
              <Wand2 className="inline mr-2 h-4 w-4" /> Text Describe
            </button>
          </div>

          <div className="p-6 space-y-6">
            <AnimatePresence mode="wait">
              {activeTab === "upload" ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <label className="block font-medium text-indigo-300 flex items-center">
                      <ScanEye className="mr-2 h-5 w-5" /> Upload Your Outfit
                    </label>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors"
                    >
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="hidden" 
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="h-10 w-10 text-indigo-400" />
                          <p className="text-sm text-gray-400">
                            Drag & drop or click to upload
                          </p>
                          <p className="text-xs text-gray-500">
                            High-resolution images work best
                          </p>
                        </div>
                      </label>
                    </motion.div>
                    
                    {preview && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 flex justify-center"
                      >
                        <div className="relative group">
                          <img 
                            src={preview} 
                            alt="Preview" 
                            className="w-64 rounded-lg border-2 border-gray-700 shadow-lg group-hover:border-indigo-400 transition-all" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end p-3">
                            <span className="text-white text-sm">Outfit scan ready</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="describe"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <label className="block font-medium text-pink-300 flex items-center">
                      <Wand2 className="mr-2 h-5 w-5" /> Describe Your Style
                    </label>
                    
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="relative"
                    >
                      <textarea
                        className="w-full p-4 rounded-xl bg-gray-800/80 text-white border-2 border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all backdrop-blur-sm"
                        rows="5"
                        placeholder="e.g., 'Black leather jacket with ripped jeans and combat boots for a concert tonight'"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                        {description.length}/500
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={handleSubmit}
              disabled={loading || (!image && !description)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg ${(!image && !description) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-indigo-500/30'}`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  <span>Analyzing with Quantum AI...</span>
                </>
              ) : (
                <>
                  <Stars className="h-5 w-5" />
                  <span>Generate Styling Recommendations</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* AI Results with futuristic display */}
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              AI-Curated Recommendations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((shoe, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="relative group bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-lg hover:shadow-pink-500/20 transition-all overflow-hidden"
                >
                  {/* Holographic effect on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,180,252,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="h-48 w-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                      <img 
                        src={shoe.image} 
                        alt={shoe.name} 
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <h3 className="text-lg font-bold mt-4 text-white group-hover:text-indigo-300 transition-colors">
                      {shoe.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {shoe.reason}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-pink-400 font-medium">{shoe.price}</span>
                      <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-full transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Futuristic footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center text-xs text-gray-500"
      >
        <p>© 2023 NeoStylist AI | Quantum Fashion Intelligence</p>
        <p className="mt-1">v4.2.0-alpha | Neural Engine Active</p>
      </motion.div>
    </div>
  );
}

export default AiStylistPage;