import React, { useState } from "react";

const Event = (props) => {
  const date = new Date(props.event.date).toString().substring(0, 15);
  const [aftermovie, setafterMovie] = useState(false);
  console.log(props.event.sponsors);
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="card">
        <div className="card-img">
          <img src={props.event.cover} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href="#">{props.event.name}</a>
          </h5>
          <h6 className="card-subtitle">{props.event.description}</h6>
          <hr></hr>
          <h6 className="card-text">Date: {date}</h6>

          <h6 className="card-text">
            Sponsors:
            {props.event.sponsors.map((sponsor) => {
              if (
                props.event.sponsors.indexOf(sponsor) <
                props.event.sponsors.length - 1
              ) {
                return (
                  <span>
                    {" "}
                    {sponsor}
                    {" /"}
                  </span>
                );
              }
              return <span> {sponsor}</span>;
            })}
          </h6>
          <div className="learnMore">
            <h6 className="card-text">
              {props.event.aftermovie != "" ? (
                <a
                  className=" col-md-6"
                  href={props.event.aftermovie}
                  target="_blank"
                >
                  <i className="bi bi-arrow-right" /> Watch More
                </a>
              ) : null}
            </h6>
            <h6 className="card-text">
              <a className=" col-md-6" href={props.event.drive} target="_blank">
                <i className="bi bi-arrow-right" /> Learn More
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
