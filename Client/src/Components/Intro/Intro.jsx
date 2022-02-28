import React from 'react'
// ,{useRef}
import './Intro.scss'
// import { init } from 'ityped'
function Intro() {
    // const textRef=useRef()
    // useEffect(() => {
    //     init(textRef.current,
    //          { showCursor: true,
    //             backDelay:  1500,
    //             backSpeed:  60,
    //              strings: ['Hi there, I\'m ASMA SAHRAOUI I\'m a full stack developer'] })
    
        
    // }, [])
    return (
        <div className='intro' id="intro">
            
          <div className="left">
              <div className="imgContainer">
                  <img src="assets/myImg.png" alt="" />
              </div>
          </div>
          <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>ASMA SAHRAOUI </h1>
                    <h3>I'm a full stack developer</h3>    
                     {/* <h2 ref={textRef}></h2> */}
                </div>
                <a href='#About'>
                    <img src="assets/down.png" alt="" />
                </a>
          </div>
        </div>
    )
}

export default Intro
