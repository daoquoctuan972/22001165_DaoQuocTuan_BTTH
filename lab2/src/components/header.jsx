import { FaSearch } from "react-icons/fa";
import "./header.css";
import Footer from "./footer";

function Header(){
  return (
    <>
        <nav className="navbar">
        <div className="navbar-left">
        <span className="logo">🍽️ Chefify</span>
        <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
            <FaSearch className="search-icon" />
        </div>
        </div>

        <ul className="navbar-menu">
            <li>What to cook</li>
            <li>Recipes</li>
            <li>Ingredients</li>
            <li>Occasions</li>
            <li>About Us</li>
        </ul>

        <div className="navbar-right">
        <button className="recipe-box-btn">📋 Your Recipe Box</button>
        <img src="../img/body.jpg" alt="User" className="user-avatar" />
        </div>
    </nav>
  </>
    
    
  );
};

export default Header;