import React from "react";
import "../styles/article.scss";

import Article from "../components/article";
// import articles from "../data/articles-data";
import { useState, useEffect } from "react";
import Loading from "./loading";

function Articles({ setLoading, loading }) {
  const LearnMore = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://timunbackend.herokuapp.com/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);
  if (loading) return null;
  return (
    <div>
      <section
        id="articles"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div className="container position-relative  d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <h2>To Diplomacy and Beyond </h2>
              <h3>TIMUN TBS</h3>
              <a onClick={LearnMore} href className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="title">
        {" "}
        <h3>Our Articles</h3>
      </div>

      <section className="Block ">
        <div className="container d-flex justify-content-center">
          <div className="row">
            {articles.map((article) => {
              const subjects = article.articles;
              return (
                <Article
                  article={article}
                  subjects={subjects}
                  articleNames={article.articles}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
