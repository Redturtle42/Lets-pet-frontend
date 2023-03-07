import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer">
          <div className="footer-contact-container">
            <ul>
              <li>
                <a href="tel:+36301234567">
                  <i
                    className=" fas
                            fa-mobile-alt"
                  ></i>
                  <p> 06 30 123 45 67</p>
                </a>{" "}
              </li>
              <li>
                <i className="far fa-envelope-open"></i>
                <p>6700 Szeged, Design street 1.</p>
              </li>
              <li>
                <a href="mailto:letspet.heroku@gmail.com">
                  <i className="fas fa-at"></i>
                  <p>letspet.heroku@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social-container">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/izabella.tanacsnelengyel/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/izabella.tanacsne/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/redturtle42/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          Created by Redturtle &nbsp;
          {new Date().getFullYear()}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
