// import React from 'react';
import Header from "../Header/Header";
import "./ExploreJobs.css";

const ExploreJobs = () => {
  const headerColor = "#e5e7eb";

  const containerStyle = {
    backgroundColor: "#e5e7eb",
  };

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Explore Jobs</p>
      </section>
      <section></section>
    </div>
  );
};

export default ExploreJobs;
