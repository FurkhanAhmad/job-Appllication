import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Job Portal
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Find your dream job with ease and connect with top recruiters worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <div className="p-2 rounded-full bg-gray-800 hover:bg-indigo-500 transition cursor-pointer">
             
            </div>
            <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition cursor-pointer">
            
        
            </div>
            <div className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition cursor-pointer">
             
            </div>
          </div>
        </div>
  
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer