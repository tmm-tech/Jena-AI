import React from "react";
import "./Home.css";
import logo from "../../images/logo.png"; // Ensure you have a logo image in your project
import AccountMenu from "../../components/AccountMenu";
function Home() {
  return (
    <div className="body_home">
      <div className="container_home">
        <header className="header">
          <img src={logo} alt="Jena Logo" className="logo" />
          <AccountMenu />
        </header>
        <main className="main-content">
          <div className="microphone-container">
            <div className="microphone-icon">
              <i className="fas fa-microphone"></i>
            </div>
            <div className="wave-container">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <input type="text" className="text-input" placeholder="Message Jena..." />
          <button className="send-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Home;
