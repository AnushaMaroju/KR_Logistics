const adminModel = require("../models/adminModel");
const authorizationValues = require("../config/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const helper = require("../helper/helper")

const isAdmin = async (adminId) => {
  try {
    const adminUser = await adminModel.findById(adminId);
    return adminUser ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};




const createAdmin = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    if (!name || !email || !phoneNumber || !password) {
      return res.status(200).json({
        message: "Missing required fields.",
        responseCode: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new adminModel({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    const AdminData = await newAdmin.save();

    res.status(200).json({
      message: "admin created successfully.",
      data: AdminData,
      responseCode: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
      responseCode: 500,
    });
  }
};



const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(200).json({
          reponseCode:400,
          message: "Email and password are required.",
        });
      }
  
      const existingUser = await adminModel.findOne({ email });
  
      if (!existingUser) {
        return res.status(200).json({
          responseCode:400,
          message: "User not found. Please check your email.",
        });
      }
  
      if (!existingUser.password) {
        return res.status(200).json({
          responseCode:400,
          message: "Password not set for the user.",
        });
      }
  
      if (existingUser.status !== 'active') {
        return res.status(200).json({
          responseCode:400,
          message: "User account is inactive. Please contact the admin.",
        });
      }
  
      const comparePassword = await bcrypt.compare(password, existingUser.password);
      if (!comparePassword) {
        return res.status(200).json({
          responseCode:400,
          message: "Invalid password.",
        });
      }
  
      // Generate and save token
      const tokenId = { id: existingUser.id };
      const userToken = await helper.token(tokenId, authorizationValues.secretKey);
    //   existingUser.token = userToken;
      await existingUser.save();
  
      res.status(200).json({
        responseCode: 200,
        message: "User logged in successfully.",
        token: userToken,
        data:[
         existingUser
        ]
      });
    } catch (error) {
      console.error("Error in login:", error);
      res.status(500).json({
        message: "Internal Server Error.",
      });
    }
  };



module.exports = {
  isAdmin,
  createAdmin,
  adminLogin
};
