import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/images/logo.png";
import LogoSub from "../../assets/images/sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  function refreshPage() {
    // if on home page, refresh page - else, display home page
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  }

  return (
    <div className="nav-container">
      <Link className="logo" to="/" >
        <img src={Logo} alt="logo" onClick={ (refreshPage) } />
        <img className="sub-logo" src={LogoSub} alt="logo 2" onClick={ refreshPage }/>
      </Link>

      <nav>
        <NavLink activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://github.com/maheenmatin" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maheenmatin" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
