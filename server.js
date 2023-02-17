const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { title } = require("process");
const e = require("express");

const usersRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");
const travelsRoute = require("./routes/travels");
const sidebarRoute = require("./routes/sidebar");

const port = 8010;
const server = express();

// middlewares
server.use(cors());
server.use(express.json());
server.get("/", (req, res) => {
  res.send("хүсэлт амжилттай");
});
server.use("/users", usersRoute);
server.use("/categories", categoriesRoute);
server.use("/travels", travelsRoute);
server.use("/sidebar", sidebarRoute);

server.listen(port, () => {
  console.log(`Сервер ажиллаж байна ${port}`);
});
