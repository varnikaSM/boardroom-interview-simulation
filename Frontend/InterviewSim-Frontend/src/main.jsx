import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import LoginInterviewer from "./pages/loginInterviewer";
import InterviewerDashboard from "./pages/InterviewerDashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/interviewerDashboard" element={<InterviewerDashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/loginInterviewer" element={<LoginInterviewer />} />

      </Routes>
    </Router>
  </React.StrictMode>
);
