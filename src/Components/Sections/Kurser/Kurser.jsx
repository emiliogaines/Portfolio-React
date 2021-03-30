import React, { Component } from "react";
import "./Kurser.css";

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
  {
    Name: "Objektorienterad programmering, avancerad",
    Grade: "VG",
  },
  {
    Name: "LIA 2 - Lärande i arbete",
    Grade: "Nuvarande",
  },
  {
    Name: "Examensarbete",
    Grade: "Ej läst",
  },
];

class Intro extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">👨‍💻 Kurser</h5>
          <hr />
          <p className="card-text">Följande kurser med respektive betyg ingår i vår studieplan.</p>
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
