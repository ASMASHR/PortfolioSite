import React from 'react'
import './PortfolioList.scss'
function PortfolioList({title,active, setselected,id}) {
    return (
        <li className={active?'PortfolioList active':"PortfolioList"} onClick={()=>setselected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
