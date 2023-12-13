import { useRouteError } from "react-router-dom";
import "./RedirectError.css";
import Header from "../Header/Header";

const RedirectError = () => {
  const error = useRouteError();
  console.log(error);

  const headerColor = "#f1a5a5";

  const containerStyle = {
    backgroundColor: "#f1a5a5",
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div id="error-page">
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Kindly Refresh agian</p>
      </section>
      <div className="error mx-auto">
        <p>Its a Bug</p>
        <p>Working on Solving it</p>
        <div className=" mx-auto">
          <p
            onClick={handleRefresh}
            className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 rounded"
          >
            Refresh Page
          </p>
        </div>
      </div>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export default RedirectError;
