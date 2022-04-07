import { FaSass,FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaCodeBranch, FaReact, FaNodeJs } from "react-icons/fa"
import {BsGearFill,BsMicrosoft} from "react-icons/bs"
import {SiJquery} from "react-icons/si"
import './expertise.scss'
export default function Expertise() {
    return (
        <div className='expertise'>
            <div>
                <h1>MY EXPERTISE</h1>
            </div>
            <div className='container'>
                <div className='item'>
                    <p>HTML5</p>
                    <hr />
                    <FaHtml5 className="icon"/>
                </div>
                <div className='item'>
                    <p>CSS3</p>
                    <hr />
                    <FaCss3Alt className="icon"/>
                </div>
                <div className='item'>
                    <p>JavaScript</p>
                    <hr />
                    <FaJsSquare className="icon"/>
                </div>
                <div className='item'>
                    <p>jQuery</p>
                    <hr />
                    <SiJquery className="icon"/>
                </div>
                <div className='item'>
                    <p>Git</p>
                    <hr />
                    <FaCodeBranch className="icon"/>
                </div>
                <div className='item'>
                    <p>API's</p>
                    <hr />
                    <BsGearFill className="icon"/>
                </div>
                <div className='item'>
                    <p>React</p>
                    <hr />
                    <FaReact className="icon"/>
                </div>
                <div className='item'>
                    <p>Node</p>
                    <hr />
                    <FaNodeJs className="icon"/>
                </div>
                <div className='item'>
                    <p>Dot Net Core</p>
                    <hr />
                    <BsMicrosoft className="icon"/>
                </div>
                <div className='item'>
                    <p>Databases</p>
                    <hr />
                    <FaDatabase className="icon"/>
                </div>
                <div className='item'>
                    <p>Sass</p>
                    <hr />
                    <FaSass className="icon"/>
                </div>
                

                
            </div>
        </div>
    )
}

