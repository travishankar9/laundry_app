const express = require("express");
const {
  getMachines,
  addMachine,
  updateMachine,
} = require("../controllers/machine.js");

const router = express.Router();
router.get("/", getMachines);
router.post("/new", addMachine);
router.patch("/:id", updateMachine);

module.exports = router;
