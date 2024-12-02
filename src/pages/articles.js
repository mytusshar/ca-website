import React from "react";
import "./articles.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import blogs from "../blogs.json";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(blogs.articles);
  }, []);
  const convertTitleToURL = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };
  return (
    <div className="articles-container">
      {articles.map((article, i) => (
        <div className="article-card" key={i}>
          <Link
            to={`/articles/${article.id}/${convertTitleToURL(article.title)}`}
            className="article-image-link"
          >
            <img
              className="article-image"
              src={article.image}
              alt={article.title}
            />
          </Link>
          <div className="article-content">
            <Link
              to={`/articles/${article.id}/${convertTitleToURL(article.title)}`}
              className="article-title-link"
            >
              <h3 className="article-title">{article.title}</h3>
            </Link>
            <p className="article-meta">
              {article.date} • {article.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
