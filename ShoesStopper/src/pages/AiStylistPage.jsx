import { useState } from "react";
import api from "../api/axiosInstance";
import { Footprints, Loader2, Sparkles, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiStylistPage() {
  const [description, setDescription] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const formData = new FormData();
      formData.append("description", description);

      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await api.post("/recommend", formData);
      setRecommendations(response.data);
    } catch (err) {
      console.error("AI failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black px-4 py-20 relative overflow-hidden">
      {/* AI Processing Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 bg-black/70 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="mx-auto mb-6"
              >
                <Cpu className="w-16 h-16 text-blue-400" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-blue-300 mb-2"
              >
                Analyzing Your Style
              </motion.div>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full"
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-blue-200 mt-4"
              >
                Scanning fashion database...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-gray-800/90 backdrop-blur-sm p-2 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-gray-700 relative z-10"
      >
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-blue-300 flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-blue-400" />
            AI Shoe Stylist
            <Sparkles className="w-6 h-6 text-blue-400" />
          </h1>
          <p className="text-blue-200/80 text-center">
            Describe your outfit and get perfect shoe recommendations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2 text-blue-200">
              Describe Your Outfit:
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. black kurta with blue jeans, summer dress, formal suit..."
              className="w-full p-4 rounded-lg bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-3 rounded-lg flex justify-center items-center shadow-lg hover:shadow-blue-500/30"
            disabled={loading}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="w-5 h-5" />
              </motion.div>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Get AI Recommendations
              </>
            )}
          </motion.button>
        </form>

        {error && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-300 text-center font-medium bg-red-900/30 py-2 px-4 rounded-lg border border-red-800"
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      <AnimatePresence>
        {recommendations.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl mx-auto mt-12 px-4 relative z-10"
          >
            <motion.div className="relative mb-8">
              <h2 className="text-2xl font-bold text-center text-blue-300 flex items-center justify-center gap-3">
                <Footprints className="w-5 h-5 text-blue-400" />
                Recommended Shoes for Your Outfit
                <Footprints className="w-5 h-5 text-blue-400" />
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {recommendations.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-gray-700 hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ rotate: 5 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-full mb-4 shadow-lg mx-auto w-12 h-12 flex items-center justify-center"
                  >
                    <Footprints className="text-white w-5 h-5" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2 text-center">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {item.reason}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}