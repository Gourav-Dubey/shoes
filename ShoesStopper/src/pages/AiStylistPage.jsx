// import React, { useState } from "react";
// import axios from "axios";

// const AiStylistPage = () => {
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState("");
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleAIRequest = async () => {
//     if (!image && !description) {
//       alert("Please upload an image or enter a description.");
//       return;
//     }

//     const formData = new FormData();
//     if (image) formData.append("image", image);
//     if (description) formData.append("description", description);

//     try {
//       setLoading(true);
//       const response = await axios.post("http://localhost:5000/api/recommend", formData);
//       console.log("Response from server:", response.data); 
//       setRecommendations(response.data);
//     } catch (err) {
//       console.error("AI failed:", err);
//       alert("Failed to get recommendations. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-black to-gray-900 text-white">
//       <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-6">🧠 AI Shoe Stylist</h1>

//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Upload Your Outfit Photo:</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             className="w-full text-black p-2 rounded bg-white"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">Or Describe Your Outfit:</label>
//           <textarea
//             placeholder="e.g., white hoodie and black jeans"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-3 rounded bg-white text-black h-24"
//           />
//         </div>

//         <button
//           onClick={handleAIRequest}
//           disabled={loading}
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded transition duration-300"
//         >
//           {loading ? "Analyzing..." : "Get Recommendations"}
//         </button>
//       </div>

//       {/* Render Recommendations */}
//      {Array.isArray(recommendations) && recommendations.length > 0 && (

//         <div className="max-w-5xl mx-auto mt-10">
//           <h2 className="text-2xl font-semibold mb-4 text-center">
//             👟 Recommended Shoes for Your Outfit
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recommendations.map((rec, index) => (
//               <div
//                 key={index}
//                 className="bg-white text-black p-5 rounded-xl shadow-xl hover:scale-105 transition"
//               >
//                 <h3 className="text-lg font-bold mb-2">{rec.name}</h3>
//                 <p className="text-sm text-gray-700">{rec.reason}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}



//     </div>

    
//   );
// };

// export default AiStylistPage;

AiStylistPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function AiStylistPage() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecommendations([]);
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      if (image) formData.append("image", image);
      if (description) formData.append("description", description);

      // const response = await axios.post("http://localhost:5000/api/recommend", formData);
      const response = await axios.post("https://shoesbackend-3.onrender.com/api/recommend", formData);
      setRecommendations(response.data);
    } catch (err) {
      console.error("AI failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-4 py-12">
      <div className="max-w-2xl mx-auto bg-zinc-800 p-6 rounded-2xl shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span role="img" aria-label="brain" className="mr-2">🧠</span>
          AI Shoe Stylist
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Upload Your Outfit Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-zinc-700 border border-zinc-600 p-2 rounded-md file:text-white file:bg-purple-700 file:border-none file:px-4"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Or Describe Your Outfit:</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. white hoodie and black jeans"
              className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Get Recommendations"}
          </button>
        </form>

        {error && <p className="mt-4 text-red-400 text-center">{error}</p>}
      </div>

      {recommendations.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">👟 Recommended Shoes for Your Outfit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


