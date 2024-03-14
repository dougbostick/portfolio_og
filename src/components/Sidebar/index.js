import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faEnvelope,
  faUser,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import letters from '../../assets/images/letters.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={letters} alt="logo" className="logo" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeClassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="project-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faLayerGroup} />
        </NavLink>
      </nav>
      <div className="ext-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/doug-bostick/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/dougbostick"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
