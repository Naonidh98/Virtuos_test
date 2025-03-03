const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 30,
    required: true,
  },
  college: {
    type: String,
    maxLength: 30,
    required: true,
  },
  round1: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  round2: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  round3: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  techRound: {
    type: Number,
    min: 0,
    max: 20,
    default: 0,
  },
  total: {
    type: Number,
    min: 0,
    max: 50,
    default: 0,
  },
  result: {
    type: Boolean,
    required: true,
  },
  rank: {
    type: Number,
    default: 0,
  },
});

studentSchema.post("save", async function () {
  const students = await this.constructor.find().sort({ total: -1 });

  const bulkOps = students.map((student, index) => ({
    updateOne: {
      filter: { _id: student._id },
      update: { $set: { rank: index + 1 } },
    },
  }));

  if (bulkOps.length) {
    await this.constructor.bulkWrite(bulkOps);
  }
});

module.exports = mongoose.model("Student", studentSchema);
