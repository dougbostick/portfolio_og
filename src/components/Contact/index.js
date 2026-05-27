import './index.scss';
import logo2 from '../../assets/images/logo2.png'


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
