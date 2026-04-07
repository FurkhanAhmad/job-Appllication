import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user}=useSelector(store=>store.auth)

  return (
    <div className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          Job
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
            Portal
          </span>
        </h1>

        {/* Menu (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
         <li className="cursor-pointer hover:text-indigo-500"> <Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-pink-500"><Link to="/jobs">Jobs</Link></li>
          <li className="cursor-pointer hover:text-purple-500"><Link to="/browse">Browse</Link></li>
        </ul>
        {!user ? (
         <div className="flex items-center gap-4">
  
  <div className="flex items-center gap-4">
  
  {/* Login Button */}
<Link to="/login">  <Button className="relative px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 overflow-hidden">
    <span className="relative z-10">Login</span>
    <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-20 transition"></span>
  </Button></Link>

  {/* Signup Button */}
<Link to="/signup">  <Button className="relative px-6 py-2 rounded-full font-semibold border border-pink-500 text-pink-500 overflow-hidden hover:text-white transition-all duration-300">
    <span className="relative z-10">Signup</span>
    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300"></span>
  </Button></Link>

</div>

</div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-72 p-4 space-y-4">
                {/* Profile */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>

                  <div>
                    <h4 className="text-sm font-semibold">Furkan Ahmad</h4>
                    <p className="text-xs text-gray-500">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>

                <div className="border-t"></div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100">
                    <User2 className="w-4 h-4" />
                    <span className="text-sm"><Link to="/profile">View Profile</Link></span>
                  </button>

                  <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-red-500">
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        )}
        {/* Right Side */}
      </div>
    </div>
  );
};

export default Navbar;
