import express from "express";
import path from "path";
import userRouter from "./routes/userRouter.js";
import hostRouter from "./routes/hostRouter.js";
import pathUtil from "./utils/pathUtil.js";

const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.use(express.urlencoded({ extended: true }))

app.use(userRouter)
app.use("/host/",hostRouter)

app.use((req , res , next)=>{
    res.status(404).sendFile(path.join(pathUtil, 'views', '404.html'))
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})