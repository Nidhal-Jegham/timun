import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0 });
  };
  const componentDidMountAbout = () => {
    window.scrollTo({ top: 1250, behavior: "smooth" });
  };
  const componentDidMountContact = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container d-flex  justify-content-center">
          <div className="row">
            <div className="col-lg-12">
              <h4>Our Partners</h4>
              <div className="d-flex justify-content-around align-items-stretch">
                <img
                  className="image"
                  src="/assets/img/logo_tbs-Vector.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links ">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li onClick={componentDidMountAbout}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp " to="/">
                    About Us
                  </Link>
                </li>
                <li onClick={componentDidMountAbout}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp" to="/events">
                    Events
                  </Link>
                </li>
                <li onClick={componentDidMountAbout}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp " to="/sguides">
                    Study Guides
                  </Link>
                </li>

                <li onClick={componentDidMount}>
                  <i className="bx bx-chevron-right" />
                  <Link className="navbar-comp" to="/articles">
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Bir El Kassaa 2059, <br />
                Tunisia 2059 El Mourouj, Tunisia
                <br />
                <br />
                <br />
                <strong>Phone:</strong> +216 54 982 651
                <br />
                <strong>Email:</strong> timuntbs@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-36 footer-info">
              <h3>About TIMUN TBS</h3>
              <p>
                TIMUN TBS is a chapter founded by a group of students. We aim to
                provide TBS students with the necessary skills and experience to
                become exemplary leaders.
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  className="facebook"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/timuntbs/?hl=en"
                  className="instagram"
                >
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex  justify-content-center">
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ */}
          Developed by Nidhal Jegham & Wael Dghim
        </div>
      </div>
    </footer>
  );
};
export default Footer;
