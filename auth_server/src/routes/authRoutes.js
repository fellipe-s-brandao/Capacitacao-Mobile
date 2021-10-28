const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const { jwtkey } = require("../../keys")

const router = express.Router();
const User = mongoose.model("User");

router.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = new User({ email, name, password });
    await user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token});
  } catch (err) {
    console.error("Erro ao cadastrar ", err);
    return res.status(422).send("Erro ao cadastrar");
  }
});

router.post('/signin', async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).send({error: "Deve inserir email e senha1"})
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(422).send({error: "Deve inserir email e senha2"})
    }
    try {
        user.comparePassword(password);
        const token = jwt.sign({userId:user._id},jwtkey);
        res.send({token});
    }catch(err){
        return res.status(422).send({error: "Deve inserir email e senha3"})
    }
    
})

module.exports = router;
