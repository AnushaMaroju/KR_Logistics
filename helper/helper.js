let jwt = require("jsonwebtoken");
const authorizationValues = require("../config/auth");





let token = (userId, secreateKey) => {
  const token = jwt.sign(userId, authorizationValues.secreateKey);

  return token;
};


let availableTimeAndDate = () => {
    currentTime = new Date();
  
    let year = currentTime.getFullYear();
  
    let getMonth = currentTime.getMonth() + 1;
  
    let month = ("0" + getMonth).slice(-2);
  
    let date = ("0" + currentTime.getDate()).slice(-2);
  
    let hours = currentTime.getHours();
  
    let minutes = currentTime.getMinutes();
  
    let seconds = currentTime.getSeconds();
  
    return `${date}-${month}-${year}`;
  };


  let timeWithDate = () => {
    currentTime = new Date();
  
    let year = currentTime.getFullYear();
  
    let getMonth = currentTime.getMonth() + 1;
  
    let month = ("0" + getMonth).slice(-2);
  
    let date = ("0" + currentTime.getDate()).slice(-2);
  
    let hours = currentTime.getHours();
  
    let minutes = currentTime.getMinutes();
  
    let seconds = currentTime.getSeconds();
  
    return `${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };


  module.exports ={
    availableTimeAndDate
    ,timeWithDate,
    token

  }