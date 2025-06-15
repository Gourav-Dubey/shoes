
// import { Sparkles, ArrowRightCircle } from "lucide-react";


// const collections = [
//   {
//     title: "Luxury Sneakers",
//     description: "Premium comfort and bold design for everyday streetwear.",
//     image: "/shoe25.jpg", // Update this path based on your actual image location
//     color: "from-indigo-600 to-purple-600",
//   },
//   {
//     title: "Heritage Heels",
//     description: "Classic elegance meets modern craftsmanship.",
//     image: "/shoe26.jpg",
//     color: "from-pink-500 to-rose-600",
//   },
//   {
//     title: "Minimalist Flats",
//     description: "Effortless styles perfect for everyday fashion.",
//     image: "/shoe27.jpg",
//     color: "from-gray-700 to-gray-900",
//   },
// ];

// function CollectionPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden">
     
//       <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
//         <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
//           Explore Our Curated Collections
//         </h1>
//         <p className="text-gray-400 text-lg max-w-xl mx-auto">
//           Handpicked for trendsetters, crafted for comfort and style.
//         </p>
//         <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10 animate-pulse">
//           <Sparkles size={200} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
//         {collections.map((col, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-br ${col.color} rounded-2xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-800 backdrop-blur-sm bg-opacity-90`}
//           >
//             <div className="h-56 rounded-lg mb-6 flex items-center justify-center bg-black bg-opacity-20 border border-gray-700">
//               <span className="text-gray-300 text-xl">{col.image}</span>
//             </div>
//             <h2 className="text-2xl font-bold mb-2 text-white tracking-tight">
//               {col.title}
//             </h2>
//             <p className="text-gray-100 text-sm mb-6 leading-relaxed">
//               {col.description}
//             </p>
//             <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition">
//               View Collection <ArrowRightCircle size={18} />
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
//     </div>
//   );
// }

// export default CollectionPage;


import { Sparkles, ArrowRightCircle } from "lucide-react"; 

const collections = [
  {
    title: "Luxury Sneakers",
    description: "Premium comfort and bold design for everyday streetwear.",
    image: "/shoe25.jpg",
    color: "from-indigo-600 to-purple-600",
  },
  {
    title: "Heritage Heels",
    description: "Classic elegance meets modern craftsmanship.",
    image: "/shoe26.jpg",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Minimalist Flats",
    description: "Effortless styles perfect for everyday fashion.",
    image: "/shoe27.jpg",
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "Bold Boots",
    description: "Unleash your wild side with durable, high-fashion boots.",
    image: "/shoe28.jpg",
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Elegant Loafers",
    description: "Refined and versatile footwear for a modern lifestyle.",
    image: "/shoe18.jpg",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Sport Luxe",
    description: "Where athletic design meets luxury streetwear.",
    image: "/shoe19.jpg",
    color: "from-cyan-500 to-blue-600",
  },
];

function CollectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
          Explore Our Curated Collections
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Handpicked for trendsetters, crafted for comfort and style.
        </p>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-10 animate-pulse">
          <Sparkles size={200} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
        {collections.map((col, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${col.color} rounded-2xl p-6 shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-800 backdrop-blur-sm bg-opacity-90`}
          >
            <div className="h-56 rounded-lg mb-6 overflow-hidden">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-white tracking-tight">
              {col.title}
            </h2>
            <p className="text-gray-100 text-sm mb-6 leading-relaxed">
              {col.description}
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition">
              View Collection <ArrowRightCircle size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default CollectionPage;
