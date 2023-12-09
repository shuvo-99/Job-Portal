import { Link } from "react-router-dom";
import "./JobApplied.css";

const JobApplied = (pros) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = pros.job;
  return (
    <div className="items mt-10">
      <img src={logo} />
      <div className="items_detail ms-5 ">
        <p className=" font-bold text-lg">{job_title}</p>
        <p>{company_name}</p>
        <div
          style={{ display: "flex" }}
          className="job_type text-sm font-semibold mt-2"
        >
          <p>{remote_or_onsite}</p>
          <p>{job_type}</p>
        </div>
        <p className="my-2">{location}</p>
        <p className="my-2">Salary: {salary}</p>
      </div>
      <Link to={`/explore_jobs/${id}`}>
        <div>
          <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded me-5">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default JobApplied;
