import './index.scss';
import daja from '../../assets/images/daja.png';
import seven from '../../assets/images/7-10.png';
import half from '../../assets/images/halfway.png';

const Projects = () => {
  return (
    <div className="container project-page">
      <h1 className="first">Welcome to my Projetcs!</h1>
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
              </a>
            </h1>
            <p>
              Social Media App focused on recommending shows and movies
              <br />
              Leverages themovieDB API to have a robust selection of current
              media
              <br />
              Utilizes React, Express, SQL, Redux, REST APIs, CSS
            </p>
          </div>
          <div className="project-logo">
            <img src={daja} alt="daja" />
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
              </a>
            </h1>
            <p>
              Google Maps application that finds places to meet halfway between
              two locations
              <br />
              Leverages the Google directions, map, and places APIs
              <br />
              Utilizes tools like geolocation, map markers, autocomplete and
              direction rendering
            </p>
          </div>
          <div className="project-logo">
            <img src={half} alt="half" />
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
              </a>
            </h1>
            <p>
              PSQL e-commerce bowling app
              <br />
              Express server for REST APIs
              <br />
              React app built using hooks
              <br />
              Utilizes Redux Toolkit for state management
            </p>
          </div>
          <div className="project-logo">
            <img
              src={seven}
              alt="seven"
              style={{ width: '195px', height: '150px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
