const fs = require("fs");
const {v4:uuidv4} =require("uuid");
const bcrypt=require ("bcrypt");


const filePath="./data/categories.json";

const createCategory=(req,res)=>{
    try {
        const content=fs.readFileSync(filePath,"utf-8");
        console.log("con", content);
        const data =JSON.parse(content);
        console.log("Data",data.categories);
        const newData={...req.body}
        data.categories.push(newData);
        fs.writeFileSync(filePath,JSON.stringify(data));
        res.status(201).json({message:"Amjilttai uusgelee.", data:newData})    
    } catch(err){
        return res.status(400).json ({message:err.message});
    }
}
const getCategory=(req,res)=>{
    fs.readFile(filePath, "utf-8",(err,data)=>{
        if(err) {
            console.log("Файл уншихад алдаа гарлаа")
            return;
        }
        console.log(data);
        const parsedData =JSON.parse(data);
        
        res.status(201).json({categories: parsedData.categories})
    })
}




const deleteCategory=(req,res)=>{  try {
    const categoriesData = fs.readFileSync(filePath, "utf-8");
    console.log("CC", categoriesData);
    const data = JSON.parse(categoriesData);
    console.log("DD", data);
    const findArr = data.categoriesData.filter((el) => el.id !== req.params.id);
    const deletedCategory = data.categoriesData.find(
      (el) => el.id === req.params.id
    );

    if (!(findArr.length > 0)) {
      return res.status(404).json({ message: "not found", data: null });
    }

    data.categoriesData = findArr;

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "success", data: deletedCategory });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }}
  module.exports={ getCategory,createCategory,deleteCategory}