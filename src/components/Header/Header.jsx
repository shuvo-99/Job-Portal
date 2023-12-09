// import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ headerColor }) => {
  const headerStyle = {
    backgroundColor: headerColor,
  };
  return (
    <div className="header p-5" style={headerStyle}>
      <div>
        <Link to="/" className=" text-3xl font-bold">
          Job Portal
        </Link>
      </div>
      <div className=" me-5">
        <Link to="/" className=" text-xl font-semibold">
          Home
        </Link>
        <Link to="/explore_jobs" className=" text-xl font-semibold">
          Explore Jobs
        </Link>
        <Link to="/applied_jobs" className=" text-xl font-semibold">
          Applied Jobs
        </Link>
      </div>
      <div>
        <Link to="/Login">
          <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
