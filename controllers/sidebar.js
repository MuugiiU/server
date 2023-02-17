const fs = require("fs");

const filePath = "./data/sidebar.json";

const getSidebar = (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("Файл уншихад алдаа гарлаа");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    res.status(201).json({ sidebar: parsedData.sidebar });
  });
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const data = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(data);
  const findIndex = parsedData.travels.findIndex((el) => el.id === id);
  parsedData.travels[findIndex].title = title;
  fs.writeFileSync(filePath, JSON.stringify(parsedData));
  res.status(201).json({ message: "шинэ  өгөгдөл амжилттай солигдлоо" });
};

const deleteSidebar = (req, res) => {
  try {
    const travelsData = fs.readFileSync(filePath, "utf-8");
    console.log("h", travelsData);
    const data = JSON.parse(travelsData);
    console.log("travel", data);
    const findArr = data.travelsData.filter((el) => el.id !== req.params.id);
    const deleteSidebar = data.travelsData.find(
      (el) => el.id === req.params.id
    );
    if (!(findArr.length > 0)) {
      return res.status(404).json({ message: "not found", data: null });
    }
    data.travelsData = findArr;

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", data: deleteSidebar });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = { deleteSidebar, updateCategory, getSidebar };
