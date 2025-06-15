import React, { useState } from "react";


const shoesData = [
  { id: 1, name: "Air Max 2025", category: "Running", price: "$120" },
  { id: 2, name: "Street Vibe", category: "Casual", price: "$95" },
  { id: 3, name: "Trail Master", category: "Hiking", price: "$140" },
  { id: 4, name: "Ultra Boost", category: "Running", price: "$160" },
  { id: 5, name: "City Edge", category: "Casual", price: "$110" },
  { id: 6, name: "Rock Climber", category: "Hiking", price: "$130" },
];

const categories = ["All", "Running", "Casual", "Hiking"];

function MenShoesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShoes = shoesData.filter((shoe) => {
    const matchesCategory =
      selectedCategory === "All" || shoe.category === selectedCategory;
    const matchesSearch = shoe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
     
    <div className="min-h-screen bg-gray-950 text-white p-6">
     
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Explore Men's Collection
        </h1>

        {/* Search and Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-8">
          <input
            type="text"
            placeholder="Search for shoes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Shoe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-800"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Image Here</span>
              </div>
              <div className="p-5 bg-gray-950">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {shoe.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{shoe.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-bold text-lg">
                    {shoe.price}
                  </span>
                  <button className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">
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

export default MenShoesPage;

