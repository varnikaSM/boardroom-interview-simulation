import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginInterviewer.css";

const LoginInterviewer = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", name: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing up:", formData);
      // TODO: Implement signup API call
    } else {
      console.log("Logging in:", formData);
      // TODO: Implement login API call
      navigate("/interviewerDashboard"); 
    }
  };

  return (
    <>  
      <title> Interviewer Log In</title>
      <div className="login-container">
      <h2 class='headings'>{isSignUp ? "Sign Up" : "Login"} as Interviewer</h2>
      
      <form onSubmit={handleSubmit} className="login-form">
        {isSignUp && (
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        )}
        
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>

      <p className="toggle-text">
        {isSignUp ? "Already have an account?" : "Don't have an account?"} 
        <span onClick={toggleForm}>{isSignUp ? " Login" : " Sign Up"}</span>
      </p>
    </div>  </>

  );
};

export default LoginInterviewer;
