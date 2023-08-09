import './index.scss';

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="text-zone-contact">
        <h1>Contact Me</h1>
        <div>dougbostick923@gmail.com</div>
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

        <div className="last">Thank you for visiting!</div>
      </div>
    </div>
  );
};

export default Contact;
