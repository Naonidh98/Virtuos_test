const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const { name, college, round1, round2, round3, techRound } = req.body;

    if (!name || !college || !round1 || !round2 || !round3 || !techRound) {
      return res.status(400).json({
        success: false,
        message: "Missing req",
      });
    }

    const total = round1 + round2 + round3 + techRound;

    const data = await Student.create({
      name,
      college,
      round1,
      round2,
      round3,
      techRound,
      total: total,
      result: total >= 35 ? true : false,
    });

    return res.status(200).json({
      success: true,
      message: "Entry created",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getStudentRank = async (req, res) => {
  try {
    const data = await Student.find({})
      .sort({ total: -1 })
      .select("name college result total rank")
      .exec();

    return res.status(200).json({
      success: true,
      message: "data fetched",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getStudenPassed = async (req, res) => {
  try {
    const data = await Student.find({ result: true })
      .sort({ total: -1 })
      .select("name college")
      .exec();

    return res.status(200).json({
      success: true,
      message: "data fetched",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getStudenFailed = async (req, res) => {
  try {
    const data = await Student.find({ result: false })
      .sort({ total: -1 })
      .select("name college")
      .exec();

    return res.status(200).json({
      success: true,
      message: "data fetched",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.evaluateRank = async (req, res) => {
  try {
    const data = await Student.find({})
      .sort({ total: -1 })
      .select("name college result total")
      .exec();

    const rankData = [];

    data.forEach((item, index) => {
      rankData.push({
        name: item.name,
        college: item.college,
        rank: index + 1,
      });
    });

    return res.status(200).json({
      success: true,
      message: "data fetched",
      data: rankData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
