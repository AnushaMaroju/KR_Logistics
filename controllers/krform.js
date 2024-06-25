const { response } = require('express');
const UserData = require('../models/krformModel');
const Location = require('../models/locationModel');




const createUserData = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      startLocation,
      endLocation,
      photos,
      videos,
      quotation,
      description,
      amount,
      paidStatus,
      date
    } = req.body;

    // Create start location
    const startLoc = new Location(startLocation);
    const savedStartLocation = await startLoc.save();

    // Create end location
    const endLoc = new Location(endLocation);
    const savedEndLocation = await endLoc.save();

    // Create new user data with references to location IDs
    const newUser = new UserData({
      name,
      email,
      phoneNumber,
      startLocation: savedStartLocation._id,
      endLocation: savedEndLocation._id,
      photos,
      videos,
      quotation,
      description,
      amount,
      paidStatus,
      date
    });

    const savedUser = await newUser.save();

    res.status(200).json({
        responseCode:200,
      message: "User data created successfully",
      data: savedUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};


const getUserData = async (req, res) => {
    try {
      const userData = await UserData.find();
      if (!userData) {
        return res.status(200).json({ 
            responseCode:200,
            message: ' data not found' ,
        data:{}});
      }
      res.status(200).json({responseCode:200,
        message:"list of users",
         data: userData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = {
    createUserData,
    getUserData
  };
  

