import React from 'react'
import { Badge } from './ui/badge'
import { MapPin, Briefcase } from 'lucide-react'

const LatestJobCards = () => {
  return (
    <div className="group p-5 rounded-2xl bg-white border border-gray-100 
    shadow-md cursor-pointer relative overflow-hidden
    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
      bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 
      transition duration-300"></div>

      {/* Company */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            Company Name
          </h1>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin className="w-4 h-4" /> India
          </p>
        </div>
        <Briefcase className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition" />
      </div>

      {/* Job Info */}
      <div className="mb-4 relative z-10">
        <h2 className="text-base font-bold text-gray-700 group-hover:text-pink-500 transition">
          Job Title
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          Build amazing UI and scalable applications with modern tech.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 relative z-10">
        <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
          12 Positions
        </Badge>
        <Badge className="bg-purple-50 text-purple-600 hover:bg-purple-100 transition">
          Part Time
        </Badge>
        <Badge className="bg-pink-50 text-pink-600 hover:bg-pink-100 transition">
          24 LPA
        </Badge>
      </div>

      {/* Bottom Hover Line */}
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
      group-hover:w-full transition-all duration-300 rounded-full"></div>

    </div>
  )
}

export default LatestJobCards