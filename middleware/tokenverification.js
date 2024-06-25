const jwt = require("jsonwebtoken");
const SecreateKey = require("../config/auth");

let userVerify = async (req, res, next) => {
    try {
      let token = req.headers.authorization;
  
      if (!token || token === undefined || token === null) {
       
        return res.status(400).send({
            responseCode:400,
          message: "Token is not valid",
          error: "Token is missing",
        });
      } else {
        let getToken = token.split(" ")[1];

        if (!getToken) {
          return res.status(400).send({
            message: "Provide a proper token",
          });
        }
        const decode = jwt.verify(getToken, SecreateKey.secreateKey);
        req.userId = decode;
        // console.log(decode)
  
        next();
      }
    } catch (error) {
      // Correct the status function to status(500).send
      return res.status(500).send({
        message: "Server error",
        error: error.message,
      });
    }
  };
  
  module.exports = { userVerify };
  