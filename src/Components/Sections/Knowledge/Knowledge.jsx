import React, { Component } from "react";

class Showcase extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">🧠 Kunskaper</h5>
          <hr />
          <p className="card-text">
            Jag har haft programmering som hobby i ungefär 8 år även om det har
            varit lite till och från. Under denna tid har jag jobbat framförallt
            inom följande programmeringspråk dock främst apputveckling:
            <br />
            <b>
              Kotlin, Java, .NET, C++, C#, PHP, React, Javascript, HTML, CSS
            </b>
          </p>
        </div>
      </div>
    );
  }
}

export default Showcase;
