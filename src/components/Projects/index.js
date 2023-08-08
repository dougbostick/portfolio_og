import './index.scss';
import daja from '../../assets/images/daja.png';
import seven from '../../assets/images/7-10.png';
import half from '../../assets/images/halfway.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  return (
    <div className="container project-page">
      <h1 className="first">Projects</h1>
      <div className="project-list">
        <div className="second project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://daja-view1.herokuapp.com"
              >
                Daja View
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              Daja View is a social media app focused on recommending shows and
              movies.
              <br />
              It leverages themovieDB API to have a robust selection of current
              media and
              {/* <br /> */}
              utilizes React, Express, SQL, Redux, REST APIs, CSS
            </p>
          </div>
          <div className="project-logo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://daja-view1.herokuapp.com"
            >
              <img src={daja} alt="daja" className="daja" />
            </a>
          </div>
        </div>
        <div className="third project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dougbostick.github.io/react_halfway/"
              >
                Halfway Maps
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              Halfway Maps is a Google Maps application that finds places to
              meet halfway between two locations. It is designed to help friends
              agree on a meeting place!
              <br />
              It leverages the Google directions, map, and places APIs to search
              the current businesses.
              <br />
              It utilizes tools like geolocation, map markers, autocomplete and
              direction rendering to create a seemless user experience.
            </p>
          </div>
          <div className="project-logo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dougbostick.github.io/react_halfway/"
            >
              <img src={half} alt="half" />
            </a>
          </div>
        </div>
        <div className="last project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://seven-ten-split.herokuapp.com/"
              >
                7-10 Split Bowling Shop
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              7-10 Split is a PSQL e-commerce bowling app designed to cater to
              the most serious bowlers.
              <br />
              The backend is built using an Express server which utilizes REST
              APIs.
              <br />
              The front end uses React and was built using hooks, Redux Toolkit
              for state management and the most current React practices.
            </p>
          </div>
          <div className="project-logo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://seven-ten-split.herokuapp.com/"
            >
              <img
                src={seven}
                alt="seven"
                style={{ width: '195px', height: '150px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
