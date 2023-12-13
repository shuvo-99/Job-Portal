// import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = ({ headerColor }) => {
  const headerStyle = {
    backgroundColor: headerColor,
  };

  const { user, logout } = useContext(AuthContext);

  console.log("after login ", user);

  const handlelogout = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
        {user ? (
          <span>
            {" "}
            Welcome {user.email}{" "}
            <button
              onClick={handlelogout}
              className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded ms-2"
            >
              Sign Out
            </button>
          </span>
        ) : (
          <>
            <Link to="/Login">
              <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
