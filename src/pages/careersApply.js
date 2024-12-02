import React from "react";
import { useParams } from "react-router-dom";
import about from "../../about.json";
import React, { useState, useEffect } from "react";
import "../Components/careers.css";

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualifications: "",
    experience: "",
    address: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    jobSource: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://www.cypresscollege.edu/wp-content/uploads/Page_Featured-Image_Apply-Now.png"
          alt="About Us"
          className="image"
        />
      </div>
      <div className="form-container">
        <form className="apply-form" onSubmit={handleSubmit}>
          <h2 className="form-header">Apply for Your Dream Job</h2>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="qualifications">Qualifications *</label>
            <input
              type="text"
              id="qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience *</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentCTC">Current CTC (LPA) *</label>
            <input
              type="number"
              id="currentCTC"
              name="currentCTC"
              value={formData.currentCTC}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expectedCTC">Expected CTC (LPA) *</label>
            <input
              type="number"
              id="expectedCTC"
              name="expectedCTC"
              value={formData.expectedCTC}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="noticePeriod">Notice Period (In days) *</label>
            <input
              type="number"
              id="noticePeriod"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobSource">
              How did you come to know about this job? *
            </label>
            <input
              type="text"
              id="jobSource"
              name="jobSource"
              value={formData.jobSource}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Resume (PDF) *</label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
