import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <a href="/" className="logo">AIcruit</a>
            <ul className="nav-links">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
                <li><Link to="how-it-works" smooth={true} duration={500}>How it Works</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
