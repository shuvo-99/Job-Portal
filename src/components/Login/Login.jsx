import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const headerColor = "#b0ef80";

  const containerStyle = {
    backgroundColor: "#b0ef80",
  };

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const from = location.state?.from?.pathname || "/"; // redirect to the page from where it came to login page

    setError("");
    login(email, password)
      .then((result) => {
        console.log("from login", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Login Page</p>
      </section>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              id="useremail"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <p onClick={() => setShow(!show)}>
              {show ? <span>Hide Password </span> : <span>Show Password</span>}
            </p>
          </div>
          <button className="btn btn-active">Login</button>
        </form>
        <p>
          {`Don't have an Account?`}
          <span>
            <Link
              to="/signup"
              style={{ textDecoration: "None", color: "blue" }}
            >
              {" "}
              Sign Up here
            </Link>
          </span>
        </p>
        <p>
          {`Forgot Password?`}
          <span> Click Here</span>
        </p>
        <p style={{ color: "red", paddingTop: "5px" }}>{error}</p>
      </div>
    </div>
  );
};

export default Login;
