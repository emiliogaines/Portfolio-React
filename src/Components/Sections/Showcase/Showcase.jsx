import React, { Component } from "react";
import "./Showcase.css";
import iOSLogo from "./Images/ios-logo.png";
import androidLogo from "./Images/android-logo.png";

const Projects = [
  {
    Id: "badplats",
    Name: "💦 Badplats ",
    Description:
      "Denna app hjälper dig som användare att hitta närliggande badplatser. Du kan se information om nuvarande väder, badtemperatur, klassifikationer samt information om badplatsen i sig.",
    AndroidURL:
      "https://play.google.com/store/apps/details?id=com.emiliogaines.badplats",
    iOSURL:
      "https://apps.apple.com/tt/app/badplats/id1527903545#?platform=iphone",
  },
  {
    Id: "drzcompanion",
    Name: "🏍️ DRZ400 Companion",
    Description:
      "Denna app underlättar för personer som äger en motorcykel kallad DRZ400 att underhålla, serva och skruva på den.",
    AndroidURL:
      "https://play.google.com/store/apps/details?id=com.silexgames.drz400companion&hl=sv",
    iOSURL:
      "https://apps.apple.com/tt/app/drz400-companion/id1434394207#?platform=iphone",
  },
  {
    Id: "asteroiddefence",
    Name: "☄️ Asteroid Defence",
    Description:
      "Detta var ett av mina första spel som jag utvecklade. Denna version har dock blivit uppdaterad för skojs skull på senaste tiden. Utvecklad med Unity Engine.",
    AndroidURL:
      "https://play.google.com/store/apps/details?id=com.silexgames.com.AsteroidDefence&hl=sv",
    iOSURL:
      "https://apps.apple.com/tt/app/asteroid-defence/id1499396469/#?platform=iphone",
  },
  {
    Id: "droplet",
    Name: "💧 Droplet",
    Description:
      "Droplet var en app som utvecklades för att träna på animationer och att visa bilder. Det är en app där du kan hitta nya bakgrundsbilder till din telefon.",
    AndroidURL:
      "https://play.google.com/store/apps/details?id=com.silexgames.droplet&hl=sv",
    iOSURL: null,
  },
  {
    Id: "memegenerator",
    Name: "😺 Meme Generator",
    Description:
      "Denna app utvecklades som ett verktyg för att lägga till stickers och text över existerande bilder.",
    AndroidURL:
      "https://play.google.com/store/apps/details?id=com.silexgames.memegenerator",
    iOSURL: null,
  },
];

class Showcase extends Component {
  render() {
    return (
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">🔬 Utvalda project</h5>
          <hr />
          <p className="card-text">
            {Projects.map((project) => (
              <div key={project.Id} className={project.Id + " card shadow-sm"}>
                <div className="card-body">
                  <h5 className="card-title">{project.Name}</h5>
                  <p className="card-text">{project.Description}</p>
                  <hr />
                  {project.AndroidURL ? (
                    <a
                      href={project.AndroidURL}
                      className="btn btn-outline-success btn-white-background mr-2"
                    >
                      <img
                        src={androidLogo}
                        className="downloadLogo"
                        alt="Android Logo"
                      />
                      &nbsp;Visa i Play Store
                    </a>
                  ) : null}
                  {project.iOSURL ? (
                    <a
                      href={project.iOSURL}
                      className="btn btn-outline-primary btn-white-background"
                    >
                      <img
                        src={iOSLogo}
                        className="downloadLogo"
                        alt="Android Logo"
                      />
                      &nbsp;Visa i App Store
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default Showcase;
