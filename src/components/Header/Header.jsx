// import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header m-5">
      <div>
        <Link to="/">Job Portal</Link>
      </div>
      <div className=" me-5">
        <Link to="/explore_jobs">Explore Jobs</Link>
        <Link to="/applied_jobs">Applied Jobs</Link>
      </div>
      <div>
        <Link to="/Login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
