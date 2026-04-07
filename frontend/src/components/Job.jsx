import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";


const Job = () => {
const navigate=useNavigate()
const jobId="123kk4k"
  return (
    <div className="w-[320px] p-5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400">2 days ago</p>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-indigo-50 hover:text-indigo-500 transition"
        >
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="https://via.placeholder.com/40" />
        </Avatar>

        <div>
          <h1 className="text-sm font-semibold text-gray-800">
            Company Name
          </h1>
          <p className="text-xs text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-1 hover:text-indigo-600 transition cursor-pointer">
        Frontend Developer
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos
        provident a, dolorem perferendis ducimus deserunt nesciunt quae sequi.
      </p>

      {/* Badges */}
      <div className="flex gap-2 flex-wrap mb-5">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
          12 Positions
        </span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-500">
          Part Time
        </span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-600">
          24 LPA
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button onClick={()=>navigate(`/description/${jobId}`)}
        
          variant="outline"
          className="text-sm rounded-lg px-4 hover:bg-gray-100 transition"
        >
        Details
        </Button>

        <Button className="text-sm px-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-md transition-all duration-300">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;