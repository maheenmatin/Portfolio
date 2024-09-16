import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container container-about">
        <div class="left-section">
          <h1>
            <span id="colored-letter-about" className={letterClass}>A</span>
            <AnimatedLetters letterClass={letterClass} strArray={["b", "o", "u", "t", " ", " ", "m"]} idx={10} />
            <span id="colored-letter-about" className={letterClass} >e</span>
          </h1>

          <div className="text-zone">
            <div class="arrow-text-pair">
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="-0.03 0 330.03 330.02">
                <path d="M315,0c-8.284,0-15,6.716-15,15v210H105v-60c0-6.067-3.655-11.537-9.26-13.858  c-5.606-2.323-12.058-1.039-16.347,3.252l-75,75c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394  c1.932,0,3.881-0.373,5.737-1.142c5.605-2.322,9.26-7.792,9.26-13.858v-60h210c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0  z M75,278.787L36.214,240L75,201.213V278.787z"/>
              </svg>
              <p>
                I'm a 3rd-year CS student at <span class="colored-text">City, University of London</span>. I've 
                acquired a broad range of skills, from Data Structures & Algorithms to Object-Oriented Analysis & 
                Design.
              </p>
            </div>

            <div class="arrow-text-pair">
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="-0.03 0 330.03 330.02">
                <path d="M315,0c-8.284,0-15,6.716-15,15v210H105v-60c0-6.067-3.655-11.537-9.26-13.858  c-5.606-2.323-12.058-1.039-16.347,3.252l-75,75c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394  c1.932,0,3.881-0.373,5.737-1.142c5.605-2.322,9.26-7.792,9.26-13.858v-60h210c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0  z M75,278.787L36.214,240L75,201.213V278.787z"/>
              </svg>
              <p>
                With two internships under my belt, I've gained valuable knowledge and experience in both
                <span class="colored-text"> web development</span> (Figma, HTML & CSS), and 
                <span class="colored-text"> data science</span> (R & Python).
              </p>
            </div>

            <div class="arrow-text-pair">
              <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="-0.03 0 330.03 330.02">
                  <path d="M315,0c-8.284,0-15,6.716-15,15v210H105v-60c0-6.067-3.655-11.537-9.26-13.858  c-5.606-2.323-12.058-1.039-16.347,3.252l-75,75c-5.858,5.858-5.858,15.355,0,21.213l75,75c2.87,2.87,6.705,4.394,10.61,4.394  c1.932,0,3.881-0.373,5.737-1.142c5.605-2.322,9.26-7.792,9.26-13.858v-60h210c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0  z M75,278.787L36.214,240L75,201.213V278.787z"/>
              </svg>
              <p>
                Outside of school and work, <span class="colored-text"> I love music! </span>
                I've been listening to a lot of jazz recently, but rock is usually my go-to. My first concert was 
                The Marías!
              </p>
            </div>
          </div>
        </div>

        <div className="stage-cube-cont">
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
          <div id="subtitle"><p>These are some of the <span class="colored-text">web technologies </span>
            I'm proficient in!</p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
