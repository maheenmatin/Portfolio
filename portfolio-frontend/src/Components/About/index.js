import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Arrow from "./Arrow";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-zone" id="about-text-zone">
          <h1>
            <span className={`${letterClass} about-colored-text`}>A</span>
            <AnimatedLetters letterClass={letterClass} strArray={["b", "o", "u", "t", " ", " ", "m"]} idx={10} />
            <span className={`${letterClass} about-colored-text`}>e</span>
          </h1>
          <div className="arrow-text-pair">
            <Arrow />
            <p>
              I'm an MSc student at <span className="about-colored-text"> UCL (University College London)</span>. I'm
              acquiring a broad range of skills, from People & Security (GRC) to Financial Market Modelling & Analysis.
            </p>
          </div>

          <div className="arrow-text-pair">
            <Arrow />
            <p>
              I graduated from City, St George's with 
              <span className="about-colored-text"> First-Class Honours</span> in 
              BSc Computer Science (76% GPA). 
              With <span className="about-colored-text"> two internships</span> under my belt, 
              I'm equipped to tackle real-world challenges.
            </p>
          </div>

          <div className="arrow-text-pair">
            <Arrow />
            <p>
              Outside of school and work, <span className="about-colored-text"> I love music! </span>
              I've been listening to a lot of jazz recently, but rock is usually my go-to. My first concert was The
              Marías!
            </p>
          </div>
        </div>

        <div className="cube-container">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <div id="subtitle">
            <p>
              These are some of the <span className="about-colored-text">web technologies </span>
              I'm proficient in!
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
