import React, { useEffect, useState } from "react";
import React from "react";
import { useState, useEffect } from "react";
import { TbClock12 } from "react-icons/tb";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../../index.css";

const ContactPage = () => {
  return (
    <div className="Contacts">
      <div className="contact-container">
        <div className="overlay">
          <h1>Contact Us</h1>
        </div>
      </div>
      <ContactUs />
      <ContactForm />
    </div>
  );
};
const ContactUs = () => {
  const offices = [
    {
      id: 1,
      city: "Bangulur Office",
      addressLine1: "No. 63/1, I Floor, Makam Plaza, III Main",
      cityDetails: "Road, 18th Cross, Malleshwaram,",
      phone: "+1 (234) 567-8910",
      email: "abc@company.com",
    },
    {
      id: 2,
      city: "Mumbai Office",
      addressLine1: "601, 6th Floor, Earth Vintage, Senapati",
      cityDetails: "Bapat Marg, Dadar Wes",
      phone: "+1 (234) 567-8910",
      email: "bca@company.com",
    },
    {
      id: 3,
      city: "Pune Office",
      addressLine1: "5th Floor, Wing A, Gopal House, S.No.",
      cityDetails: "127/1B/1, Plot A1, Kothrud",
      phone: "+1 (234) 567-8910",
      email: "xyz@company.com",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Office Locations</h1>
        <p>
          Your office should be in a place that's easily accessible to both
          clients and employees, offering proximity to public transportation
          options. An accessible location not only benefits your staff but also
          makes it more convenient for clients to locate your office.
        </p>
      </div>
      <div className="office-locations">
        {offices.map((office) => (
          <div className="office-card" key={office.id}>
            <div className="office-details">
              <h3>{office.city}</h3>
              <p>{office.addressLine1}</p>
              <p>{office.cityDetails}</p>
              <p>
                <i className="fas fa-phone"></i> {office.phone}
              </p>
              <p>{office.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    emailjs
      .send(
        "service_9e0vub8",
        "template_bx8mydt",
        formData,
        "a6-S0E1bIgVsromvy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setLoading(false);
          setFormData({
            email: "",
            name: "",
            address: "",
            message: "",
          });

          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            <FaPhoneAlt size={25} className="icons" /> +1 (234) 567-891, 1 (234)
            987-654
          </p>
          <p>
            <FaMapMarkerAlt size={25} className="icons" />
            121 xyz, Pune
          </p>
          <p>
            <TbClock12 size={25} className="icons" />
            Mon - Fri, 10am - 8pm
          </p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Sending..." : "SEND"}
        </button>
        {isSent && (
          <p className="success-message">Your message has been sent!</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
