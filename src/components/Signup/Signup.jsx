import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import Header from "../Header/Header";

const Signup = () => {
  const [show, setShow] = useState(false);
  // const [error, setError] = useState(error);

  const headerColor = "#b0ef80";

  const containerStyle = {
    backgroundColor: "#b0ef80",
  };

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Sign Up Page</p>
      </section>
      <div className="signup-container">
        <form>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder=" Enter your Email"
              required
            />
          </div>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input
              type={show ? "text" : "password"}
              name="confirm"
              placeholder="Re-type your Password"
              required
            />
            <p onClick={() => setShow(!show)}>
              {show ? <span>Hide Password </span> : <span>Show Password</span>}
            </p>
          </div>
          <button className="btn btn-active">Sign Up</button>
        </form>
        <p>
          {`Already have an Account?`}
          <span>
            <Link to="/login" style={{ textDecoration: "None", color: "blue" }}>
              {" "}
              Login here
            </Link>
          </span>
        </p>
        {/* <p className="error-msg">{error}</p> */}
      </div>
    </div>
  );
};

export default Signup;
