import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Link } from "react";
import Article from "./articles";
import blogs from "../blogs.json";
import "./blogs.css";

const Blogs = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(blogs.data);
  }, []);

  return (
    <div className="blog1">
      <div className="mainblog-container">
        <div className="blog-container">
          <img
            src
            className={`blog-image`}
            style={{ backgroundImage: `url(${data.imageUrl})` }}
          />
          <div className="blog-content">
            <h2 className="blog-heading">{data.heading}</h2>
            <p>{data.paragraph}</p>
          </div>
        </div>
      </div>
      <Article />
    </div>
  );
};

export default Blogs;
