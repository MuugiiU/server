const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { title } = require("process");
const e = require("express");
const mysql= require("mysql2");

const usersRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");
const travelsRoute = require("./routes/travels");
const wishlistRoute = require("./routes/wishlist");

const port = 8010;
const server = express();
const connection=mysql.createConnection({host:"localhost",port:3306, user:"root",password:"",database:"azure_db"})

// middlewares
server.use(cors());
server.use(express.json());


server.use("/users", usersRoute);
server.use("/categories", categoriesRoute);
server.use("/travels", travelsRoute);
server.use("/wishlist", wishlistRoute);

server.get("/", async (req,res)=>{
  connection.query("SELECT * FROM  azure_user",(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai", data:result})
  });

})
 
server.get("/:id", async(req,res)=>{
  const id =req.params.id;
   connection.query(`SELECT * FROM azure_user WHERE aid=${id}`,(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai" + req.params.id, data:result})
   })
})
server.post("/", async(req,res)=>{
 
 
   connection.query(`INSERT INTO azure_user VALUES(${req.body.aid},"${req.body.name}","${req.body.ovog}")`,(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai" , data:result})
   })
})
server.put("/:id", async(req,res)=>{
  const id =req.params.id;
 
   connection.query(`UPDATE azure_user SET name="${req.body.name}",ovog="${req.body.ovog}" WHERE aid=${id}`,(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai", data:result})
   })
})
server.delete("/:id", async(req,res)=>{
  const id =req.params.id;
 
   connection.query(`DELETE azure_user  WHERE aid=${id}`,(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai" , data:result})
   })
})
server.get("/:id", async(req,res)=>{
  const id =req.params.id;
   connection.query(`SELECT * FROM azure_user WHERE aid=${id}`,(err,result)=>{
    if(err) {
      res.status(400).json({message:err.message})
      return;
    }
    res.status(200).json({message:"azure server huselt amjilttai" + req.params.id, data:result})
   })
})
server.listen(port, () => {
  console.log(`Сервер ажиллаж байна ${port}`);
});
