const { Router } = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const {
  deleteSidebar,
  updateSidebar,
  getSidebar,
} = require("../controllers/sidebar");

const router = Router();

router.get("/", getSidebar);
router.put("/:id", updateSidebar);
router.delete("/:id", deleteSidebar);
module.exports = router;
