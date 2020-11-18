import React, { Component } from "react";

class Github extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">📁 Källkod</h5>
          <hr />
          <p className="card-text">
            Hela denna hemsida och källkoden hittar ni på Github genom att
            klicka på knappen nedan.
          </p>
          <a
            href="https://github.com/emiliogaines/Portfolio-React"
            className="btn btn-dark w-100"
          >
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default Github;
