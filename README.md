# Virtuos_test

# Student Management 
using MERN Stack

change directory to frontend <br/>
 cd frontend <br/>
 npm i <br/>
 npm run dev

<br/>
change directory to backend <br/>
 cd backend <br/>
 npm i <br/>
 npm run start

----------------------------------------

# Model Schema
```const mongoose = require("mongoose");

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
```
![image](https://github.com/user-attachments/assets/009784ad-d437-47d0-ba75-c9cb83af1c3c)


-------------------------------------

# Api 
1. Create Student entry
   emdpoint : POST "http://localhost:8080/api/v1/create"

![image](https://github.com/user-attachments/assets/7d4870aa-7828-4b87-a896-e605e99b0768)

-----------------

2. Display result
   emdpoint : GET "http://localhost:8080/api/v1/rank"
![image](https://github.com/user-attachments/assets/0c51025f-92e4-4c70-a13f-e7a914cea217)


   ---------------

4. Display passed student
   emdpoint : GET "http://localhost:8080/api/v1/passed"

 ![image](https://github.com/user-attachments/assets/1d6af014-d076-4095-9987-af32d1e9ea13)



   ---------------

6. Display failed student
   emdpoint : GET "http://localhost:8080/api/v1/failed"
   ![image](https://github.com/user-attachments/assets/ca6cb766-c1af-486a-8e93-67edfa6a4144)


   --------------
#Frontend
Calling from frontend to database

1. Home Page
![image](https://github.com/user-attachments/assets/2cdb0c65-90f2-422e-a34f-82d3c3d2dfe6)

---
2. Form Page
![image](https://github.com/user-attachments/assets/6ee00178-e465-446e-88aa-66d70426b573)

---

3. Result Page
![image](https://github.com/user-attachments/assets/8872f703-2f1f-42fe-bc72-d4c4d70cab9f)





