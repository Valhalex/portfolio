import "./portfolioList.scss"

export default function PortfolioList({id,title, active, setSelected}) {
  return (
    // if user hovers over li, than set class to "portfolioList active"
      <li className={active ? "portfolioList active" : "portoflioList"} 
      onClick={() => setSelected(id)}>
          {title}
      </li>
  );
}
