import React, { useEffect, useState, useRef } from "react";
import "../styles/studyguide.scss";

import Studyguide from "../components/studyguide";
import Footer from "../components/footer";
function SGuides({ loading, setLoading }) {
  const [SearchSguide, setSearchSguide] = useState("");
  const [sGuidePage, setSGuidePage] = useState(1);
  const [events, setEvents] = useState([]);

  const [language, setLanguage] = useState("");
  const [eventName, setEventName] = useState("");

  const studyRef = useRef();
  const MountStudy = (studyguide) => {
    studyRef.current.scrollIntoView({ behavior: "smooth" });
    setSGuidePage(
      sGuides
        .filter((sguide) =>
          sguide.title.toLowerCase().includes(SearchSguide.toLocaleLowerCase())
        )
        .filter((sguide) => sguide.language.includes(language))

        .indexOf(studyguide) /
        4 +
        1
    );
  };

  const LearnMore = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  const [sGuides, setSGuides] = useState([]);
  useEffect(() => {
    setLoading(true);
    setSGuidePage(1);
    fetch("https://timunbackend.herokuapp.com/sguides")
      .then((res) => res.json())
      .then((data) => {
        setSGuides(data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
    fetch("https://timunbackend.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Search = (e) => {
    setSearchSguide(e.target.value);
    setSGuidePage(1);
    console.log(
      sGuides
        .filter((sguide) =>
          sguide.title.toLowerCase().includes(SearchSguide.toLocaleLowerCase())
        )
        .filter((sguide) => sguide.language.includes(language))
    );
  };
  if (loading) return null;
  return (
    <div>
      <section
        id="studyguides"
        className="d-flex justify-cntent-center align-items-center"
      >
        <div className="container position-relative  d-flex justify-content-center ">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-8">
              <h2>Sharing Academic Knowledge </h2>
              <h3>TIMUN TBS</h3>
              <a onClick={LearnMore} href className="btn-get-started ">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={studyRef} className=" d-flex  justify-content-center   ">
        <div className="Study-title d-flex col-xl-12 align-items-center justify-content-center   ">
          {" "}
          <section>
            <h3>Our Study Guides</h3>
          </section>
        </div>
      </div>

      <div className="Study-title-after"></div>

      <section>
        <div class=" d-flex justify-content-center">
          <div class="row">
            <div class="col-lg-8 entries">
              {sGuides

                .filter((sguide) =>
                  sguide.title
                    .toLowerCase()
                    .includes(SearchSguide.toLocaleLowerCase())
                )
                .filter((sguide) => sguide.language.includes(language))
                .filter((sguide) => sguide.event.includes(eventName))

                .filter(
                  (Sguide) =>
                    sGuides
                      .filter((sguide) =>
                        sguide.title
                          .toLowerCase()
                          .includes(SearchSguide.toLocaleLowerCase())
                      )
                      .filter((sguide) => sguide.language.includes(language))
                      .filter((sguide) => sguide.event.includes(eventName))

                      .indexOf(Sguide) >=
                    (sGuidePage - 1) * 4
                )

                .filter(
                  (Sguide) =>
                    sGuides
                      .filter((sguide) =>
                        sguide.title
                          .toLowerCase()
                          .includes(SearchSguide.toLocaleLowerCase())
                      )
                      .filter((sguide) => sguide.language.includes(language))
                      .filter((sguide) => sguide.event.includes(eventName))

                      .indexOf(Sguide) <=
                    sGuidePage * 4 - 1
                )

                .map((studyguide) => {
                  return <Studyguide studyguide={studyguide} />;
                })}
            </div>
            <div class="col-lg-4 block ">
              <div class="sidebar">
                <h3 class="sidebar-title">Search</h3>
                <div class="sidebar-item search-form">
                  <input
                    type="text"
                    placeholder="Search Study Guide"
                    value={SearchSguide}
                    onChange={Search}
                  ></input>
                  <button type="submit" onClick={() => setSearchSguide("")}>
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>

                <h3 class="sidebar-title">Languages</h3>
                <div class="sidebar-item categories">
                  <ul>
                    <li
                      onClick={() => setLanguage("")}
                      className={language === "" ? "active" : ""}
                    >
                      All
                      <span>({sGuides.length})</span>
                    </li>
                    <li
                      onClick={() => setLanguage("EN")}
                      className={language === "EN" ? "active" : ""}
                    >
                      English
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) => sGuide.language === "EN")
                            .length
                        }
                        )
                      </span>
                    </li>
                    <li
                      onClick={() => setLanguage("FR")}
                      className={language === "FR" ? "active" : ""}
                    >
                      French
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) => sGuide.language === "FR")
                            .length
                        }
                        )
                      </span>
                    </li>
                    <li
                      onClick={() => setLanguage("AR")}
                      className={language === "AR" ? "active" : ""}
                    >
                      Arabic
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) => sGuide.language === "AR")
                            .length
                        }
                        )
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 class="sidebar-title">Events</h3>
                <div class="sidebar-item categories">
                  <ul>
                    <li
                      onClick={() => setEventName("")}
                      className={eventName === "" ? "active" : ""}
                    >
                      All
                      <span>({sGuides.length})</span>
                    </li>
                    <li
                      onClick={() => setEventName("MWTO")}
                      className={eventName.includes("MWTO") ? "active" : ""}
                    >
                      Model World Trade Organization
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) =>
                            sGuide.event.includes("MWTO")
                          ).length
                        }
                        )
                      </span>
                    </li>
                    <li
                      onClick={() => setEventName("ARP")}
                      className={eventName.includes("ARP") ? "active" : ""}
                    >
                      Model ARP{" "}
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) =>
                            sGuide.event.includes("ARP")
                          ).length
                        }
                        )
                      </span>
                    </li>
                    <li
                      onClick={() => setEventName("Immunity")}
                      className={eventName.includes("Immunity") ? "active" : ""}
                    >
                      Immunity MUN{" "}
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) =>
                            sGuide.event.includes("Immunity")
                          ).length
                        }
                        )
                      </span>
                    </li>
                    <li
                      onClick={() => setEventName("TBS MUN")}
                      className={eventName.includes("TBS MUN") ? "active" : ""}
                    >
                      TBS MUN{" "}
                      <span>
                        (
                        {
                          sGuides.filter((sGuide) =>
                            sGuide.event.includes("TBS MUN")
                          ).length
                        }
                        )
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="sidebar-title">Recent Events</h3>
                  <div className="sidebar-item recent-posts">
                    {events
                      .filter((event) => events.indexOf(event) < 5)
                      .map((event) => (
                        <div className="post-item clearfix">
                          <img src={event.cover} alt="..." />{" "}
                          <h4>
                            <a href={event.drive} target="_blank">
                              {event.name}{" "}
                            </a>
                          </h4>
                          <time>{event.date.toString().substring(0, 10)}</time>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="pages">
        <ul class="justify-content-center">
          <button className={sGuidePage === 1 ? "inactive" : "upDown"}>
            <i class="bi bi-chevron-double-left"></i>
          </button>
          {sGuides

            .filter((sguide) =>
              sguide.title
                .toLowerCase()
                .includes(SearchSguide.toLocaleLowerCase())
            )
            .filter((sguide) => sguide.language.includes(language))
            .filter((sguide) => sguide.event.includes(eventName))

            .filter(
              (sguide) =>
                sGuides
                  .filter((sguide) =>
                    sguide.title
                      .toLowerCase()
                      .includes(SearchSguide.toLocaleLowerCase())
                  )
                  .filter((sguide) => sguide.language.includes(language))
                  .filter((sguide) => sguide.event.includes(eventName))

                  .indexOf(sguide) %
                  4 ===
                0
            )
            .map((studyguide) => {
              return (
                <li>
                  <button
                    className={
                      sGuidePage ===
                      sGuides

                        .filter((sguide) =>
                          sguide.title
                            .toLowerCase()
                            .includes(SearchSguide.toLocaleLowerCase())
                        )
                        .filter((sguide) => sguide.language.includes(language))
                        .filter((sguide) => sguide.event.includes(eventName))

                        .indexOf(studyguide) /
                        4 +
                        1
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      MountStudy(studyguide);
                    }}
                  >
                    {parseInt(
                      sGuides

                        .filter((sguide) =>
                          sguide.title
                            .toLowerCase()
                            .includes(SearchSguide.toLocaleLowerCase())
                        )
                        .filter((sguide) => sguide.language.includes(language))
                        .filter((sguide) => sguide.event.includes(eventName))

                        .indexOf(studyguide) /
                        4 +
                        1
                    )}
                  </button>
                </li>
              );
            })}
          <button
            onClick={console.log(Math.floor(sGuides.length / 4))}
            className={
              sGuidePage === Math.floor(sGuides.length / 4) + 1
                ? "inactive"
                : "upDown"
            }
          >
            <i class="bi bi-chevron-double-right"></i>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SGuides;
