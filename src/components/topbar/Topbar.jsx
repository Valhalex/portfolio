import "./topbar.scss"
import { Person, Mail } from "@mui/icons-material"
import {BsFillFileTextFill} from "react-icons/bs"
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">IW</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 904 327 2994</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>iwallace96@outlook.com</span>
          </div>
          <div className="itemContainer resume">
            <BsFillFileTextFill className="icon" />
            <a href="https://drive.google.com/file/d/156xEb-IvzfXxJYopGlAqqFURTM8fn8dv/view?usp=sharing">
            Resume
            </a>
          </div>
          
        </div>


        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}