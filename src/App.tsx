import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
    </Router>
  );
};

export default App;
