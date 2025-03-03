import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { getResult } from "../services/operations";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getResult(setData));
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Student Results</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">College</th>
              <th className="border border-gray-300 p-2">Total</th>
              <th className="border border-gray-300 p-2">Result</th>
              <th className="border border-gray-300 p-2">Rank</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((student, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{student.name}</td>
                  <td className="border border-gray-300 p-2">
                    {student.college}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {student.total}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 ${
                      student.result ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {student.result ? "Pass" : "Fail"}
                  </td>
                  <td
                    className={`border border-gray-300 p-2 ${
                      student.result ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {student.rank}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
