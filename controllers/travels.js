const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const router = Router();

const filePath="./travels.json";

const createTravel=(req,res)=>{
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("con", content);
    const data = JSON.parse(content);
    console.log("Data", data.datas);
    const newDatas = { ...req.body };
    data.datas.push(newDatas);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Ajilttai uusgelee", data: newDatas });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const getTravel=((req, res) => {
  try {
    const datas = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(datas);
    res.status(201).json({ datas: parsedData.datas });
  } catch (error) {
    console.log("ERR", error);
  }
});
const deleteTravel=(req,res) => {
  try {
    const datasData = fs.readFileSync(filePath, "utf-8");
    console.log("CC", datasData);
    const data = JSON.parse(datasData);
    console.log("DD", data);
    const findArray = data.datasData.filter((el) => el.id !== req.params.id);
    const deletedDatas = data.datasData.find((el) => el.id === req.params.id);
    if (!(findArray.length > 0)) {
      return res.status(404).json({ message: "not found", data: null });
    }
    data.datasData = findArray;

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "success", data: deletedDatas });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = {createTravel,deleteTravel,getTravel}
