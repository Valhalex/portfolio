import "./portfolio.scss";
import { BsGithub, BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { webDevPorfolio } from "../../data";

export default function Portfolio() {

  

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      
      
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


