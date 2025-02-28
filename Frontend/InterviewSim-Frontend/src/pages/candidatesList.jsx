import { useNavigate } from "react-router-dom";
import "../styles/candidatesList.css";  

const CandidatesList = () => {
  const navigate = useNavigate();

  // Sample candidates data (replace with API call later)
  const candidates = [
    { id: 1, name: "John Doe", experience: "3 years", resume: "john_resume.pdf" },
    { id: 2, name: "Jane Smith", experience: "5 years", resume: "jane_resume.pdf" },
    { id: 3, name: "Neha S Chakravarthi", experience: "2 years", resume: "neha_resume.pdf" },
    { id: 5, name: "Jayashri", experience: "5 years", resume: "jayashri_resume.pdf" },
    { id: 4, name: "Kiran", experience: "5 years", resume: "kiran_resume.pdf" },
    { id: 6, name: "Lakshman", experience: "5 years", resume: "lakshman_resume.pdf" },
    { id: 7, name: "Ashwin", experience: "10 years", resume: "ashwin_resume.pdf" },
    { id: 2, name: "Varnika", experience: "1 year", resume: "varnika_resume.pdf" },

  ];

  return (
    <>
    <title>Candidates List</title>
    
    <div className="candidates-container">
      <h2 class='list_'>Candidate List</h2>

      <div className="candidates-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <h3>{candidate.name}</h3>
            <p class='Experience'>Experience: {candidate.experience}</p>
            <button onClick={() => navigate(`/videoInterview?candidateId=${candidate.id}`)}>
              Start Interview
            </button>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default CandidatesList;
