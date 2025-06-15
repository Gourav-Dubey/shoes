import React from "react";
import shoesImage from "../assets/shoes.jpg";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-12">
        {/* Left Text Content */}
        <div className="space-y-6">
          <p className="text-gray-400 text-sm">New Collection 2025</p>
          <h1 className="text-5xl font-extrabold leading-tight">
            Step Into <br /> The Future <br /> Of Footwear
          </h1>
          <p className="text-gray-400 max-w-md">
            Discover our latest collection of premium shoes designed for comfort, style, and performance.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
              Shop Now
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative h-[400px] flex items-center justify-center rounded-xl overflow-hidden">
          <img src={shoesImage} alt="Shoe" className="object-contain h-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-l-full text-center">
            <div className="text-xl font-bold">₹ 2000</div>
            <div className="text-sm">Limited Edition</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
