import { Link } from "react-router-dom";
import "./Signup.css";
import { useContext, useState } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const headerColor = "#b0ef80";

  const containerStyle = {
    backgroundColor: "#b0ef80",
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;
    console.log(name, email, password);

    setError(" ");
    if (password.length < 6) {
      setError("Minimum six in length");
      return;
    }
    if (password != confirm) {
      setError("Passwords didn't match.");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("At least one upper case English letter");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("At least one lower case English letter");
      return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
      setError("At least one digit");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("from signup", result.user);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
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

      {/* Form */}

      <div className="signup-container">
        <form onSubmit={handleSignup}>
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
        <p className="error-msg">{error}</p>
      </div>
    </div>
  );
};

export default Signup;
