const { connection } = require("../config/mysql-config");

const convert = (body) => {
  const keys = Object.keys(body); // keys:["name", "ovog"]
  const values = Object.values(body); //["naraa","saraa"]
  const huvsaigch = keys.map((key) => `${key}='${body[key]}'`).join();
  return huvsaigch;
};
// const updateQuery = convert(body);

const getAllCaterory =
  ("/",
  async (req, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).json({ message: "server huselt amjilttai", data: result });
  });
const getCategory =
  ("/:id",
  async (req, res) => {
    const id = req.params.id;
    connection.query(`SELECT * FROM caregory WHERE id=${id}`, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
        return;
      }
      res
        .status(200)
        .json({ message: "azure server amjilttai" + id, data: result });
    });
  });
const createCategory =
  ("/",
  async (req, res) => {
    connection.query(
      `INSERT INTO category VALUES(${updateQuery})`,
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

const updateCategory =
  ("/:id",
  async (req, res) => {
    const { id } = req.params.id;
    connection.query(
      `UPDATE category SET ${updateQuery} WHERE id=${id}`,
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
// const id = req.params.id;
const deleteCategory =
  ("/:id",
  async (req, res) => {
    connection.query(`DELETE category WHERE id=${id}`, (err, result) => {
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
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
