import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaDoorOpen, FaBuilding, FaCogs, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import about from "../../about.json";
import "./careers.css";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [introduction, setIntroduction] = useState({});

  useEffect(() => {
    setCareers(about.careers);
    setIntroduction(about.introduction);
  }, []);

  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://www.brandreward.com/img/pub_two_pic.jpg"
          alt="About Us"
          className="image"
        />
      </div>
      <div className="apply-container">
        <h2>{introduction.title}</h2>
        <p>{introduction.description}</p>
        <div className="reasons">
          {careers.map((career, index) => {
            const Icon = require("react-icons/fa")[career.icon];
            return (
              <div className="reason-card" key={index}>
                <div className="icon">
                  <Icon size={50} />
                </div>
                <h3>{career.title}</h3>
                <p>{career.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <CareerOpportunities />
    </div>
  );
};

const CareerOpportunities = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setJobs(about.jobs);
  }, []);

  const handleApplyNow = (title) => {
    navigate(`/apply/${title}`);
  };

  return (
    <div className="career-opportunities">
      <h2>Career Opportunities</h2>
      <div className="career-header">
        <span>Job Description</span>
        <span>Location</span>
      </div>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.responsibilities}</p>
            </div>
            <div className="job-meta">
              <span>{job.location}</span>
              <button
                onClick={() => handleApplyNow(job.title)}
                className="apply-button"
              >
                Apply Now <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Careers;
