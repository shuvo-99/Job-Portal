// import React from "react";
// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useTransition } from "react";

const LandingPage = () => {
  // const [isPending, startTransition] = useTransition();

  // const LoadingIndicator = () => {
  //   return (
  //     <div className="spinner-container">
  //       <div className="custom-loader"></div>
  //     </div>
  //   ); // You can style this or use a spinner
  // };

  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
