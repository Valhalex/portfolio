import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const textRef = useRef();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  // parallax listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    <div className="intro">
      <div className="bottom" ></div>
      <div className="gradient"></div>
      <div className="mountain" style={{ transform: `translateY(${offsetY * 100}px)` }}></div>
      <div className="mountBlur"></div>
      <div className="foreground" style={{ transform: `translateY(${offsetY * 0.8}px)` }}>
      <div className="frontTextContainer">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Isaac Wallace</h1>
          <h3>
            I am a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      </div>
      
    </div>

  );
}

