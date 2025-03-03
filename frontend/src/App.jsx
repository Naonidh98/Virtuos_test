import React from "react";

import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Result from "./pages/Result";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<div>404 / Not found</div>} />
      </Routes>
    </div>
  );
};

export default App;
