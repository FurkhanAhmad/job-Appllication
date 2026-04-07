import React from 'react'

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 transition-all duration-500">

      {/* Badge */}
      <span className="px-5 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg mb-6 
      hover:scale-105 hover:shadow-purple-400/40 transition-all duration-300 cursor-pointer">
        🚀 No.1 Job Hunt Website
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Search, Apply & <br />
        Get Your{" "}
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text 
        hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-500 cursor-pointer">
          Dream Job
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-600 max-w-xl text-sm md:text-base hover:text-gray-800 transition">
        Discover thousands of job opportunities, connect with top recruiters,
        and land your dream job faster than ever.
      </p>
       <div className="w-full max-w-xl mx-auto mt-8">
  <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 px-4 py-2 
  focus-within:ring-2 focus-within:ring-purple-400 transition-all duration-300 hover:shadow-lg">
    
    <input
      type="text"
      placeholder="🔍 Find your dream job..."
      className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 px-2"
    />

    <button className="px-5 py-1.5 rounded-full text-white font-medium 
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300">
      Search
    </button>
  </div>
</div>
      </div>
  )
}

export default HeroSection