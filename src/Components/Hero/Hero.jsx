import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            
        <a href="https://www.youtube.com/@BodyOfChristAssembly-dt9fd"><button className='btn'>Watch a Sermon <img src={dark_arrow} alt="" /></button></a>
        
        </div>
    </div>
  )
}

export default Hero