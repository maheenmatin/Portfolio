import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/images/logo.png";
import LogoSub from "../../assets/images/sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faSuitcase, faClose } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import BurgerMenu from "./BurgerMenu";
import Background from "./Background";

const Sidebar = ({ showNav, setShowNav }) => {
  function refreshPage() {
    // if on home page, refresh page - else, display home page
    if (window.location.pathname === "/") {
      window.location.reload();
    }
  }

  return (
    <div className={`nav-container ${showNav ? "show-nav-page" : ""}`}>
      <Link className="logo" to="/">
        <img
          src={Logo}
          alt="logo"
          onClick={() => {
            refreshPage();
            setShowNav(false);
          }}
        />
        <img className="logo-subtitle" src={LogoSub} alt="logo subtitle" onClick={refreshPage} />
      </Link>

      <nav>
        <NavLink activeclassname="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <div className="external-links">
        <a href="https://github.com/maheenmatin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
        </a>
        <a href="https://www.linkedin.com/in/maheenmatin" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
        </a>
      </div>
      <BurgerMenu onClick={() => setShowNav(true)} />
      <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} size="3x" className="close-icon" />
      <Background />
    </div>
  );
};

export default Sidebar;
