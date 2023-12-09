import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
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
        <p>Login Page</p>
      </section>
      <div className="login">
        <p>Work on Progress</p>
        <p>Stay stuned!!</p>
        <p>Visit the other features</p>
      </div>
    </div>
  );
};

export default Login;
