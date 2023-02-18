import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import animation from "./animation.mp4";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoReturnUpBackOutline, IoReturnUpForward } from "react-icons/io5";

function App() {
  const [active, setActive] = useState();
  const [active2, setActive2] = useState();
  Aos.init();
  return (
    <div className="App">
      <header id="header">
        <div className="header__content">
          <img src="/assets/logo.png" className="header__logo" alt="logo" />
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
        <h3 data-aos="fade-right" className="header__tittle">
          چشم انداز
        </h3>
        <div className={`video--placeholder ${!active && "place1"}`} data-aos="zoom-in">
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
          )}
        </div>
        <div className="button_container">
          <a className="back__button" href="#header">
            <IoReturnUpBackOutline />
          </a>
          <a className="back__button" href="#uiappp">
            <IoReturnUpForward />
          </a>
        </div>
      </section>
      <section id="uiappp">
        <h3 data-aos="fade-right" className="header__tittle">
          نمونه اولیه محصول
        </h3>
        <div className="screen__container">
          <img src="/assets/scr/1.jpg " alt="app screen shot"  className="screen__item"></img>
          <img src="/assets/scr/3.jpg"  alt="app screen shot" className="screen__item"></img>
          <img src="/assets/scr/2.jpg"  alt="app screen shot" className="screen__item"></img>
          <img src="/assets/scr/4.jpg"  alt="app screen shot" className="screen__item"></img>
          <img src="/assets/scr/5.jpg"  alt="app screen shot" className="screen__item"></img>
        </div>
        <div className="button_container">
          <a className="back__button" href="#video">
            <IoReturnUpBackOutline />
          </a>
          <a className="back__button" href="#teams">
            <IoReturnUpForward />
          </a>
        </div>
      </section>
      <section id="teams">
        <h3 data-aos="fade-right" className="teams__tittle">
          تیم ما
        </h3>
        <ul>
            <li data-aos="fade-right" data-aos-delay="300">حمیدرضا شجاعی: سرپرست و ایده پرداز و طراح نمونه اولیه ایده</li>
            <li data-aos="fade-right" data-aos-delay="400">محمد باقر کوهی: ایده پرداز و طراح وبسایت</li>
            <li data-aos="fade-right" data-aos-delay="500">مهدی مصدق: ایده پرداز و انیمیشن ساز</li>
            <li data-aos="fade-right" data-aos-delay="600">سید حسن خادم الحسینی: داستان نویس و ایده پرداز</li>
        </ul>
        <div className="button_container">
          <a className="back__button" href="#uiappp">
            <IoReturnUpBackOutline />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
