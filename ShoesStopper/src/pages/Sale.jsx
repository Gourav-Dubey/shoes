
import React, { useState } from "react";

import {
  Sparkles,
  ArrowRightCircle,
  Heart,
  Filter,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { Carousel } from "@material-tailwind/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const saleData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 800 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 1200 },
  { name: "May", sales: 900 },
  { name: "Jun", sales: 1400 },
];

const featuredSales = [
  "Up to 50% off on Premium Sneakers",
  "Buy 1 Get 1 Free - Limited Time Offer",
  "Flash Sale - Heels Under ₹999",
];

const products = [
  {
    title: "Air Max Sneakers",
    price: "₹4,999",
    discount: "30% Off",
    category: "Men",
    image: "/shoe29.jpg",
    loading:"lazy",
  },
  {
    title: "Running Shoes",
    price: "₹3,499",
    discount: "20% Off",
    category: "Men",
    image: "/shoe30.jpg",
    loading:"lazy",
  },
  {
    title: "High Heels",
    price: "₹2,999",
    discount: "40% Off",
    category: "Women",
    image: "/shoe17.jpg",
    loading:"lazy",
  },
];

function SaleSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20">
      
      <div className="max-w-8xl mx-auto mb-16 text-center animate-fade-in">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Mega Sale Event
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Discover unbeatable discounts, trending deals, and hottest charts this season.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-12 animate-fade-in-up">
        <Carousel className="rounded-xl overflow-hidden">
          {featuredSales.map((text, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 to-gray-700 p-10 flex items-center justify-between gap-8"
            >
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{text}</h3>
                <p className="text-gray-300 text-sm">Limited time offer only. Grab fast!</p>
              </div>
              <TrendingUp size={48} className="text-sky-400 animate-bounce" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h4 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <BarChart3 size={24} className="text-sky-400" /> Monthly Sales Overview
        </h4>
        <div className="w-full h-[300px] bg-gray-800 rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={saleData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#4b5563" }} />
              <Bar dataKey="sales" fill="#38bdf8" barSize={40} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="max-w-8xl mx-auto mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h3 className="text-2xl font-bold">Top Deals</h3>
          <div className="flex gap-4 items-center">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="All">All</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all rounded-xl p-4 shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-xl font-semibold mb-1">{product.title}</div>
              <div className="text-sky-400 font-bold">{product.price}</div>
              <div className="text-sm text-gray-400 mb-2">{product.discount}</div>
              <div className="flex justify-between items-center mt-auto">
                <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm">
                  Add to Cart
                </button>
                <Heart className="text-gray-400 hover:text-sky-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 animate-fade-in">
        More deals dropping soon. Stay tuned.
      </div>
    </div>
  );
}

export default SaleSection;
