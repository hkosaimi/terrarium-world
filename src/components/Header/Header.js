import React from "react";
import "./Header.css";
import { PiPlantFill } from "react-icons/pi";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__mdri">
          <div className="header__mdri-terra1"></div>
          <div className="header__mdri-terra2"></div>
        </div>
        <div className="header__welcome">
          <h1>
            Welcome to <PiPlantFill className="piplantfill" />
            errarium World
          </h1>
          <h4>
            We are delighted to show you our finest collection of terrariums
            made only for you. As part of our goal to spread the culture of
            agriculture and its role in different aspects of our life.
          </h4>
          <div className="header__welcome-btn">
            <button>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
