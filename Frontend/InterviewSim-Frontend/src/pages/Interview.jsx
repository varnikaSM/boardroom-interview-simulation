import React from "react";
import "../styles/interview.css"; // Import CSS

const Interview = () => {
  return (
    <div className="interview-container">
      <h2>Interview in Progress</h2>
      <p>Answer the questions clearly. Your responses are being analyzed.</p>
      <button className="next-question">Next Question</button>
    </div>
  );
};

export default Interview;
