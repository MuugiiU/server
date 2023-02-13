const express = require("express");
const cors = require("cors");
const fs = require("fs");
const {v4:uuidv4}= require("uuid");
const bcrypt = require("bcrypt");
const { title } = require("process");
const e = require("express");


const usersRoute=require("./routes/users");
const categoriesRoute=require("./routes/categories");
const signinRoute=require("./routes/signin");
const signupRoute=require("./routes/signup");

const port = 8010;
const server=express();

// middlewares
server.use (cors());
server.use(express.json());
server.get("/",(req,res)=>{
    res.send("хүсэлт амжилттай");
});
server.use("/users",usersRoute);
server.use("/categories",categoriesRoute);
server.use("/signin",signinRoute);
server.use("/signup",signupRoute);
 
server.listen(port, () => {
    console.log(`Сервер ажиллаж байна ${port}`);
  })