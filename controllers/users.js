<<<<<<< HEAD

const {connection}= require("../config/mysql-config")


=======
const { connection } = require("../config/mysql-config");
const { convertQueryStr } = require("../utils/convertQuery");
const bcrypt = require("bcrypt");
>>>>>>> 397b9ac398669b39cdea9ab8f8778bd600b6d064

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
<<<<<<< HEAD
  connection.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
=======
  const query = `SELECT * FROM users WHERE id=?`;
  connection.query(query, [id], (err, result) => {
>>>>>>> 397b9ac398669b39cdea9ab8f8778bd600b6d064
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
<<<<<<< HEAD
  const body = req.body;
  const keys = Object.keys(body); // keys:["name", "ovog"]
  const values = Object.values(body); //["naraa","saraa"]
  const huvsaigch = keys.map((key) => `${key}='${body[key]}'`).join();
  connection.query(
    `INSERT INTO users VALUES(${huvsaigch})`,
=======
  const { name, email, password } = req.body;
  const salted = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salted);
  const phoneNumber = 88888888;
  console.log(name);
  const query = `INSERT INTO users (id, name, email, password, phone_number, profileImg) VALUES(null,?,?,?,?,?)`;
  connection.query(
    query,
    [name, email, hashedPassword, phoneNumber, "url"],
>>>>>>> 397b9ac398669b39cdea9ab8f8778bd600b6d064
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
<<<<<<< HEAD
//  update hiihdee huvisagchaar utgaa damjuulan objectees array bolgon map-aar guilgej bg heseg

const updateUser = (req, res) => {
  const id = req.params.id;
  const body = req.body;
 

  const keys = Object.keys(body); // keys:["name", "ovog"]
  const values = Object.values(body); //["naraa","saraa"]
  const huvsaigch = keys.map((key) => `${key}='${body[key]}'`).join();

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

=======

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
>>>>>>> 397b9ac398669b39cdea9ab8f8778bd600b6d064
