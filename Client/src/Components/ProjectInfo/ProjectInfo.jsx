import React,{ useState, useRef, useEffect } from 'react'
 import './ProjectInfo.scss'
// import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
function ProjectInfo({ProjectData,setProjectData,ProjectOpen, setProjectOpen}) {
 const [currentSlide,setCurrentSlide]= useState(0)
const handelClick=(way)=>{
(way==="left")?setCurrentSlide(currentSlide>0?currentSlide-1:ProjectData.moreImgs.length-1):setCurrentSlide(currentSlide<ProjectData.moreImgs.length-1?currentSlide+1:0)

}
 document.addEventListener("click",
        function(event) {
          if (event.target.matches(".button-close") || event.target.matches(".PortFolio")|| event.target.matches("#portfolioContainer")) 
            {setProjectOpen(false)}   
          },false)

    return (
        <div className={'projectInfo ' + (ProjectOpen && "active")} >
          {ProjectData&&
          <div className='ProjectInfoContainer'>
                <div className="imgContainer" >
                      {/* <Icon className='button-close' id="button-close" icon="mdi:close" /> */}
                      <div className="slider" style={{transform:`translateX(-${currentSlide*700}px)`}}> 
                             {/*  */}
                            {ProjectData.moreImgs.map(el=>
                            <div className="topImgContainer">
                              <img src={el} alt="" />
                            </div>
                            )}
                      </div>
                      <div className="buttom">
                          <img src="assets/down.png" alt="" className='arrow Left' onClick={()=>handelClick("left")} />
                          <img src="assets/down.png" alt="" className='arrow Right'onClick={()=>handelClick()} />
                      </div>
                </div>
                
                <div className="infoContainer">
                    <div className="desc">       
                        <h2>Description:</h2>
                        <p>{ProjectData.Moredesc}</p>
                    </div>
                    <div className="tools">
                        <h2>tools:</h2>
                        <p> {ProjectData.tools.map(el=><span>{el}, </span>)}...</p>
                  </div>
                 <button className='ButtonSite'> <a href={ProjectData.site}>VIEW Site </a></button>
                </div>
          </div>
          }
        </div>
    )
}

export default ProjectInfo