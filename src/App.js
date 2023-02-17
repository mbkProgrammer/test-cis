import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import animation from "./animation.mp4";
import { BsFillPlayCircleFill } from "react-icons/bs";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  const [active, setActive] = useState();
  // Aos.init()
  return (
    <div className="App">
      <header>
        <div className="header__content">
          <img src="/assets/logo.png" className="header__logo" />
          <h1 className="header__tittle">معرفی سیستم هوشمند شهروندی</h1>
          <h4 className="header__description">
            CIS - Citizen Intelligence System
          </h4>
          <a className="nextpage__button" href="#video">
            نمایش فیلم
          </a>
        </div>
      </header>
      <section id="video">
        <h3 className="header__tittle">چشم انداز</h3>
        <div className="video--placeholder">
          {!active ? (
            <button className="play__button" onClick={() => setActive(true)}>
              <BsFillPlayCircleFill className="play__button__ico" />
            </button>
          ) : (
              <div>
                <video
                  height="inherit"
                  width="inherit"
                  controls
                  autoPlay
                  className={`videoplayer ${active && "active"}`}
                >
                  <AiFillCloseCircle className="close__button" />
                  <source src={animation} type="video/mp4" />
                </video>
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
}

export default App;
