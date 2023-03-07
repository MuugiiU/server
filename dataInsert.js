const { connection } = require("./config/mysql-config");
const fs = require("fs");

console.log("Working");

// const insertIntoUser = (users, data) => {
//   //   return `INSERT INTO  users (id, name, email, password, role) VALUES ${data};`;
//   connection.query(
//     `INSERT INTO users (id, name, email, password, role) VALUES ${data};`,
//     (err, res) => {
//       if (err) {
//         console.log("EROR-----", err);
//         return;
//       }
//       console.log("Success", res);
//     }
//   );
// };

// const content = fs.readFileSync("./data/users.json", "UTF8");

// const datas = JSON.parse(content).users;

// const insertData = datas
//   .map(
//     (data) =>
//       `(null, "${data.name}", "${data.email}", "${data.password}", "USER")`
//   )
//   .join();

// insertIntoUser("users", insertData);

// const insertTravel = (travels, data) => {
//   //   return `INSERT INTO  users (id, name, email, password, role) VALUES ${data};`;
//   connection.query(
//     `INSERT INTO travels (id,cat_id, title, images, detail,price,location,day ) VALUES ${data};`,
//     (err, res) => {
//       if (err) {
//         console.log("EROR-----", err);
//         return;
//       }
//       console.log("Success", res);
//     }
//   );
// };

// const contentTravel = fs.readFileSync("./data/travels.json", "utf-8");

// const traveldatas = JSON.parse(contentTravel).travels;

// const insertTravelData = traveldatas
//   .map(
//     (data) =>
//       `(null, "${data.id}", "${data.title}", "${data.imgUTL}","${data.category}","${data.price}","${data.bairshil}", "${data.day}")`
//   )
//   .join();

// insertTravel("travels", insertTravelData);
// console.log(insertTravelData);

const insertTravel = (travels, data) => {
  //   return `INSERT INTO  users (id, name, email, password, role) VALUES ${data};`;
  connection.query(
    `INSERT INTO travels (id,cat_id, title, images, detail,price,location,day ) VALUES ${data};`,
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

const traveldatas = JSON.parse(contentTravel).travels;

const insertTravelData = traveldatas
  .map(
    (data) =>
      `(null, "${data.id}", "${data.title}", "${data.imgUTL}","${data.category}","${data.price}","${data.bairshil}", "${data.day}")`
  )
  .join();

insertTravel("travels", insertTravelData);
console.log(insertTravelData);
