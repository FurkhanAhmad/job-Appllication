import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "sonner"
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlics'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: ""
  })
  const {loading}=useSelector(store=>store.auth)
const navigate=useNavigate();
const dispatch=useDispatch();

  // ✅ FIXED
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    {
        dispatch(setLoading(true))
        try{
const res=await axios.post('http://localhost:8000/api/v1/user/login',input,{
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true,
  
});
  if(res.data.success){
    dispatch(setUser(res.data.user))
    navigate("/")
    toast.success(res.data.message)
  }
        } catch (error){
console.log(error)
toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false))
        }
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
          
          {/* ✅ Fixed Title */}
          <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
            Login
          </h1>

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
         <div> <RadioGroup className="flex gap-6">
            
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

          </RadioGroup></div>

          

          {/* Loading */}

          {
            loading ?<Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please Wait</Button> : <Button
            type="submit"
            className="w-full my-4  rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 hover:shadow-pink-400/40 active:scale-95 transition-all duration-300"
          >
            Sign In
          </Button>
          }
         

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <Link
              to="/signup"
              className="ml-1 text-indigo-500 font-medium hover:underline hover:text-purple-500 transition"
            >
              Signup
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login