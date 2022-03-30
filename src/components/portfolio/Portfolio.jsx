import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];


  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      {/* subcategories for my projects */}
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected} 
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://i.pinimg.com/originals/c0/56/6b/c0566b8bd98da676799e6ba89c508ed8.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/originals/c0/56/6b/c0566b8bd98da676799e6ba89c508ed8.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/originals/c0/56/6b/c0566b8bd98da676799e6ba89c508ed8.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/originals/c0/56/6b/c0566b8bd98da676799e6ba89c508ed8.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.pinimg.com/originals/c0/56/6b/c0566b8bd98da676799e6ba89c508ed8.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>

  )
}
