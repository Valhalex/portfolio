import "./portfolio.scss";
// import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from 'react';
import { webDevPorfolio } from "../../data";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // when user clicks on an arrow, slide projects in that direction
  const handleNextClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < webDevPorfolio.length - 1 ? currentSlide + 1 : 0);
  };





  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolioBg"></div>
      {/* this will move a page full of portfolio projects */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >

        {webDevPorfolio.map((d) => (
          <div className="container">
            <a href={d.github}><button>GitHub</button></a>
            {/* <a href={d.live}><button>Live</button></a> */}
            <div className="item" >
              <div className="imgContainer">
                <img src={d.img} alt="" />
              </div>
            </div>

          </div>

        ))}

      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleNextClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleNextClick()}
      />
    </div>
  );
}


