import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from 'react';
import { webDevPorfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "mobile",
  //     title: "Mobile App",
  //   },
  //   {
  //     id: "design",
  //     title: "Design",
  //   },
  //   {
  //     id: "content",
  //     title: "Content",
  //   },
  // ];


  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      {/* subcategories for my projects */}
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected} 
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {webDevPorfolio.map((d) => (
          <div className="item">
            <img src={d.img}
            alt={d.description}
            />
            <h3>{d.title}</h3>
            </div>
        ))}
        
        
      </div>
    </div>

  )
}
