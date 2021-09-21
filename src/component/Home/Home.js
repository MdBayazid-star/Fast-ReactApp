import React from "react";
import "./Home.css";
import homeImage from "./../images/header-bike.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="homeContent">
          <p>
            Computer-controlled digital transistorized with electronic advance
          </p>
          <h1>Honda CBR 300R</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia <br /> consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button>Purchase</button>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
