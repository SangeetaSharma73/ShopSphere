import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

//Register
export const register = async (req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status().json({message:"All fields are required"})
    }
    const userExist = await User.findOne({email});
    if(userExist){
        return res.status(400).json({message:"User already exists"})
    }

    const user = await User.create({name,email,password});
    
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        token:generateToken(user._id),
    });
};

//login

export const login = async (req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"})
    }
    const user = await User.findOne({email});
    

    if(user && (await user.matchPassowrd(password))){

        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user._id),

        });


    }else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}