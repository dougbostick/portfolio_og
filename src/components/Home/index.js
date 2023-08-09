import './index.scss';
import { Link } from 'react-router-dom';
import biglogo from '../../assets/images/biglogo.png';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="large-logo">
        <img src={biglogo} alt="large-logo" />
      </div>
      <div className="text-zone">
        <h1>
          <span className="first">Hello,</span>
          <br />
          <span className="second">
            My name is Doug Bostick and I'm a software engineer.
          </span>
          <br />
          <span className="third">
            Welcome to my portfolio! Feel free to explore!
          </span>
        </h1>
        <h2>Full-stack Developer / Problem Solver</h2>
        <div className="button-div">
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
          <Link to="/projects" className="flat-button">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
