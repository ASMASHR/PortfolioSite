import React from 'react'
import './NavBar.scss'
import {Person,Mail} from '@material-ui/icons';
function NavBar({menuOpen,setMenuOpen}) {
    return (
        <div className={"navbar " + (menuOpen && "active") }>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo' > ASMA SAHRAOUI </a>
                <div className='itemContainer'>
                    <div className='icon'>
                        <Person/>  
                        <span>+ 216 53 182 685</span>
                    </div>
                    <div className='icon'>
                        <Mail/> 
                        <span>asmaessahraouii@gmail.com</span>
                    </div> 
                </div>            
            </div>
            <div className="right">
                <div className='burg' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='Line1'></span>
                    <span className='Line2'></span>
                    <span className='Line3'></span>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default NavBar
