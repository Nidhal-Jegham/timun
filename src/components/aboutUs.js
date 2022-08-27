import React, { useEffect, useState } from "react";
import "../styles/aboutus.scss";
import { Link } from "react-router-dom";
import CountDown from "./countdown";

const AboutUs = ({ team, events, loading }) => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return null;
  return (
    <div>
      <section class="values">
        <h3>Our values</h3>

        <div class="container">
          <div className="d-flex justify-content-center">
            <div class="row d-flex align-items-center">
              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-world"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Diplomacy</a>
                  </h4>
                  <p class="description">
                    Learn how to intrigue people, to convey messages
                    diplomatically, and to be composed under pressure.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Innovation</a>
                  </h4>
                  <p class="description">
                    we aim to develop a common sense on innovation in order to
                    develop the critical and solution oriented thinking to
                    achieve our goals.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-star"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Integrity</a>
                  </h4>
                  <p class="description">
                    Develop a moral compass alongside being ethical and
                    fact-finder.
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                <div class="icon-box icon-box-blue">
                  <div class="icon">
                    <i class="bx bx-rocket"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Leadership</a>
                  </h4>
                  <p class="description">
                    we aim to develop a common sense on innovation in order to
                    develop the critical and solution oriented thinking to
                    achieve our goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="about-us">
        <div className="container ">
          <div className="section-title"></div>
          <div className="row d-flex align-items-center ">
            {" "}
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/family.jpg" className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1  ">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Who we are</h3>
              </a>

              <p className="fst-italic">
                TIMUN TBS is a student organization organization under the
                direct supervision supervision of an active community operating
                under the instructions of the UN. Our club seeks to strengthen
                the skills of students such public speaking, academic knowledge,
                international international relation, and leadership.
              </p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img
                src="assets/img/missionfamily.jpg"
                className="img-fluid"
                alt
              />
            </div>
            <div className="col-md-6   pt-5 ">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Our Vision</h3>
              </a>
              <p className="fst-italic">
                To provide students with the fundamental skills to integrate and
                Lead the international Community when facing global challenges.
              </p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center d-flex align-items-center">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/green.jpg" className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <a href="https://www.facebook.com/TIMUN.TBS" target="_blank">
                <h3>Our Mission</h3>
              </a>
              <p className="fst-italic">
                Create a healthy environment for students to propel forward and
                unleash their potential alongside maintaining a sense of
                solidarity and cooperation in the entity.
              </p>

              <ul>
                <a
                  href="https://www.facebook.com/TIMUN.TBS"
                  target="_blank
                  "
                  className="btn-get-started "
                >
                  Learn More
                </a>
              </ul>
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <img src="assets/img/events.jpg" className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-4">
              <Link to="/events">
                {" "}
                <h3>Our Events</h3>
              </Link>

              <p className="fst-italic">
                For those who are interested in the realm of diplomacy, eager to
                test their public speaking and negotiation skills, want to
                expand their academic knowledge and meet interesting people.
                Coming to our events is the perfect opportunity for you to
                experience that and more
              </p>

              <ul>
                <a href className="btn-get-started ">
                  <Link onClick={componentDidMount} to="/events">
                    Learn More
                  </Link>
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-5 order-1 order-md-2">
              <img src="assets/img/committee.jpg" className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <Link to="/sguides">
                {" "}
                <h3>Our Study Guides</h3>
              </Link>

              <p className="fst-italic">
                A deep dive into the world of politics, economics, and many
                more. In our study guides, we tackle numerous subjects with high
                informative value and immaculate academic skills.
              </p>

              <ul>
                <a href className="btn-get-started ">
                  <Link to="/sguides">Learn More</Link>
                </a>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <img src="assets/img/magazines.jpg" className="img-fluid" alt />
            </div>
            <div className="col-md-7 pt-5">
              <Link to="/articles">
                {" "}
                <h3>Our Articles</h3>
              </Link>
              <p className="fst-italic">
                TIMUN TBS contributes to the academic world with numerous
                articles. On subjects ranging from cults to genetic engineering,
                the creativity of our academics is limitless.
              </p>
              <ul>
                <a
                  onClick={componentDidMount}
                  href
                  className="btn-get-started "
                >
                  <Link to="/articles"> Learn More</Link>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}
      {/* End #main */}

      <hr></hr>
      <section class="breadcrumbs">
        <div class="container board">
          <h3>Our Executive Board</h3>
        </div>
      </section>
      <section className="team">
        <div className="container d-flex justify-content-center">
          <div className="row d-flex align-items-center ">
            {team.map((member) => {
              return (
                <div className="col-lg-3  ">
                  <div className="member">
                    <div className="member-img d-flex justify-content-center">
                      <img src={member.src} className="img-fluid" alt />
                      <div className="social">
                        <a href={member.accounts.facebook} target="_blank">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href={member.accounts.insta} target="_blank">
                          <i className="bi bi-instagram" />
                        </a>
                        <a href={member.accounts.linkedin} target="_blank">
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{member.name}</h4>
                      <span>{member.position}</span>
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
