import React from 'react'
import './About.scss'
import { Icon } from '@iconify/react';
function About() {
    const info=[
        {icon:"mdi:speedometer",
    title:"Fast",
desc:"Fast load times and lag free interaction, my highest priority."},
{icon:"mdi:cellphone-link",
    title:"Responsive",
desc:"My layouts will work on any device, big or small."},

{icon:"mdi:lightbulb-outline",
    title:"Intuitive",
desc:"Strong preference for easy to use, intuitive UX/UI."},
{icon:"mdi:rocket-launch",
    title:"Dynamic",
desc:"Websites don't have to be static, I love making pages come to life."}
    ]

    const knowledgeList=[
    {name:"React",
    percent:60},
    {name:"css",
    percent:50},
    {name:"javascript",
    percent:30},
    {name:"node js",
    percent:40},
    {name:"Express",
    percent:50},
    {name:"mongodb",
    percent:50},
    
      {name:"ui designer",
    percent:40}
    ]
   
    // 
    return (
        <div id="About" className='about'>
            <div className='top'>
                <h1>ABOUT</h1>
                <div className='underL'></div>
            </div>
            <div className='aboutContainer'>
                {info.map(el=>
                <div className='AboutCard' >
                    <div className='iconContainer'> 
                    <div className="hexagone">
                        <Icon className="cardIcon"icon={el.icon}  />
                    </div>
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.desc}</p>
                </div>
                )}
            </div>
            <div className="bottom">
                <div className="left">
        
                        <h2>
                            EDUCATION
                        </h2>
                        <ul>
                            <li> <span className='when'>June,2021 - january,2022 : </span >  <span className='what'>Full Stack JavaScript BootCamp </span><span className='where'> Go My Code Tunisia</span></li>

                            <li> <span className='when'>2016 - 2018 :</span><span className='what'>Master degree in Embeeded Systems
                             </span><span className='where'>Higher Institute of Computer Science El Manar</span></li>
                        <li> <span className='when'>2012 - 2015 :</span><span className='what'>Applied License in Computer Network Technologies </span> <span className='where'>Higher Institute of Computer Science El Manar</span></li>
                        </ul>
                        
                        <a className='linkContact' href="#contact">Let's make something special.
                        </a>
                    </div>
               
                <div className="right">
                    <h2>
                            SKILLS
                        </h2>
                    {knowledgeList.map(el=><div className="barrecontainer">
                        <div className="FillBare" style={{width:`${el.percent}%`}}>
                            
                            <div className="infoName">{el.name}</div>
                        </div>
                        <span>{el.percent}%</span>
                    </div>)}
                    

                </div>
            </div>
        </div>
    )
}

export default About
