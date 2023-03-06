const { connection } = require("./config/mysql-config");
const fs = require("fs");

console.log("Working");

const insertIntoUser = (users, data) => {
  //   return `INSERT INTO  users (id, name, email, password, role) VALUES ${data};`;
  connection.query(
    `INSERT INTO users (id, name, email, password, role) VALUES ${data};`,
    (err, res) => {
      if (err) {
        console.log("EROR-----", err);
        return;
      }
      console.log("Success", res);
    }
  );
};

const content = fs.readFileSync("./data/users.json", "UTF8");

const datas = JSON.parse(content).users;

const insertData = datas
  .map(
    (data) =>
      `(null, "${data.name}", "${data.email}", "${data.password}", "USER")`
  )
  .join();

insertIntoUser("users", insertData);

const insertTravel = (tableName, data) => {
  //   return `INSERT INTO  users (id, name, email, password, role) VALUES ${data};`;
  connection.query(
    `INSERT INTO travles (id,cat_id, title, images, detail, price,location,day ) VALUES ${data};`,
    (err, res) => {
      if (err) {
        console.log("EROR-----", err);
        return;
      }
      console.log("Success", res);
    }
  );
};

const contentTravel = fs.readFileSync("./data/travels.json", "utf-8");

const traveldatas = JSON.parse(contentTravel).travles;

const insertTravleData = datas
  .map(
    (data) =>
      `(null, "${data.id}", "${data.title}", "${data.imgUTL}","${data.category}","${data.price}","${data.bairshil}", "${data.day}")`
  )
  .join();

insertTravel("travels", insertTravleData);
// console.log(qr);
