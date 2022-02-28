import React,{useState} from 'react'
import './Project.scss'
function Project() {
    const data=[{
        id:1,
        Title:"proj1",
        icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sapiente corrupti laudantium cumque quaerat voluptas placeat quis aliquid nisi sit, facilis corporis blanditiis, ducimus esse rem autem similique quae ipsam.",
        img:"assets/1.png"

    },
    {
        id:2,
        Title:"proj2",
        icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sapiente corrupti laudantium cumque quaerat voluptas placeat quis aliquid nisi sit, facilis corporis blanditiis, ducimus esse rem autem similique quae ipsam.",
        img:"assets/1.png"

    },
    {
        id:3,
        Title:"proj3",
        icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sapiente corrupti laudantium cumque quaerat voluptas placeat quis aliquid nisi sit, facilis corporis blanditiis, ducimus esse rem autem similique quae ipsam.",
        img:"assets/1.png"

    },
]
const [currentSlide,setCurrentSlide]= useState(0)
const handelClick=(way)=>{
(way==="left")?setCurrentSlide(currentSlide>0?currentSlide-1:data.length-1):setCurrentSlide(currentSlide<2?currentSlide+1:0)

}
    return (
        <div className='project' id='project'>
           <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
                {data.map(el=>

                <div className="container">
                    <div className="item">
                         <div className="left">
                             <div className="leftContainer">
                                 <div className="imgContainer">
                                     <img src={el.icon} alt="" />
                                 </div>
                                 <h2>{el.Title}</h2>
                                 <p>{el.desc}</p>
                                 <span>Projects</span>
                             </div>
                    </div>
                     <div className="right">
                        <img src={el.img} alt="" />
                    </div>
                    </div>

                </div>)}

           </div>
           <img src="assets/down.png" alt="" className='arrow Left' onClick={()=>handelClick("left")} />
           <img src="assets/down.png" alt="" className='arrow Right'onClick={()=>handelClick()} />
        </div>
    )
}

export default Project
