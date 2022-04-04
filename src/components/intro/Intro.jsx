import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

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
    <ParallaxProvider>
      <ParallaxBanner className="intro"
        layers={[
          {
            className: 'bottom',
            speed: -20,
            shouldAlwaysCompleteAnimation: true,

          },
          {
            className: 'gradient',
          },

          {
            className: 'mountain',
            speed: -10,
            shouldAlwaysCompleteAnimation: true,

          },

          {
            className: 'foreground',
            speed: -10,
            shouldAlwaysCompleteAnimation: true,

          },
        ]}

      >
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
      </ParallaxBanner>
    </ParallaxProvider>



  );
}

