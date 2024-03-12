import './index.scss';
import biglogo from '../../assets/images/biglogo.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone-about">
        <h1>ABOUT ME...</h1>
        <p>
          I have always been a lover of solving problems and building projects.
          I found the perfect way to combine them when I started programming!
        </p>
        <p>
          I learned full-stack development from Fullstack Academy and
          immediately fell in love with debugging code and solving algorithms.
        </p>
        <p>
          Before my career as a software engineer I was a jazz guitarist who did
          everything from wedding bands to playing for Royal Carribean on their
          cruise ships.
        </p>
        <p>
          I have noticed many similarities between software development and
          music. Both of them force you to think in the abstract and use parts
          of your brain you don't normally use, which I find very appealing!
        </p>
      </div>
      <div className="large-logo-about">
        <Link to="/">
          <img src={biglogo} alt="large-logo" />
        </Link>
      </div>
    </div>
  );
};

export default About;
