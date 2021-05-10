import React, { Component } from "react";
import Selfie from "./Images/self.jpg";
import "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">🙋‍♂️ Välkommen</h5>
          <hr />
          <div className="row">
            <div className="col-auto">
              <img src={Selfie} className="img-thumbnail shadow-sm selfie" alt="Selfie" />
            </div>
            <div className="col">
              <p className="card-text">
                <b>Hejsan!</b>
                <br />
                Mitt namn är Emilio Gaines och jag är 22 år gammal. Jag pluggar nuvarande till Systemutvecklare på Handelsakademin och har tidigare
                pluggat på Göteborgs Universitet inom deras Chalmers avdelning.
                <br />
                Jag läser nu mitt sista år, alltså kommer jag till sommaren 2021 vara färdigexaminerad.
                <br />
                Jag söker nu ett jobb som jag kan påbörja före eller efter examen.
                <br />
                <a href={"/files/CV_Emilio_Gaines.pdf"} download>
                  {"< Hämta mitt CV genom att klicka här. />"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
