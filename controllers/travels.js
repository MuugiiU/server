const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const router = Router();
const connection = require("../config/mysql-config");

const filePath = "./data/travels.json";

const getAllTravel =
  ("/",
  async (req, res) => {
    connection.query("SELECT * FROM travels", (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "server huselt amjilttai", data: result });
    });
  });
const getTravel = (req, res) => {
  try {
    const datas = fs.readFileSync(filePath, "utf-8");
    const parsedData = JSON.parse(datas);
    res.status(201).json({ travels: parsedData.travels });
  } catch (error) {
    console.log("ERR", error);
  }
};
const createTravel =
  ("/",
  async (req, res) => {
    connection.query(
      `INSERT INTO travels VALUES(${updateQuery})`,
      (err, result) => {
        if (err) {
          res.status(400).json({ message: err, message });
          return;
        }
        res
          .status(200)
          .json({ message: "server huselt amjilttai", data: result });
      }
    );
  });

const updateTravel = (req, res) => {
  const { id } = req.params.id;
  connection.query(
    `UPDATE travels SET ${updateQuery} WHERE id=${id}`,
    (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "server huselt amjilttai", data: result });
    }
  );
};

const deleteTravel =
  ("/:id",
  async (req, res) => {
    connection.query(`DELETE travels WHERE id=${id}`, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "server huselt amjilttai", data: result });
    });
  });
module.exports = {
  createTravel,
  deleteTravel,
  getTravel,
  updateTravel,
  getAllTravel,
};
