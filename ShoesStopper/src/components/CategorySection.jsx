import React from "react";

function CategorySection() {
  const categories = [
    { title: "Running", products: 42 },
    { title: "Casual", products: 56 },
    { title: "Sports", products: 38 },
  ];

  return (
    <section className="px-8 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-2 text-center">Shop by Category</h2>
      <p className="text-gray-400 mb-12 text-center">
        Find the perfect shoes for every occasion and activity
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl flex flex-col justify-between items-start shadow hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full h-40 bg-zinc-800 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-gray-600 text-2xl">📦</div>
            </div>
            <div className="text-xl font-bold mb-1">{cat.title}</div>
            <div className="text-gray-400 mb-4">{cat.products} Products</div>
            <button className="w-full border border-gray-300 text-white py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Shop Now <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
