const connection = require("../config/mysql-config");

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
  connection.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
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
  const body = req.body;
  const keys = Object.keys(body); // keys:["name", "ovog"]
  const uusgegch = keys.map((key) => `${key}='${body[key]}'`).join();

  connection.query(`INSERT INTO users VALUES(${uusgegch})`, (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res
      .status(200)
      .json({ message: "azure server huselt amjilttai", data: result });
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  // //  update hiihdee huvisagchaar utgaa damjuulan objectees array bolgon map-aar guilgej bg heseg
  const keys = Object.keys(body); // keys:["name", "ovog"]
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
