import React from 'react'
import './Footer.css'
import wh from '../../assets/whatsapp.png'
import yt from '../../assets/YT.png'


const Footer = () => {
  return (
    <div className='footer'>
        <p>2024 Body of Christ Assembly. All rights reserved</p>
        
        <div className="social-links-footer">
                <a href="https://wa.me/+27817024289"><img src={wh} alt="Whatsapp"/></a>
                <a href="https://www.youtube.com/@BodyOfChristAssembly-dt9fd"><img src={yt} alt="youtube"/></a>
                
        </div>
        
    </div>
  )
}

export default Footer