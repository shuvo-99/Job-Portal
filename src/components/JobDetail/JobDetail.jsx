import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./JobDetail.css";
import { useEffect, useState } from "react";
import {
  addToDb,
  getApplicationCart,
  removeFromDb,
} from "../../LocalStorage/LocalStorage";

const JobDetail = () => {
  window.scrollTo(0, 0);
  const { jobID } = useParams();
  // console.log(jobID);

  // FOR DATA
  const [details, setDetails] = useState([]);

  // FOR BUTTON STATE
  const [applied, setApplied] = useState(false);

  const handleApply = (jobID) => {
    addToDb(jobID);
    console.log("applied ->", jobID);
    setApplied(true);
  };

  const handleUndoApply = (jobID) => {
    removeFromDb(jobID);
    console.log("undo applied ->", jobID);
    setApplied(false);
  };

  useEffect(() => {
    // Fetch specific element details using the 'id' parameter
    fetch("jobs.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the element in the data array with the matching 'id'
        const elementDetails = data.find(
          (element) => element.id === Number(jobID)
        );
        setDetails(elementDetails);
      });
    // Parse the storedCart into an object
    const storedCart = getApplicationCart();
    const isApplied = Object.keys(storedCart).includes(jobID.toString());
    setApplied(isApplied);
  }, [jobID]); // Re-fetch details whenever 'id' changes

  // console.log(details);

  // const { phone, email, address } = details.contact_information;
  // console.log(phone);

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
                  {details.job_title}
                </p>
              </div>
              <div>
                <p className=" font-bold border-b-2">Contact Information</p>
              </div>
              <div>
                <p>
                  <span className=" font-semibold">Phone : </span>017********
                  {/* {phone} */}
                </p>
                <p>
                  <span className=" font-semibold">Email : </span>hr@company.com
                  {/* {email} */}
                </p>
                <p>
                  <span className=" font-semibold">Address : </span>Mohammadpur,
                  Dhaka
                  {/* {address} */}
                </p>
              </div>
            </div>
            <div>
              {applied ? (
                <button
                  className="undo_apply_btn bg-gradient-to-r from-red-500 to-red-600 text-white py-2 px-4 rounded"
                  onClick={() => handleUndoApply(jobID)}
                >
                  Undo Apply
                </button>
              ) : (
                <button
                  className="apply_btn bg-gradient-to-r from-violet-500 to-violet-600 text-white py-2 px-4 rounded"
                  onClick={() => handleApply(jobID)}
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
