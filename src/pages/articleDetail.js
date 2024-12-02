import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "../blogs.json";
import "./articles.css";
// import "./blogs.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const selectedArticle = blogs.articles.find(
      (article) => article.id === String(id)
    );
    setArticle(selectedArticle);
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articleDetail-container">
      <div className="articleDetail-link">
        <Link to="/" className="articleDetail-link-home">
          Home
        </Link>{" "}
        &gt;
        <Link to="/blogs" className="articleDetail-link-blog">
          Blog
        </Link>{" "}
        &gt;
        <span>{article.title}</span>
      </div>

      <div className="article-meta">
        <p>
          {article.date} • {article.category}
        </p>
      </div>
      <h1 className="articleDetail-title">{article.title}</h1>
      <div className="articleDetail-header">
        <div className="articleDetail-image-container">
          <img
            className="articleDetail-image"
            src={article.image}
            alt={article.title}
          />
          <div className="articleDetail-title-overlay"></div>
        </div>
      </div>

      {article.content.map((section, index) => (
        <div className="articleDetail-content" key={index}>
          <h2>{section.heading}</h2>

          {section.paragraph &&
            section.paragraph.map((para, i) => <p key={i}>{para}</p>)}

          {section.list && (
            <ul>
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
export default ArticleDetail;
