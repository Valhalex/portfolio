import React from 'react'
import './aboutme.scss'
import { Linkedin, Github, Twitter } from 'react-bootstrap-icons';
export default function  AboutMe() {
    return (
        <div className='aboutMe'>
            <div className='border'>
            </div>
            <div className='background'></div>

            <div className='container'>
                {/* photo of me */}
                
                {/* this section will sit ontop of my image */}
                
                    <div className='text'>
                        <h1>Hello!</h1>
                        <h2>I'm a Software Engineer from Jacksonville, Florida!</h2>
                        <h3>I am strong witted and very versatile. Besides a killer love for all things music, you will find me pursuing my passions in a few different walks of life. To learn more about me, take a look at the links below!</h3>
                    </div>
                    {/* social links */}
                    <br/>
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/isaac-wallace-92b381123/">
                        <Linkedin size={ 50}/>
                        </a>
                        <a href="https://github.com/Valhalex/portfolio">
                            <Github size={ 50}/>
                        </a>
                        <a href="whttps://twitter.com/Valhalex96">
                            <Twitter size={ 50}/>
                        </a>
                    </div>
                

            </div>




        </div>
    )
}
