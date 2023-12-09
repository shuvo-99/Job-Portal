// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";

const Home = () => {
  const headerColor = "#e5e7eb";

  const containerStyle = {
    backgroundColor: "#e5e7eb",
  };

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <div
        className=" grid grid-rows-5 grid-cols-2 gap-4 px-5"
        style={containerStyle}
      >
        <div className=" text-8xl font-semibold">One Step</div>
        <div className=" row-span-5">
          <img src="./../../../resources/assets/images/user.png" alt="" />
        </div>
        <div className=" text-8xl font-semibold">Closer to Your</div>
        <div className=" text-8xl font-semibold text-violet-400">Dream Job</div>
        <div>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </div>
        <div>
          <Link to="/explore_jobs">
            <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
