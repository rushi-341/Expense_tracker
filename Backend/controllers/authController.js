const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const login = async(req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            res.status(400).json({
                success:false,
                message : "Email and password are required"
            })
        } 
        //check if user exists 
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
        //check if passwords are matching 
        const isMatched = await bcrypt.compare(password,user.password)
        if(!isMatched){
            res.status(400).json({
                success:false,
                message:"Invalid password"
            })
        }
        //create a token
        const token = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"1h"}
        )
        res.status(200).json({
            success:true,
            message:"Logged in successfully",
            token
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message : "Something went wrong"
        })
    }
}

const register = async(req,res)=>{
    const {name,email,password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const user = await User.create({
        name,email,password:hashedPassword
    })
    res.status(201).json({
        success : true,
        message : "Added user successfully",
        data : user
    })
}

module.exports = {login,register}