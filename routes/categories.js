const {Router} =require("express");

const { createCategory,deleteCategory, getCategory } = require("../controllers/categories");
const router =Router();

router.post("/",createCategory)
 router.get("/",getCategory)
 router.delete("/:id", deleteCategory);
  //End of Category
  module.exports = router;