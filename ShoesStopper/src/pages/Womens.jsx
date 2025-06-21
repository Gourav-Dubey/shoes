import { useState, useEffect } from "react";
import { Heart, Tag } from "lucide-react";

const shoesData = [
  { id: 1, name: "Velvet Grace", category: "Heels", price: "$150", image: "/shoe20.jpg" },
  { id: 2, name: "Sunset Walk", category: "Flats", price: "$90", image: "/shoe21.jpg" },
  { id: 3, name: "Urban Chic", category: "Sneakers", price: "$120", image: "/shoe22.jpg" },
  { id: 4, name: "Bloom Heels", category: "Heels", price: "$130", tag: "New", image: "/shoe23.jpg" },
  { id: 5, name: "Ocean Breeze", category: "Flats", price: "$85", tag: "Trending", image: "/shoe24.jpg" },
  { id: 6, name: "Cosmo Sneakers", category: "Sneakers", price: "$110", image: "/shoe25.jpg" },
];

const categories = ["All", "Heels", "Flats", "Sneakers"];
const sortOptions = ["Price: Low to High", "Price: High to Low"];

function WomenShoesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(sortOptions[0]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = shoesData.map((shoe) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = shoe.image;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if some images fail to load
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  const filteredShoes = shoesData
    .filter((shoe) => {
      const matchesCategory =
        selectedCategory === "All" || shoe.category === selectedCategory;
      const matchesSearch = shoe.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const priceA = parseInt(a.price.replace("$", ""));
      const priceB = parseInt(b.price.replace("$", ""));
      return sortOrder === "Price: Low to High" ? priceA - priceB : priceB - priceA;
    });

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-6">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-400">
            Discover Women's Collection
          </h1>

          {/* Filters Skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="w-full sm:w-1/2 h-10 bg-gray-800 rounded-md animate-pulse"></div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="w-20 h-10 bg-gray-800 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
            <div className="w-40 h-10 bg-gray-800 rounded-md animate-pulse"></div>
          </div>

          {/* Shoe Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-800"
              >
                <div className="h-48 bg-gray-800 animate-pulse relative">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
                  {index % 3 === 0 && (
                    <div className="absolute bottom-2 left-2 w-16 h-6 bg-gray-700 rounded-full animate-pulse"></div>
                  )}
                </div>
                <div className="p-5 bg-gray-950">
                  <div className="h-6 w-3/4 bg-gray-800 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-800 rounded animate-pulse mb-3"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-1/4 bg-gray-800 rounded animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-800 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-400">
          Discover Women's Collection
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search styles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="mt-2 sm:mt-0 px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="relative bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 border border-gray-800 hover:border-indigo-500 group"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center relative">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <button className="absolute top-2 right-2 p-1 rounded-full bg-gray-900 text-gray-300 hover:text-indigo-500">
                  <Heart size={20} />
                </button>
                {shoe.tag && (
                  <div className="absolute bottom-2 left-2 bg-indigo-500 text-xs text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <Tag size={14} /> {shoe.tag}
                  </div>
                )}
              </div>
              <div className="p-5 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {shoe.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{shoe.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 font-bold text-lg">
                    {shoe.price}
                  </span>
                  <button className="px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomenShoesPage;