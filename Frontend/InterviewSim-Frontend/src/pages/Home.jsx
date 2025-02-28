import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";  
import Navbar from "../components/navbar";
import "../styles/home.css";
import interviewImage from "../assets/HomePagePic.jpeg"; 

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <title>Home</title>
      <Navbar />

      <div className="home-container">
        
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="content">
            <div className="image-container">
              <img src={interviewImage} alt="Interview Simulation" />
            </div>
            <div className="text-container">
              <h1>Boardroom Interview Simulation</h1>
              <p>Prepare for your next interview like a pro.</p>
              
              <div className="role-buttons">
                <button className="role-btn" onClick={() => navigate("/loginInterviewer")}>
                  Join as an Interviewer
                </button>
                <button className="role-btn" onClick={() => navigate("/interviewee")}>
                  Join as an Interviewee
                </button>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <Link to="features" smooth={true} duration={800}>▼ Scroll Down ▼</Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <h2 className="heading">Features</h2>
          <div className="features-grid">
            <div className="feature-item">🎯 AI-generated questions</div>
            <div className="feature-item">📝 Resume-based evaluation</div>
            <div className="feature-item">📊 AI-driven feedback</div>
            <div className="feature-item">🎤 Real-time interview simulation</div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="section">
          <h2 className="heading">How It Works</h2>
          <div className="steps">
            <div className="step">1️⃣ Upload Candidate’s Resume 📄</div>
            <div className="step">2️⃣ AI-Generated Questions 🤖❓</div>
            <div className="step">3️⃣ Simulated Boardroom Interview 🎤</div>
            <div className="step">4️⃣ AI-Powered Evaluation 📊 </div>
            <div className="step">5️⃣ Make Data-Driven Hiring Decisions ✅ </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="heading">About</h2>
          <div className="about-container">
            <p className="aboutText">
              In today’s competitive world, finding the right candidate is as important as preparing for an interview. 
              <strong> Boardroom Interview Simulation </strong> is an AI-powered platform designed for interviewers to streamline the hiring process.
            </p>
            <p className="aboutText">
              With advanced <strong> AI-driven question generation, real-time candidate analysis, and automated feedback</strong>, our platform 
              helps interviewers assess candidates efficiently and make data-driven hiring decisions.
            </p>
          </div>  
        </section>  

      </div>
    </>
  );
};

export default Home;
