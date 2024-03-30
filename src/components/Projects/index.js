import './index.scss';
import daja from '../../assets/images/daja.png';
import seven from '../../assets/images/7-10.png';
import mise from '../../assets/images/mise.png'
import half from '../../assets/images/halfway.png';
import wordRush from '../../assets/images/wordrushlogo.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  return (
    <div className="container project-page">
      <h1 className="project-title">PROJECTS</h1>
      <div className="project-list">
        <div className="first project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://usemise.com/"
              >
                MISE
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              <span className='stack'>Tech Stack: React, OpenAI API, SASS, AWS, HTML, CSS, Javascript</span> 
              <br />
              <br />
              Mise is an AI powered recipe generator and culinary assistant that leverages the OpenAI API to query LLM's with user input! 
            </p>
          </div>
          <div className="project-logo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://usemise.com/"
            >
              <img src={mise} alt="wordRush" className="wordRushLogo" />
            </a>
          </div>
        </div>
        <div className="second project-div">
        <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dougbostick.github.io/react_halfway/"
              >
                HALFWAY MAPS
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              <span className='stack'>Tech Stack: React, Google Directions APIs, Places APIs, HTML, CSS, Javascript</span>
              <br />
              <br />
              Halfway Maps is a Google Maps application that finds places to
              meet halfway between two locations. It is designed to help friends
              agree on a meeting place!
        
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
        <div className="third project-div">
        <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://seven-ten-split.herokuapp.com/"
              >
                7-10 SPLIT BOWLING SHOP
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              <span className='stack'>Tech Stack: React, Redux Toolkit, Express, PostgreSQL, REST APIs, HTML, CSS, Javascript</span>
              <br />
              <br />
              7-10 Split is an e-commerce bowling app designed to cater to
              the most serious bowlers! This is a full-stack web application that leverages PostgreSQL for secure user accounts.
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
                className="bowl-logo"
                alt="seven"
              />
            </a>
          </div>
        </div>
        <div className="last project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://word-game-nu.vercel.app/"
              >
                WORD RUSH
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              <span className='stack'>Tech Stack: React, SASS, animate.css, HTML, CSS, Javascript</span> 
              <br />
              <br />
              Word Rush is a New York Times inspired word game where you can test your vocabulary with a timed challenge!
            </p>
          </div>
          <div className="project-logo">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://word-game-nu.vercel.app/"
            >
              <img src={wordRush} alt="wordRush" className="wordRushLogo" />
            </a>
          </div>
        </div>
        <div className="last project-div">
          <div className="project-description">
            <h1>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://daja-view1.herokuapp.com"
              >
                DAJA VIEW
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1>
            <p>
              Tech Stack: React, Express, SQL, Redux, CSS, REST APIs, HTML, CSS, Javascript
              <br />
              <br />
              Daja View is a social media app focused on recommending shows and
              movies. It leverages themovieDB API to have a robust selection of current
              media.
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
      </div>
    </div>
  );
};

export default Projects;
