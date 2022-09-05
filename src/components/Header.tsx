import React from "react";
import "../styles/scss/Header.scss";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(`/`);
  };

  return (
    <div className="header-container">
      <div className="header">
        <img
          onClick={navigateToHome}
          className="logo"
          src="/assets/img/Logo_ML.png"
          alt="logo"
        />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
