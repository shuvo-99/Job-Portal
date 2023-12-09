import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./JobDetail.css";
import { useEffect, useState } from "react";

const JobDetail = () => {
  const { jobID } = useParams();
  console.log(jobID);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Fetch specific element details using the 'id' parameter
    fetch("../../public/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the element in the data array with the matching 'id'
        const elementDetails = data.find(
          (element) => element.id === Number(jobID)
        );
        setDetails(elementDetails);
      });
  }, [jobID]); // Re-fetch details whenever 'id' changes

  console.log(details);

  // const headerColor = "#aec0e3";
  const headerColor = "#ccd1db";

  const containerStyle = {
    backgroundColor: "#ccd1db",
  };
  return (
    <div>
      <Header headerColor={headerColor}></Header>
      <section
        style={containerStyle}
        className=" text-center py-20 text-3xl font-bold"
      >
        <p>Job Details</p>
      </section>
      {/* details */}
      <section>
        <div className="detail_container m-20">
          <div className="leftSide">
            <p>
              <span className=" font-bold">Job Description: </span>
              {details.job_description}
            </p>
            <p>
              <span className=" font-bold">Job Responsibility: </span>
              {details.job_responsibility}
            </p>
            <p className=" font-bold">Educational Requirements: </p>
            <p>{details.educational_requirements}</p>
            <p className=" font-bold">Experiences: </p>
            <p>{details.experiences}</p>
          </div>
          <div className="rightSide">
            <div
              className="rightSide_details"
              style={{ background: "#ccd1db" }}
            >
              <div>
                <p className=" font-bold border-b-2">Job Details</p>
              </div>
              <div>
                <p>
                  <span className=" font-semibold">Salary : </span>
                  {details.salary} (Per Month)
                </p>
                <p>
                  <span className=" font-semibold">Job Title : </span>
                  {details.title}
                </p>
              </div>
              <div>
                <p className=" font-bold border-b-2">Contact Information</p>
              </div>
              <div>
                <p>
                  <span className=" font-semibold">Phone : </span>
                  {details.contact_information.phone}
                </p>
                <p>
                  <span className=" font-semibold">Email : </span>
                  {details.contact_information.email}
                </p>
                <p>
                  <span className=" font-semibold">Address : </span>
                  {details.contact_information.address}
                </p>
              </div>
            </div>
            <div>
              <button className="apply_btn bg-gradient-to-r from-violet-500 to-violet-600 text-white py-2 px-4 rounded ">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
