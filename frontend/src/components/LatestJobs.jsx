import React from 'react'
import LatestJobCards from './LatestJobCards'

const LatestJobs = () => {
    const randomJobs=[1,2,3,4,5,6,7,8]
  return (
    <div className="text-center mt-16 px-4">

      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
        
        {/* Unique Gradient Text */}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 
        text-transparent bg-clip-text">
          Latest & Top
        </span>{" "}
        
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 
        text-transparent bg-clip-text 
        hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 
        transition-all duration-500 cursor-pointer drop-shadow-lg">
          Job Openings
        </span>

      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base 
      hover:text-gray-800 transition">
        Discover the most recent and trending job opportunities tailored for you.
      </p>

      {/* Divider */}
      <div className="mt-6 h-1 w-24 mx-auto rounded-full 
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      shadow-md shadow-purple-300/40"></div>
       <div className='grid grid-cols-3 gap-4 my-5'>
        {
       randomJobs.slice(0,6).map((item,index)=><LatestJobCards/>)
       }  
       </div>
    </div>
  )
}

export default LatestJobs