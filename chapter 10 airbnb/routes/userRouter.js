import express from "express";
import rootDir from "../utils/pathUtil.js";
import path from "path";

const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html'))
})

export default userRouter;