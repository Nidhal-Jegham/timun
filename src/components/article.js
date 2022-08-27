import React from "react";
import PropTypes from "prop-types";

const Article = ({ article, subjects }) => {
  return (
    <div className="col-xl-12">
      <div className="magazine">
        <div className="magazine-img">
          <img src={article.img} alt="..." />
        </div>
        <div className="magazine-body">
          <h5 className="magazine-title">
            <a href={article.content}>{article.title}</a>
          </h5>

          <hr></hr>

          <li className="d-flex align-items-center author">
            <i className="bi bi-person" /> {article.author}
          </li>
          <div className="article-name">
            {" "}
            {subjects.map((article) => {
              return (
                <li className="d-flex align-items-center">
                  <i className="bi bi-bookmark-star-fill" /> {article}
                </li>
              );
            })}
          </div>
          <div className="read-more">
            <a href={article.content} target="_blank">
              <i className="bi bi-arrow-right" /> Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
Article.propTypes = {
  articleNames: PropTypes.array.isRequired,
};
export default Article;
