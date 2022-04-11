import "./portfolio.scss";
import { BsGithub, BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { webDevPorfolio } from "../../data";

export default function Portfolio() {

  // function slide(direction) {
  //   var container = document.getElementById('container');
  //   var scrollCompleted = 0;
  //   var slideVar = setInterval(function () {
  //     if (direction === 'left') {
  //       container.scrollLeft -= 10;
  //     } else {
  //       container.scrollLeft += 10;
  //     }
  //     scrollCompleted += 10;
  //     if (scrollCompleted >= 100) {
  //       window.clearInterval(slideVar);
  //     }
  //   }, 50);
  // }

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* left slider */}
      
      {webDevPorfolio.map((d) => (
        
        <div className="container">
          
          
          <div className="top">
            <img src={d.img} alt="" />
          </div>
          <div className="mid">
            <div className="text">
              <p>{d.description}</p>
            </div>

          </div>
          <div className="bottom">
            <div className="links">
              <a href={d.github}><BsGithub /></a>
              <a href={d.live} title="hello"><CgWebsite /></a>
            </div>
          </div>

        </div>

      ))}
     

    </div>
  );
}


