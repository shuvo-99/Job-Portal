// import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Category from "../Category/Category";
// import ExploreJobs from "../ExploreJobs/ExploreJobs";
import Job from "../Job/Job";
import { useState } from "react";

const Home = () => {
  window.scrollTo(0, 0);
  const headerColor = "#e5e7eb";

  const containerStyle = {
    backgroundColor: "#e5e7eb",
  };

  const { categories, jobs } = useLoaderData();

  const [columns, setColumns] = useState(2);

  const [visibleElements, setVisibleElements] = useState(4);

  const handleSeeMoreClick = () => {
    setVisibleElements(jobs.length);
    setColumns(columns === 2 ? 3 : 2);
  };

  return (
    <div>
      <Header headerColor={headerColor}></Header>

      {/* first part */}
      <div
        className=" grid grid-rows-5 grid-cols-2 gap-4 px-5"
        style={containerStyle}
      >
        <div className=" text-8xl font-semibold">One Step</div>
        <div className=" row-span-5">
          <img
            src="./../../../public/resources/assets/images/user.png"
            alt=""
          />
        </div>
        <div className=" text-8xl font-semibold">Closer to Your</div>
        <div className=" text-8xl font-semibold text-violet-400">Dream Job</div>
        <div>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </div>
        <div>
          <Link to="/explore_jobs">
            <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* middle part */}
      <br />
      <section className="m-5 ">
        <div className="text-center">
          <p className="text-2xl font-bold">Job Category List</p>
          <br />
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <br />
        {/* Category */}
        <div className="category_container">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </section>
      <br />
      {/* Jobs */}
      <section className="m-5">
        <div className="text-center">
          <p className="text-2xl font-bold">Featured Jobs</p>
          <br />
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <br />
        <div className={`element_list columns-${columns} mx-10`}>
          {jobs.slice(0, visibleElements).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="see-more-btn py-10">
          {visibleElements < jobs.length && (
            <Link to="/explore_jobs">
              <button
                onClick={handleSeeMoreClick}
                className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded"
              >
                See All Jobs
              </button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
