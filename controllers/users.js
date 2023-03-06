const fs = require("fs");

const connection = require("./config/mysql-config");

const getAllUsers =
  ("/",
  async (req, res) => {
    connection.query(`SELECT * FROM  users`, (err, result) => {
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
    connection.query(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res.status(200).json({
        message: "azure server huselt amjilttai",
        data: result,
      });
    });
  });
const createUser =
  ("/",
  async (req, res) => {
    connection.query(
      `INSERT INTO users VALUES(${updateQuery})`,
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
//  update hiihdee huvisagchaar utgaa damjuulan objectees array bolgon map-aar guilgej bg heseg

const convertTostr = (body) => {
  const keys = Object.keys(body); // keys:["name", "ovog"]
  const values = Object.values(body); //["naraa","saraa"]
  const huvsaigch = keys.map((key) => `${key}='${body[key]}'`).join();
  return huvsaigch;
};
const updateQuery = convertTostr(body);
const updateUser =
  ("/:id",
  async (req, res) => {
    const id = req.params.id;

    connection.query(
      `UPDATE users SET ${updateQuery} WHERE id=${id}`,
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

    connection.query(`DELETE users  WHERE id=${id}`, (err, result) => {
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
