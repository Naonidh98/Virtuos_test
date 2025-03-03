const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudentRank,
  getStudenPassed,
  getStudenFailed,
  evaluateRank,
} = require("../controllers/studentController");

router.post("/create", createStudent);
router.get("/rank", getStudentRank);
router.get("/failed", getStudenFailed);
router.get("/passed", getStudenPassed);
router.get("/rank/eval", evaluateRank);
module.exports = router;
