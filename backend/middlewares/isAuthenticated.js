// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({
//         message: "unAuthorized not Authenticated",
//         success: false,
//       });
//     }
//     const decode=await jwt.verify(token,process.env.SECRET_KEY)
//     if(!decode){
//         return res.status(401).json({
//             message:"Invalid token",
//             success:false
//         })
//     };  
//     req.id=decode.userId;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default isAuthenticated


import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided",
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decoded.userId;

    next();

  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Invalid or expired token",
      success: false
    });
  }
};

export default isAuthenticated;