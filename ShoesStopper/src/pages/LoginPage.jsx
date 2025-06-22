// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
// import { motion } from "framer-motion";

// function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
    
//     if (!email || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     setIsLoading(true);
    
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       // Replace with actual authentication logic
//       console.log("Login attempt with:", { email, password });
//       navigate("/home"); // Redirect on successful login
//     } catch (err) {
//       setError("Invalid email or password");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-16">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <Link to="/home" className="inline-block">
//             <h1 className="text-4xl font-bold text-white mb-2">𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧</h1>
//           </Link>
//           <p className="text-gray-400">Step into your perfect pair</p>
//         </div>

//         <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/30">
//           <div className="p-10">
//             <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back</h2>
            
//             {error && (
//               <div className="mb-2 p-2 bg-red-900/50 text-red-200 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-500" />
//                   </div>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="block w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Lock className="h-5 w-5 text-gray-500" />
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="current-password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="block w-full pl-10 pr-10 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300">
//                     Forgot password?
//                   </Link>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                       Signing in...
//                     </>
//                   ) : (
//                     "Sign in"
//                   )}
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-600/50"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-gray-800/50 text-gray-400">
//                     New to ShoeStopper?
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <Link
//                   to="/register"
//                   className="w-full flex justify-center py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
//                 >
//                   Create your account
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 text-center text-sm text-gray-500">
//           <p>© {new Date().getFullYear()} ShoeStopper. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;  


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Replace with actual authentication logic
      console.log("Login attempt with:", { email, password });
      navigate("/home"); // Redirect on successful login
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 py-8 sm:p-4">
      <div className="w-full max-w-md mx-4">
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/home" className="inline-block">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">𝙎𝙝𝙤𝙚𝙨𝙎𝙩𝙤𝙥𝙥𝙚𝙧</h1>
          </Link>
          <p className="text-sm sm:text-base text-gray-400">Step into your perfect pair</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-gray-700/30">
          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">Welcome Back</h2>
            
            {error && (
              <div className="mb-3 p-2 bg-red-900/50 text-red-200 rounded-lg text-xs sm:text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-3 text-sm sm:text-base bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-9 sm:pl-10 pr-10 py-2 sm:py-3 text-sm sm:text-base bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3 w-3 sm:h-4 sm:w-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-300">
                    Remember me
                  </label>
                </div>

                <div className="text-xs sm:text-sm">
                  <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-2 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? "opacity-80 cursor-not-allowed" : ""}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 sm:mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600/50"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="px-2 bg-gray-800/50 text-gray-400">
                    New to ShoeStopper?
                  </span>
                </div>
              </div>

              <div className="mt-3 sm:mt-4">
                <Link
                  to="/register"
                  className="w-full flex justify-center py-2 px-4 rounded-lg text-xs sm:text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  Create your account
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ShoeStopper. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;