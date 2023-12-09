// import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  const headerColor = "#f1a5a5";

  const containerStyle = {
    backgroundColor: "#f1a5a5",
  };

  return (
    <div id="error-page">
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Not Found Page</p>
      </section>
      <div className="error">
        <p>Its ERROR: 404</p>
        <p>The URL maybe wrong.</p>
        <p>Try again with the correct URL</p>
      </div>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
