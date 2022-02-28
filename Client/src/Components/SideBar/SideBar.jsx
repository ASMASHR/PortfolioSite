import React from 'react'
import './SideBar.scss'
import { Icon } from '@iconify/react';
function SideBar() {
    return (
        <div className='SideBarContainer'>
          <a href="https://www.facebook.com/profile.php?id=100009466028375">
            <div className='iconContainer'>
                <Icon icon="mdi:facebook" />
             {/* <span class="iconify" data-icon=""></span> */}
            </div>
          </a>
          <a href="https://www.instagram.com/asma_sahraoui/">
            <div className='iconContainer'>
                <Icon icon="mdi:instagram" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/asmashr">
            <div className='iconContainer'>
                <Icon icon="mdi-linkedin" />
            </div>
          </a>
          <a href="https://github.com/ASMASHR">
            <div className='iconContainer'>
                <Icon icon="mdi-github" />
            </div>
          </a>
        </div>

    
    )
}

export default SideBar
