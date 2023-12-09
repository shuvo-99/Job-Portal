// import React from 'react';
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import "./ExploreJobs.css";
import Job from "../Job/Job";

const ExploreJobs = () => {
  // const headerColor = "#e5e7eb";
  const headerColor = "#aec0e3";

  const containerStyle = {
    backgroundColor: "#aec0e3",
  };

  const { jobs } = useLoaderData();

  console.log(jobs);

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Explore Jobs</p>
      </section>
      <section className="my-20 mx-10">
        <div className="explore_jobs">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreJobs;
