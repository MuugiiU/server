const { connection } = require("../config/mysql-config");
const { convertQueryStr } = require("../utils/convertQuery");
const bcrypt = require("bcrypt");

const getAllUsers = (req, res) => {
  connection.query(`SELECT * FROM  users`, (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }

    res
      .status(200)
      .json({ message: "azure server huselt amjilttai", data: result });
  });
};

const getUser = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM users WHERE id=?`;
  connection.query(query, [id], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(200).json({
      message: "azure server huselt amjilttai",
      data: result,
    });
  });
};
const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const salted = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salted);
  const phoneNumber = 88888888;
  console.log(name);
  const query = `INSERT INTO users (id, name, email, password, phone_number, profileImg) VALUES(null,?,?,?,?,?)`;
  connection.query(
    query,
    [name, email, hashedPassword, phoneNumber, "url"],
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
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const huvsaigch = convertQueryStr(req.body);

  connection.query(
    `UPDATE users SET ${huvsaigch} WHERE id='${id}'`,
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
};
const deleteUser = (req, res) => {
  const id = req.params.id;

  connection.query(`DELETE users  WHERE id='${id}'`, (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res
      .status(200)
      .json({ message: "azure server huselt amjilttai", data: result });
  });
};

module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
