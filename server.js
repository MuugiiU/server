const express = require("express");
const cors = require("cors");
const fs = require("fs");
const {v4:uuidv4}= require("uuid");
const bcrypt = require("bcrypt");

const port =8009;
const server=express();
server.use (cors());
server.use(express.json());
server.get("/",(req,res)=>{
    res.send("huseltend amjilttai");
});
server.post ("/signup", (req, res) =>{
    const {name, role,email, password} =req.body;
    const data= fs.readFileSync("users.json", "utf-8");
    const parsedData = JSON.parse(data);
    const id = uuidv4();
    const salted = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password,salted);
    console.log(hashedPassword);
     const newUser ={ id, name , role, email, password:hashedPassword
    };
    parsedData.users.push(newUser);
    fs.writeFileSync("users.json",JSON.stringify(parsedData));
    res.status(201).json({message:"shine hereglegch amjilttai burtgelee"})
});
   
server.post("signin", (req,res)=>{
    const {id, email,password} =req.body;
    const data =fs.readFileSync("users.json","utf-8");
    const parsedData = JSON.parse(data);
    const findUser = parsedData.users.find((find) =>user.id ===id);
    if (!findUser) {
        res.status(401).json({message:"Iim hereglegch oldsongui"})
    }

  const isCheck = bcrypt.compareSync(password,findUser.password);
  if(isCheck){
    res.status(200).json ({message:"amjilttai nevterlee", user:findUser});

  } else {res.status(401).json({message:"email eswel password buruu baina", user:null})} 
}) 
server.get("/users",(req,res)=>{
    fs.readFile("users.json", "utf-8",(err,data)=>{
        if(err) {
            console.log("file unshihad aldaa garlaa")
            return;
        }
        console.log(data);
        const parsedData =JSON.parse(data);
        
        res.status(201).json({users: parsedData.users})
    })
})
server.get("/users/:id", (req,res)=>{
    const {id} =req.params;
    const data =fs.readFileSync("users.json","utf-8");
    const parsedData =JSON.parse(data);
    const user = parsedData.users.find((el)=>el.id===id);
    res.status(200).json({user})
})
server.put("/users/:id",(req,res)=>{
    const {id} =req.params;
    const {name}=req.body;
    const data = fs.readFileSync("users.json", "utf-8");
    const parsedData = JSON.parse(data);
    const findIndex = parsedData.users.findIndex((el)=>el.id===id);
    parsedData.users[findIndex].name =name;
    fs.writeFileSync("users.json",JSON.stringify(parsedData));
    res.status(201).json({message:"shine hereglegchiin ugugdul amjilttai soligdloo"})
});
server.delete("/users/:id",(req,res)=>{
    const {id}=req.params;
    const data = fs.readFileSync("users.json","utf-8");
    const parsedData =JSON.parse(data)
    const findIndex =parsedData.users.findIndex((el)=>el.id ===id);
    parsedData.users.splice(findIndex,1);
     fs.writeFileSync("users.json",JSON.stringify(parsedData))
     req.status(201).json({message:`${id} tai hereglegch amjilttai ustlaa`})
});
server.listen(port, () => {
    console.log(`Server is running at ${port}`);
  })