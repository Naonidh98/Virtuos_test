import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Student Result Management</div>

      <div className="w-full my-12 flex justify-between">
        <button
          className="m-2 p-2 rounded bg-blue-500 text-white"
          onClick={() => {
            navigate("/result");
          }}
        >
          Result
        </button>
        <button
          className="m-2 p-2 rounded bg-blue-500 text-white"
          onClick={() => {
            navigate("/form");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
