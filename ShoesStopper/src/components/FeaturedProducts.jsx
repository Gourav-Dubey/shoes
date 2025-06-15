

import React from "react";
import shoe1 from "../assets/shoe1.jpg";
import shoe2 from "../assets/shoe2.jpg";
import shoe3 from "../assets/shoe3.jpg";
import shoe4 from "../assets/shoe4.jpg";

function FeaturedProducts() {
  const products = [
    {
      title: "Air Cloud 9",
      category: "Running",
      price: "$199.99",
      image: shoe1,
      colors: ["bg-red-500", "bg-green-500", "bg-blue-500"]
    },
    {
      title: "Street Force One",
      category: "Casual",
      price: "$149.99",
      image: shoe2,
      colors: ["bg-white", "bg-black", "bg-red-500"]
    },
    {
      title: "Velocity Max",
      category: "Sports",
      price: "$179.99",
      image: shoe3,
      colors: ["bg-blue-500", "bg-white", "bg-red-500"]
    },
    {
      title: "Urban Walker",
      category: "Casual",
      price: "$129.99",
      image: shoe4,
      colors: ["bg-green-500", "bg-black", "bg-blue-500"]
    }
  ];

  return (
    <section className="px-8 py-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
      <p className="text-gray-400 mb-8">Discover our most popular styles loved by customers worldwide</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-4 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 relative group"
          >
            <div className="bg-zinc-800 h-48 rounded-lg flex items-center justify-center overflow-hidden relative">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute top-2 right-2 text-white hover:text-red-500">
                <i className="far fa-heart"></i>
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-400">{product.category}</div>
            <div className="text-lg font-semibold">{product.title}</div>
            <div className="text-sm font-bold mt-1">{product.price}</div>
            <div className="flex space-x-1 mt-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className={`w-4 h-4 rounded-full border border-white ${color}`}
                ></span>
              ))}
            </div>
            <button className="mt-4 w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
