const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { config } = require("process");

const getAllUsers =
  ("/",
  async (req, res) => {
    connection.query("SELECT * FROM  users", (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "azure server huselt amjilttai", data: result });
    });
  });

const getUser =
  ("/:id",
  async (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM users WHERE aid=${id}`, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(200).json({
        message: "azure server huselt amjilttai" + req.params.id,
        data: result,
      });
    });
  });
const createUser =
  ("/",
  async (req, res) => {
    connection.query(
      `INSERT INTO users VALUES(${req.body.aid},"${req.body.name}","${req.body.ovog}")`,
      (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
          return;
        }
        res
          .status(200)
          .json({ message: "azure server huselt amjilttai", data: result });
      }
    );
  });
const updateUser =
  ("/:id",
  async (req, res) => {
    const id = req.params.id;

    connection.query(
      `UPDATE users SET name="${req.body.name}",ovog="${req.body.ovog}" WHERE aid=${id}`,
      (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
          return;
        }
        res
          .status(200)
          .json({ message: "azure server huselt amjilttai", data: result });
      }
    );
  });
const deleteUser =
  ("/:id",
  async (req, res) => {
    const id = req.params.id;

    connection.query(`DELETE users  WHERE aid=${id}`, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "azure server huselt amjilttai", data: result });
    });
  });

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
