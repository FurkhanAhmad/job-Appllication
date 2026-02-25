import { User } from "../models/user.model.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    // 1. Validate input
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already registered with this email",
        success: false,
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// export const login=async(req,res)=>{
       
//        try{
//           const {email,password,role}=req.body;
//           if(!email || !password || !role){
//             return res.status(400).json({
//                 message:"Something went wrong"
//             })
//           }
//           let user=await User.findOne({email});
//           if(!user){
//             return res.status(400).json({
//                 message:"Incorrect Email or Password",
//                 success:false
//             })
//           }
//           const isPassword=await bcrypt.compare(password,user.password)
//           if(!isPassword){
//             return res.status(400).json({
//                 message:"Incorrect email or password"
//             })
//           }
//           //check role is correct or not

//           if(role !==user.role){
//             return res.status(400).json({
//                 message:"Account doesn't exist with current role."
//             })
//           };

//           const tokenData={
//             userId:user._id
//           }
//           const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});
//           user={
//             _id:user._id,
//             fullname:user.fullname,
//             email:user.email,
//             phoneNumber:user.phoneNumber,
//             role:user.role,
//             profile:user.profile
//           }
//           return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
//             message:`Welcome back ${user.fullname}`,
//             user,
//             success:true
//           })
//        }catch(error){
//        console.log(error)
//        }
// }


export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    if (role !== existingUser.role) {
      return res.status(400).json({
        message: "Account doesn't exist with this role",
        success: false,
      });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
      
    const user = {

      _id: existingUser._id,
      fullname: existingUser.fullname,
      email: existingUser.email,
      phoneNumber: existingUser.phoneNumber,
      role: existingUser.role,
      profile: existingUser.profile,
      token:token
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const logout=async(req,res)=>{
    try{
      return res.status(200).cookie("token","",{maxAge:0}).json({
        message:"Loggedout Successfully",
        success:true
      })
    }catch(error){
        console.log(error)
    }
}

export const updateProfile=async(req,res)=>{
    try{
        const {fullname,email,phoneNumber,bio,skills}=req.body;
    
         if(!fullname || !email || !phoneNumber || !bio || !skills){
            return res.status(400).json({
        message:"All Fields Are Required",
        success:false
        })
    };
    const skillssArray=skills.split(",");
        const userId=req.id //middleware authentication
        let user=await User.findById(userId);
        if(!user){
            return res.status(400).json({
                message:"User not found.",
                success:false
            })
        }
        //Updating Data
        user.fullname=fullname,
        user.email=email,
        user.phoneNumber=phoneNumber,
        user.profile.bio=bio,
        user.profile.skills=skillssArray

        //Resume comess Lellter Here.....
        await user.save();
         user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
          }
          return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
          })
    } catch(error){
        console.Console(error);
    }
}



