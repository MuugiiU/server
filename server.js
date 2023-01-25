const express = require("express");
const server=express();
server.get("/",(req,res)=>{
    res.send("huseltend amjilttai");
});
server.listen(8008,()=>{
    console.log("server aslaa");
});