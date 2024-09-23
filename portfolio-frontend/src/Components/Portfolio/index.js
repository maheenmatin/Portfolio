import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  });

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.cover} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  VIEW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container" id="portfolio-container">
        <h1>
          <span className={`${letterClass} port-colored-text`}>P</span>
          <AnimatedLetters letterClass={letterClass} strArray={"roject".split("")} idx={10} />
          <span className={`${letterClass} port-colored-text`}>s</span>
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
