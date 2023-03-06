const fs = require("fs");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Azure_travels_db",
});

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

// const getUser = (req, res) => {
//   const id = req.params.id;
//   connection.query(`SELECT * FROM users WHERE id='${id}'`, (err, result) => {
//     if (err) {
//       res.status(400).json({ message: err.message });
//       return;
//     }
//     res.status(200).json({
//       message: "azure server huselt amjilttai",
//       data: result,
//     });
//   });
// };
// const createUser = (req, res) => {
//   connection.query(
//     `INSERT INTO users VALUES(${updateQuery})`,
//     (err, result) => {
//       if (err) {
//         res.status(400).json({ message: err.message });
//         return;
//       }
//       res
//         .status(200)
//         .json({ message: "azure server huselt amjilttai", data: result });
//     }
//   );
// };
// //  update hiihdee huvisagchaar utgaa damjuulan objectees array bolgon map-aar guilgej bg heseg

// const updateUser = (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   const { connection } = require("../config/mysql-config");

//   const keys = Object.keys(body); // keys:["name", "ovog"]
//   const values = Object.values(body); //["naraa","saraa"]
//   const huvsaigch = keys.map((key) => `${key}='${body[key]}'`).join();

//   connection.query(
//     `UPDATE users SET ${huvsaigch} WHERE id='${id}'`,
//     (err, result) => {
//       if (err) {
//         res.status(400).json({ message: err.message });
//         return;
//       }
//       res
//         .status(200)
//         .json({ message: "azure server huselt amjilttai", data: result });
//     }
//   );
// };
// const deleteUser = (req, res) => {
//   const id = req.params.id;

//   connection.query(`DELETE users  WHERE id='${id}'`, (err, result) => {
//     if (err) {
//       res.status(400).json({ message: err.message });
//       return;
//     }
//     res
//       .status(200)
//       .json({ message: "azure server huselt amjilttai", data: result });
//   });
// };

// module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };
module.exports = { getAllUsers };
