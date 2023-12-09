import { Link } from "react-router-dom";
import "./Job.css";

const Job = (pros) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = pros.job;
  return (
    <div className="job">
      <img
        src={logo}
        style={{
          // backgroundColor: "#d3d7df",
          padding: "6px",
          borderRadius: "4px",
          width: "129px",
          height: "52px",
        }}
      />
      <p>{job_title}</p>
      <p>{company_name}</p>
      <div
        style={{ display: "flex" }}
        className="job_type text-sm font-semibold"
      >
        <p>{remote_or_onsite}</p>
        <p>{job_type}</p>
      </div>
      <div className="loc_salary flex py-2">
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>
      <Link to="/">
        <button className="bg-gradient-to-r from-violet-400 to-violet-500 text-white py-2 px-4 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
