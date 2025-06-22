

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Send, Check, Gift, Sparkles } from "lucide-react";

// function PremiumNewsletter() {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const formRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccess(true);
//       setEmail("");
      
//       // Reset after 5 seconds
//       setTimeout(() => {
//         setIsSuccess(false);
//       }, 5000);
//     }, 1500);
//   };

//   return (
//     <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
//       {/* Floating particles background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-indigo-500/10"
//             style={{
//               width: Math.random() * 6 + 2 + 'px',
//               height: Math.random() * 6 + 2 + 'px',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 80],
//               x: [0, (Math.random() - 0.5) * 60],
//               opacity: [0.1, 0.2, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 15 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Glowing orb effects */}
//       <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
//       <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50 rounded-3xl p-10 md:p-16 backdrop-blur-sm shadow-2xl"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Content Section */}
//             <div className="text-center lg:text-left">
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600/30 to-rose-600/30 border border-indigo-500/20 px-5 py-2 rounded-full mb-6">
//                 <Sparkles className="h-5 w-5 text-indigo-400" />
//                 <span className="text-sm font-bold uppercase tracking-wider text-indigo-300">
//                   Exclusive Updates
//                 </span>
//               </div>

//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
//               >
//                 Join Our <span className="bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Premium</span> Newsletter
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 viewport={{ once: true }}
//                 className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
//               >
//                 Get early access to exclusive deals, new arrivals, and insider-only offers. Plus, receive a special welcome gift!
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 viewport={{ once: true }}
//                 className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
//               >
//                 <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 px-4 py-3 rounded-lg">
//                   <Gift className="h-6 w-6 text-rose-400" />
//                   <span className="text-sm font-medium text-gray-300">15% Off First Purchase</span>
//                 </div>
//                 <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 px-4 py-3 rounded-lg">
//                   <Sparkles className="h-6 w-6 text-indigo-400" />
//                   <span className="text-sm font-medium text-gray-300">VIP Early Access</span>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Form Section */}
//             <div className="relative">
//               <AnimatePresence mode="wait">
//                 {!isSuccess ? (
//                   <motion.form
//                     key="form"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.4 }}
//                     ref={formRef}
//                     onSubmit={handleSubmit}
//                     className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 shadow-lg"
//                   >
//                     <div className="space-y-6">
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
//                           Email Address
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <Mail className="h-5 w-5 text-gray-500" />
//                           </div>
//                           <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="block w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                             placeholder="your@email.com"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
//                           Name (Optional)
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           className="block w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                           placeholder="Your name"
//                         />
//                       </div>

//                       <motion.button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className={`w-full flex justify-center items-center gap-2 py-4 px-6 rounded-lg font-bold text-white transition-all ${
//                           isSubmitting
//                             ? 'bg-indigo-700 cursor-not-allowed'
//                             : 'bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 shadow-lg hover:shadow-xl'
//                         }`}
//                         whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                         whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                         onHoverStart={() => setIsHovered(true)}
//                         onHoverEnd={() => setIsHovered(false)}
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Processing...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="h-5 w-5" />
//                             Subscribe Now
//                             <AnimatePresence>
//                               {isHovered && (
//                                 <motion.span
//                                   initial={{ opacity: 0, x: -10 }}
//                                   animate={{ opacity: 1, x: 0 }}
//                                   exit={{ opacity: 0, x: 10 }}
//                                   className="absolute right-6"
//                                 >
//                                   <ArrowRight className="h-5 w-5" />
//                                 </motion.span>
//                               )}
//                             </AnimatePresence>
//                           </>
//                         )}
//                       </motion.button>
//                     </div>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 0.4 }}
//                     className="bg-gray-900/50 border border-green-600/30 rounded-xl p-8 shadow-lg text-center"
//                   >
//                     <div className="flex justify-center mb-6">
//                       <div className="h-16 w-16 rounded-full bg-green-600/20 flex items-center justify-center border border-green-600/30">
//                         <Check className="h-8 w-8 text-green-400" />
//                       </div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-3">You're In!</h3>
//                     <p className="text-gray-400 mb-6">
//                       Thank you for subscribing to our premium newsletter. Your welcome gift is on its way to your inbox!
//                     </p>
//                     <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 text-sm text-gray-300">
//                       Check your email for confirmation and your exclusive 15% off code.
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>

//         {/* Trust badges */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap items-center justify-center gap-6 mt-16 text-gray-400 text-sm"
//         >
//           <div className="flex items-center gap-2">
//             <div className="h-6 w-6 rounded-full bg-indigo-600/20 flex items-center justify-center">
//               <Check className="h-3 w-3 text-indigo-400" />
//             </div>
//             <span>Exclusive Content</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="h-6 w-6 rounded-full bg-rose-600/20 flex items-center justify-center">
//               <Check className="h-3 w-3 text-rose-400" />
//             </div>
//             <span>No Spam Ever</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="h-6 w-6 rounded-full bg-green-600/20 flex items-center justify-center">
//               <Check className="h-3 w-3 text-green-400" />
//             </div>
//             <span>Unsubscribe Anytime</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default PremiumNewsletter; 

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Check, Gift, Sparkles, ArrowRight } from "lucide-react";

function PremiumNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Floating particles background - Reduced count for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing orb effects - Smaller for mobile */}
      <div className="absolute -left-16 -top-16 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-indigo-600/10 blur-xl sm:blur-2xl pointer-events-none" />
      <div className="absolute -right-16 -bottom-16 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-rose-600/10 blur-xl sm:blur-2xl pointer-events-none" />

      <div className="max-w-4xl lg:max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm shadow-lg sm:shadow-xl lg:shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Content Section - Mobile Optimized */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/30 to-rose-600/30 border border-indigo-500/20 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-300">
                  Exclusive Updates
                </span>
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5"
              >
                Join Our <span className="bg-gradient-to-r from-indigo-400 to-rose-400 bg-clip-text text-transparent">Premium</span> Newsletter
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
              >
                Get early access to exclusive deals, new arrivals, and insider-only offers. Plus, receive a special welcome gift!
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 sm:gap-3 bg-gray-800/50 border border-gray-700/50 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm">
                  <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-rose-400" />
                  <span className="font-medium text-gray-300">15% Off First Purchase</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-gray-800/50 border border-gray-700/50 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400" />
                  <span className="font-medium text-gray-300">VIP Early Access</span>
                </div>
              </motion.div>
            </div>

            {/* Form Section - Mobile Optimized */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-gray-900/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md"
                  >
                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 sm:py-2.5 text-sm bg-gray-800/50 border border-gray-700/50 rounded-md sm:rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                          Name (Optional)
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="block w-full px-3 py-2 sm:py-2.5 text-sm bg-gray-800/50 border border-gray-700/50 rounded-md sm:rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center gap-2 py-3 sm:py-3.5 px-4 rounded-md sm:rounded-lg font-bold text-sm sm:text-base text-white transition-all ${
                          isSubmitting
                            ? 'bg-indigo-700 cursor-not-allowed'
                            : 'bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 shadow hover:shadow-md'
                        }`}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                            Subscribe Now
                            <AnimatePresence>
                              {isHovered && (
                                <motion.span
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 5 }}
                                  className="absolute right-4 sm:right-5"
                                >
                                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-900/50 border border-green-600/30 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md text-center"
                  >
                    <div className="flex justify-center mb-4 sm:mb-5">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-600/20 flex items-center justify-center border border-green-600/30">
                        <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">You're In!</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5">
                      Thank you for subscribing to our premium newsletter. Your welcome gift is on its way to your inbox!
                    </p>
                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-md p-2 sm:p-3 text-xs sm:text-sm text-gray-300">
                      Check your email for confirmation and your exclusive 15% off code.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Trust badges - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 text-gray-400 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-indigo-600/20 flex items-center justify-center">
              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-indigo-400" />
            </div>
            <span>Exclusive Content</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-rose-600/20 flex items-center justify-center">
              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-rose-400" />
            </div>
            <span>No Spam Ever</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-600/20 flex items-center justify-center">
              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-400" />
            </div>
            <span>Unsubscribe Anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PremiumNewsletter;