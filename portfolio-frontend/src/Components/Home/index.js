import LogoTitle from "../../assets/images/logoHome.png";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const introArray = ["I", "'", "m"];
  const nameArray = ["a", "h", "e", "e", "n", ","];
  const jobArray = ["c", "o", "m", "p", " ", " ", "s", "c", "i", " ", " ", "s", "t", "u", "d", "e", "n", "t"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5500);
  }, []);

  return (
    <>
      <div className="container home-container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={20} />
            <img src={LogoTitle} alt="M" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={25} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={28} />
            <span id="colored-letter-home" className={letterClass}>.</span>
          </h1>
          <h2>Software Engineering / Web Development / All Things Tech</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
