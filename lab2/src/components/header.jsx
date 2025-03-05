import { FaSearch } from "react-icons/fa";
import "./header.css";
import dataMenu from '../data/dataMenu.json';

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
          {Object.keys(dataMenu).map((key, index) => (
            <a href={dataMenu[key]} className="nav-link" key={index}>
              {key}
            </a>
          ))}
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