import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createEntry } from "../services/operations";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [round1, setR1] = useState("");
  const [round2, setR2] = useState("");
  const [round3, setR3] = useState("");
  const [techRound, setTech] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const data = {
      name,
      college,
      round1: Number(round1),
      round2: Number(round2),
      round3: Number(round3),
      techRound: Number(techRound),
    };

    console.log("Submitted Data:", data);

    dispatch(createEntry(data));
  }

  return (
    <div className="p-4">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>

      <h2 className="text-xl font-bold mb-4">Student Form</h2>
      <form onSubmit={submitHandler} className="space-y-3">
        {/* Name Field */}
        <div className="flex gap-2">
          <label htmlFor="name" className="w-32">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* College Name */}
        <div className="flex gap-2">
          <label htmlFor="college" className="w-32">
            College:
          </label>
          <input
            id="college"
            type="text"
            placeholder="Enter college name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Round 1 */}
        <div className="flex gap-2">
          <label htmlFor="r1" className="w-32">
            Round 1:
          </label>
          <input
            id="r1"
            type="number"
            placeholder="Enter round1 score"
            value={round1}
            onChange={(e) => setR1(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Round 2 */}
        <div className="flex gap-2">
          <label htmlFor="r2" className="w-32">
            Round 2:
          </label>
          <input
            id="r2"
            type="number"
            placeholder="Enter round2 score"
            value={round2}
            onChange={(e) => setR2(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Round 3 */}
        <div className="flex gap-2">
          <label htmlFor="r3" className="w-32">
            Round 3:
          </label>
          <input
            id="r3"
            type="number"
            placeholder="Enter round3 score"
            value={round3}
            onChange={(e) => setR3(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Technical Round */}
        <div className="flex gap-2">
          <label htmlFor="techRound" className="w-32">
            Technical Round:
          </label>
          <input
            id="techRound"
            type="number"
            placeholder="Enter tech round score"
            value={techRound}
            onChange={(e) => setTech(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
