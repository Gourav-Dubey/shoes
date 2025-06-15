import React, { useState } from "react";
import { Heart, Tag } from "lucide-react";


const shoesData = [
  { id: 1, name: "Velvet Grace", category: "Heels", price: "$150" },
  { id: 2, name: "Sunset Walk", category: "Flats", price: "$90" },
  { id: 3, name: "Urban Chic", category: "Sneakers", price: "$120" },
  { id: 4, name: "Bloom Heels", category: "Heels", price: "$130", tag: "New" },
  { id: 5, name: "Ocean Breeze", category: "Flats", price: "$85", tag: "Trending" },
  { id: 6, name: "Cosmo Sneakers", category: "Sneakers", price: "$110" },
];

const categories = ["All", "Heels", "Flats", "Sneakers"];
const sortOptions = ["Price: Low to High", "Price: High to Low"];

function WomenShoesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(sortOptions[0]);

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
                <span className="text-gray-500 text-xl">Image Here</span>
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

