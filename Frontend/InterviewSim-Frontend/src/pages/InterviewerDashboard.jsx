import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InterviewerDashboard.css"; // Import the CSS file

const InterviewerDashboard = () => {
  const navigate = useNavigate();

  // Sample data for demonstration
  const candidates = [
    { id: 1, name: "John Doe", status: "Pending" },
    { id: 2, name: "Jane Smith", status: "Completed" },
    { id: 3, name: "Alice Johnson", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Interviewer Dashboard</h1>
        <button className="logout-button" onClick={() => alert("Logged out!")}>
          Logout
        </button>
      </header>

      <section className="overview-panel">
        <div className="card">
          <h2>Total Candidates</h2>
          <p>{candidates.length}</p>
        </div>
        <div className="card">
          <h2>Pending Interviews</h2>
          <p>{candidates.filter((c) => c.status === "Completed").length}</p>
        </div>
        <div className="card">
          <h2>Completed Interviews</h2>
          <p>{candidates.filter((c) => c.status === "Completed").length}</p>
        </div>
      </section>

      <section className="candidate-list-container">
        <h2>Candidate List</h2>
        <div className="candidate-list">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <h3>{candidate.name}</h3>
              <p>Status: {candidate.status}</p>
              <button
                onClick={() => navigate(`/interview/${candidate.id}`)}
                disabled={candidate.status === "Completed"}
              >
                {candidate.status === "Completed" ? "Interview Done" : "Start Interview"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InterviewerDashboard;
