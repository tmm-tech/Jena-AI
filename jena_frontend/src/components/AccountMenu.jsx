import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountMenu.css";

function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="account-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <i className="fas fa-user-circle"></i>
      {isOpen && (
        <div className="menu">
          <Link to="/profile" className="menu-link">
            <div className="menu-item">
              <i className="fas fa-user"></i> Profile
            </div>
          </Link>
          <Link to="/settings" className="menu-link">
            <div className="menu-item">
              <i className="fas fa-cog"></i> Settings
            </div>
          </Link>
          <Link to="/login" className="menu-link">
            <div className="menu-item">
              <i className="fas fa-sign-in-alt"></i> Login
            </div>
          </Link>
          <Link to="/logout" className="menu-link">
            <div className="menu-item">
              <i className="fas fa-sign-out-alt"></i> Logout
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AccountMenu;
