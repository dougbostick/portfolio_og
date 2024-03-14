import './index.scss';
import logo2 from '../../assets/images/logo2.png'

{/* <h1>
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
    */}


const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="text-zone-contact">
        <h1>CONTACT ME</h1>
        <h2>dougbostick923@gmail.com</h2>
        <div className="button-div-contact second">
          <a
            href="https://www.linkedin.com/in/doug-bostick/"
            className="flat-button"
            alt="linkedin"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/dougbostick"
            className="flat-button"
            alt="github"
          >
            Github
          </a>
        </div>
        <h2 className="last">Thank you for visiting!</h2>
      </div>
      <div className="large-logo">
        <img src={logo2} alt="large-logo" />
      </div>
    </div>
  );
};

export default Contact;
