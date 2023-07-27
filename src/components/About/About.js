import { useState, useEffect, useRef } from "react";
import { PiPlantFill } from "react-icons/pi";
import { PiArrowCircleRightFill } from "react-icons/pi";
import "./About.css";
import jar1 from "../../assets/jar.jpg";
import jar2 from "../../assets/jar2.jpg";
import jar from "../../assets/jar3.jpg";
import jar4 from "../../assets/jar4.jpg";
import jar5 from "../../assets/jar5.jpg";
function About() {
  const imgs = [jar1, jar2, jar, jar4, jar5];
  const widthat = ["20%", "40%", "60%", "80%", "100%"];
  const pl = useRef();
  const [counter, setCounter] = useState(0);
  function progress() {
    if (counter === imgs.length - 1) {
      setCounter(0);
      pl.current.style.width = widthat[4];
    } else {
      setCounter(counter + 1);
      pl.current.style.width = widthat[counter];
    }
  }
  return (
    <div className="about">
      <div className="about__info">
        <h1>
          <PiPlantFill className="piplantfill2" />
        </h1>
        <h1>
          We are commited to provide you with variety of terraiums that are
          ideal for indoor uses.
        </h1>
        <div className="about__info-description">
          <div className="vertical-line"></div>
          <div className="about__info-h5">
            <p>
              If you're wondoring what terrariums are, take a look on the
              following image to get familiar with it.
            </p>
          </div>
          <div className="vertical-line"></div>
          <div className="about__info-h5">
            <p>
              If you're wondoring what terrariums are, take a look on the
              following image to get familiar with it.
            </p>
          </div>
        </div>
      </div>
      <div className="about__jar__mose-container">
        <div className="about__jar">
          <img src={imgs[counter]} />
          <div className="progress-line-shad"></div>
          <div ref={pl} className="progress-line"></div>
          <button className="progress-btn" onClick={progress}>
            <PiArrowCircleRightFill />
          </button>
        </div>
        <div className="about__mose">
          <p>
            Terraiums are like small garden in a jar. the plants used{" "}
            <a href="https://en.wikipedia.org/wiki/Moss">Mosses</a>,{" "}
            <a href="https://en.wikipedia.org/wiki/Cactus">Cactus</a>,{" "}
            <a href="https://en.wikipedia.org/wiki/Bonsai">Bonsai</a>, and more.
            these special plants are used due to their ability to grow slow and
            require less nutritions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
