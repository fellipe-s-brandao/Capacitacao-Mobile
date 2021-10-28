const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = mongoose.model("User");
const { jwtkey } = require("../../../keys");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === MyApp "...token"
  if(!authorization){
      return res.status(401).send({error:"Voce deve fazer o login"})
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, jwtkey, async (err,payload) => {
      if(err){
        return res.status(401).send({error:"Voce deve fazer o login"})
      }

      const {userId} = payload;
      const user = await User.findById(userId);
      req.user = user;
      next();
  })
};
