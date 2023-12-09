// import React from 'react';
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import "./AppliedJobs.css";
import JobApplied from "../JobApplied/JobApplied";

const AppliedJobs = () => {
  const headerColor = "#cee1c5";

  const containerStyle = {
    backgroundColor: "#cee1c5",
  };

  const jobs = useLoaderData();

  // console.log("from applied jobs ->", jobs);

  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Applied Jobs</p>
      </section>
      <section>
        <div className="align-middle">
          <div className="job_container ">
            {jobs.map((job) => (
              <JobApplied key={job.id} job={job}></JobApplied>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppliedJobs;
