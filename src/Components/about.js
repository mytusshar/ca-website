import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import about from "../../about.json";
import "./about.css";

const About = () => {
  const [heading, setHeading] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    setHeading(about.heading);
    setParagraphs(about.paragraphs);
  }, []);

  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://www.brandreward.com/img/pub_two_pic.jpg"
          alt="About Us"
          className="image"
        />
        {/* <div className="aboutus-heading">
          <Link to="/" className="aboutus-heading-link">
            Home
          </Link>
          &gt; About Us
        </div> */}
      </div>
      <div className="about-section">
        <div className="about-container">
          <h2 className="heading">{heading}</h2>

          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

const Section1 = () => {
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [pageheading, setPageheading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [highlights, setHighlights] = useState("");

  useEffect(() => {
    setImageUrl1(about.image1);
    setImageUrl2(about.image2);
    setParagraph(about.paragraph);
    setPageheading(about.pageheading);
    setSubheading(about.subheading);
    setHighlights(about.highlights);
  }, []);

  return (
    <div className="about-Section1">
      <div className="hightlight-container">
        <div className="hightlight-image">
          <img src={imageUrl1} alt="Assurance & Solutions" />
        </div>
        <div className="hightlight-content">
          <span className="hightlight-label">Highlights</span>
          <h3>{pageheading}</h3>
          <ul className="highlights-list">
            {(() => {
              let items = [];
              for (let i = 0; i < highlights.length; i++) {
                items.push(<li key={i}>✓ {highlights[i]}</li>);
              }
              return items;
            })()}
          </ul>
        </div>
      </div>

      <div className="hightlight-container reverse">
        <div className="hightlight-image">
          <img src={imageUrl2} alt="Assurance & Solutions" />
        </div>
        <div className="hightlight-content">
          <h3>{subheading}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState([]);

  useEffect(() => {
    setVision(about.vision);
    setMission(about.mission);
  }, []);

  return (
    <div className="about-container">
      <div className="about-vision">
        <h2 className="heading">Vision</h2>
        <p>{vision}</p>
      </div>

      <div className="about-mission">
        <h2 className="heading">Mission</h2>
        <div className="mission-items">
          <div className="mission-column">
            {(() => {
              const items = [];
              for (let i = 0; i < 3 && i < mission.length; i++) {
                const item = mission[i];
                items.push(
                  <div className="mission-item" key={i}>
                    <div className="mission-icon">&#10003;</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              }
              return items;
            })()}
          </div>
          <div className="mission-column">
            {(() => {
              const items = [];
              for (let i = 3; i < mission.length; i++) {
                const item = mission[i];
                items.push(
                  <div className="mission-item" key={i}>
                    <div className="mission-icon">&#10003;</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              }
              return items;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
const Section3 = () => {
  const [statsList, setStatsList] = useState("");
  useEffect(() => {
    setStatsList(about.statsList);
  }, []);
  return (
    <div className="statsList">
      <div className="stats-heading">
        <h1>{statsList}</h1>
      </div>
    </div>
  );
};
export default About;
