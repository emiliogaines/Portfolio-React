import React, { Component } from "react";
import "./Praktik.css";

const Courses = [
  { Name: "Introduktion till systemutveckling", Grade: "VG" },
  { Name: "Introduktion till objektorientering", Grade: "VG" },
  { Name: "Objektorienterad programmering, grundläggande", Grade: "VG" },
  { Name: "Objektorienterad analys", Grade: "VG" },
  { Name: "Objektorienterad design", Grade: "G" },
  { Name: "Databaser", Grade: "VG" },
  { Name: "LIA 1 - Lärande i arbete", Grade: "VG" },
  { Name: "Agil projektledning", Grade: "G" },
  { Name: "Webbapplikationer", Grade: "VG" },
  { Name: "Objektorienterad programmering, avancerad", Grade: "Ej läst än" },
];

class Intro extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">👨‍💻 Praktik</h5>
          <hr />
          <p className="card-text">
            Vi som studerar på Handelsakademin ska utföra våran praktik, även
            kallat Lärande i Arbete (LIA), mellan datumen{" "}
            <b>2021&#8209;02&#8209;08</b> och <b>2021&#8209;05&#8209;14</b>.
            <br />
            Jag söker därmed en plats att utföra min praktik på som har en
            relevant IT-inriktning.
          </p>
          <hr />
          <small>
            Följande kurser har vi läst eller ska läsa inför praktiken:
          </small>
          <ul className="list-group mt-2">
            {Courses.map((course) => (
              <li key={course.Name} className="list-group-item">
                <span>{course.Name}</span>
                <small className="float-right">{course.Grade}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Intro;
