import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/resumeUpload.css";

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("Uploaded File:", selectedFile);
      navigate("/interview"); // Navigate to Interview Simulation
    } else {
      alert("Please upload a resume!");
    }
  };

  return (
    <div className="resume-upload-container">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleSubmit} className="resume-form">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
        <button type="submit">Proceed to Interview</button>
      </form>
    </div>
  );
};

export default ResumeUpload;
