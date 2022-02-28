import React,{useEffect, useState} from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import {ALLportfolio} from '../../data'
function PortFolio({setProjectData, setProjectOpen}) {
    let [data,setData]=useState([])
    let [selected,setselected]=useState("ALL")
    let WebProject=ALLportfolio.filter(el=>el.categorie==="webApp")
    let DesignProject=ALLportfolio.filter(el=>el.categorie==="Design")
    let JsProject=ALLportfolio.filter(el=>el.categorie==="JS")
   useEffect(()=>{
       switch(selected)
       {
           case "ALL":
           setData(ALLportfolio)
           break
           case "REACT-JS":
            //    setData(webAppPortFolio)
            setData(WebProject)
               break
            case "design":
            //    setData(DesignAppPortFolio)
            setData(DesignProject)
               break
            case "javaScript":
                setData(JsProject)
                break
            default:
            setData(ALLportfolio)
       }
   },[selected])
    const PList=[
        {id:"ALL",
    title:"ALL"},
        {id:"REACT-JS",
    title:"REACT-JS"},
        {id:"design",
    title:"Design"},
        {id:"javaScript",
    title:"javaScript"},

    ]
    const handleClick=(d)=>{

        setProjectOpen(true)
        setProjectData(d)
    }
    return (
        <div  className='PortFolio'id="portfolio">
            <div className='top'>
                <h1>PROJECTS</h1>
                <div className='underL'></div>
            </div>
           
           <ul>
            {PList.map(item=><PortfolioList title={item.title} active={selected===item.id} id={item.id} setselected={setselected}/>)}   
           </ul>
           <div className="container" id="portfolioContainer">
               
                   {data.map(d=>
                    <div className="item">
                        <img src={d.img} alt="" />
                        <div className="projDesc">
                            <div className="projtitle">
                                <h3>{d.title}</h3>
                                <p>{d.desc}</p>
                            </div>
                            <button onClick={()=>handleClick(d)}>learn More</button>
                        </div>
               </div>
               )}
                  
           </div>
        </div>
    )
}

export default PortFolio
