import React from 'react'
import './Fellowships.css'
import program_1 from '../../assets/sunday.jpeg'
import program_2 from '../../assets/bible.jpeg'
import program_3 from '../../assets/Mens.jpeg'
import program_4 from '../../assets/women.jpeg'
import program_5 from '../../assets/kids.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Fellowships = () => {
  return (
    <div className='programs'>
            <div className='program'>
            <img src={program_1} alt="" />
                <div className="caption">
                <img src={program_icon_3} alt="" />
                    <h2> Every Sunday 10h00 </h2>
                </div>
            </div>
            <div className='program'>
            <img src={program_2} alt="" />
                <div className="caption">
                <a href="https://meet.google.com/vme-fwmn-upu"><img src={program_icon_2} alt="" /></a>
                    <h2> Every Wednesday 18h00 </h2>
                    <p>Click to join</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_3} alt="" />
                <div className="caption">
                <a href="https://meet.google.com/dsu-nofo-tzs"><img src={program_icon_3} alt="" /></a>
                    <h2> Every Thursday 18h30 </h2>
                    <p>Click to join</p>
                </div>
            </div>
            <div className='program'>
                <img src={program_4} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <h2> Every 1st Saturday 15h00 </h2>
                </div>
            </div>
            <div className='program'>
                <img src={program_5} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <h2> Every Sunday 10h00 </h2>
                </div>
            </div>
        
    </div>
  )
}

export default Fellowships