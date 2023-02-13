const {Router}=require("express");
const fs=require("fs");
const bcrypt=require ("bcrypt")

const router=Router();


router.post("/", (req,res)=>{
    const {id, email,password} =req.body;
    const data =fs.readFileSync("users.json","utf-8");
    const parsedData = JSON.parse(data);
    const findUser = parsedData.users.find((user) =>user.email ===email);
    if (!findUser) {
        res.status(401).json({message:"Ийм хэрэглэгч олдсонгүй"})
    }

  const isCheck = bcrypt.compareSync(password,findUser.password);
  if(isCheck){
    res.status(200).json ({message:"амжилттай нэвтэрлэлээ", user:findUser});

  } else {res.status(401).json({message:"имэйл эсвэл нууц үг буруу байна", user:null})} 
}) 

module.exports.router;