import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Intro from "../Components/Sections/Intro/Intro";
import Praktik from "../Components/Sections/Praktik/Praktik";
import Showcase from "../Components/Sections/Showcase/Showcase";
import Knowledge from "../Components/Sections/Knowledge/Knowledge";
import Github from "../Components/Sections/Github/Github";

function App() {
  return (
    <div className="App">
      <div className="row m-3">
        <div className="col-12 col-md-6">
          <Intro />
          <Showcase />
        </div>
        <div className="col-12 col-md-6">
          <Knowledge />
          <Praktik />
          <Github />
        </div>
      </div>
    </div>
  );
}

export default App;
