import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'


function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: null
  })
const navigate=useNavigate()
  // text + radio handler
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  // file handler
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }
const submitHandler = async (e) => {
  e.preventDefault()

  const formData = new FormData()
  formData.append("fullname", input.fullname)
  formData.append("email", input.email)
  formData.append("phoneNumber", input.phoneNumber)
  formData.append("password", input.password)
  formData.append("role", input.role)
  formData.append("file", input.file) // ✅ IMPORTANT

  try {
    const res = await axios.post(
      'http://localhost:8000/api/v1/user/register',
      formData,
      {
        withCredentials: true
      }
    )

    if (res.data.success) {
      navigate("/login")
      toast.success(res.data.message)
    }

  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.message || "Something went wrong")
  }
}

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl space-y-6 transition-all duration-500 hover:shadow-pink-300/40"
        >
          
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
            Signup
          </h1>

          {/* Full Name */}
          <div className="space-y-1 group">
            <Label className="text-sm font-medium text-gray-700 group-focus-within:text-indigo-500 transition">
              Full Name
            </Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Furkan Ahmad"
              className="transition-all duration-300 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-indigo-300 hover:shadow-md"
            />
          </div>

          {/* Email */}
          <div className="space-y-1 group">
            <Label className="text-sm font-medium text-gray-700 group-focus-within:text-purple-500 transition">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="furkan@email.com"
              className="transition-all duration-300 border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:border-transparent hover:border-purple-300 hover:shadow-md"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1 group">
            <Label className="text-sm font-medium text-gray-700 group-focus-within:text-pink-500 transition">
              Phone Number
            </Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="9876543210"
              className="transition-all duration-300 border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent hover:border-pink-300 hover:shadow-md"
            />
          </div>

          {/* Password */}
          <div className="space-y-1 group">
            <Label className="text-sm font-medium text-gray-700 group-focus-within:text-indigo-500 transition">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="••••••••"
              className="transition-all duration-300 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-indigo-300 hover:shadow-md"
            />
          </div>

          {/* Role */}
          <RadioGroup className="flex gap-6">
            
            <label className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-indigo-50 transition border hover:border-indigo-200">
              <Input
                type="radio"
                name="role"
                value="student"
                checked={input.role === 'student'}
                onChange={changeEventHandler}
                className="cursor-pointer accent-indigo-500"
              />
              Student
            </label>

            <label className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-pink-50 transition border hover:border-pink-200">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === 'recruiter'}
                onChange={changeEventHandler}
                className="cursor-pointer accent-pink-500"
              />
              Recruiter
            </label>

          </RadioGroup>

          {/* File Upload */}
          <div>
            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="cursor-pointer file:mr-4 file:py-2 file:px-4 
              file:rounded-full file:border-0 
              file:bg-gradient-to-r file:from-indigo-500 file:to-pink-500 
              file:text-white hover:file:opacity-90"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-pink-400/40 active:scale-95 transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-indigo-500 font-medium hover:underline hover:text-purple-500 transition"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Signup