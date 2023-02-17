const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const router = Router();

const filePath = "./data/travels.json";

const getAllTravel = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Файл уншихад алдаа гарлаа");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    res.status(201).json({ travels: parsedData.travels });
  });
};

const createTravel = (req, res) => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("con", content);
    const data = JSON.parse(content);
    console.log("Data", data.travels);
    const newDatas = { ...req.body };
    data.travels.push(newDatas);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Ajilttai uusgelee", data: newDatas });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const getTravel = (req, res) => {
  try {
    const datas = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(datas);
    res.status(201).json({ travels: parsedData.travels });
  } catch (error) {
    console.log("ERR", error);
  }
};

const updateTravel = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(data);
  const findIndex = parsedData.travels.findIndex((el) => el.id === id);
  pars;
};

const deleteTravel = (req, res) => {
  try {
    const travelsData = fs.readFileSync(filePath, "utf-8");
    console.log("CC", travelsData);
    const data = JSON.parse(travelsData);
    console.log("DD", data);
    const findArray = data.travelsData.filter((el) => el.id !== req.params.id);
    const deletedTrevals = data.travelsData.find(
      (el) => el.id === req.params.id
    );
    if (!(findArray.length > 0)) {
      return res.status(404).json({ message: "not found", data: null });
    }
    data.travelsData = findArray;

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "success", data: deletedtravels });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = {
  createTravel,
  deleteTravel,
  getTravel,
  updateTravel,
  getAllTravel,
};
