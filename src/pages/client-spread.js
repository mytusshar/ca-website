import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import "../pages/client-spread.css";
import React from "react";

import {
  FaIndustry,
  FaTruck,
  FaMicroscope,
  FaLeaf,
  FaBriefcaseMedical,
  FaPaintBrush,
  FaBuilding,
  FaTools,
  FaWrench,
  FaConciergeBell,
  FaClipboardList,
  FaTruckLoading,
  FaUtensils,
} from "react-icons/fa";
import about from "../../about.json";

const iconMap = {
  FaIndustry: <FaIndustry />,
  FaTruck: <FaTruck />,
  FaMicroscope: <FaMicroscope />,
  FaLeaf: <FaLeaf />,
  FaBriefcaseMedical: <FaBriefcaseMedical />,
  FaPaintBrush: <FaPaintBrush />,
  FaBuilding: <FaBuilding />,
  FaTools: <FaTools />,
  FaWrench: <FaWrench />,
  FaConciergeBell: <FaConciergeBell />,
  FaClipboardList: <FaClipboardList />,
  FaTruckLoading: <FaTruckLoading />,
  FaUtensils: <FaUtensils />,
};

const ClientSpread = () => {
  const [industries, setIndustries] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    setIndustries(about.Data);
    setData(about.Header);
  }, []);

  return (
    <div className="client-container">
      <div className="client-content">
        <h2 className="heading">{data.heading}</h2>
        <p>{data.paragraph}</p>

        <div className="industries-container">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{iconMap[industry.icon]}</div>
              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSpread;
