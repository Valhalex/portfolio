import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  
  // typing/blinking effect
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Fullstack Developer", "Problem Solver"],
    });
  }, []);




  return (

    <div className="intro" id="intro">
      <div className="bottom" ></div>
      <div className="gradient"></div>
      <div className="mountain"></div>
      <div className="mountBlur"></div>
      <div className="foreground rellax" data-rellax-speed="7" ></div>
      <div className="frontTextContainer">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Isaac Wallace</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#aboutMe">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
      

  );
}

