import React from 'react'
import '../styles/Bar.css'

const ToolTip = ({amount}) => {
    return (
        <div style={{bottom: `${(amount * 2) + 35}px`}} className="tooltip">
            ${amount}
        </div>
    )
}

const Bar = ({day, amt}) => {
    const Enter = (e) => {
        let target = e.target;
        let tooltip = target.previousElementSibling;
        let p_offset = tooltip.parentElement.offsetWidth;
        let left = (tooltip.offsetWidth - p_offset ) / 2
        tooltip.style.left= left * -1 + 'px';
        tooltip.style.visibility = 'visible';
    }

    const Leave = (e) => {
        let target = e.target;
        let tooltip = target.previousElementSibling;
        tooltip.style.visibility = 'hidden';
    }

  return (
    <div className="bar_container">
        <ToolTip amount={amt} />
        <div 
            onMouseEnter={Enter}
            onMouseLeave={Leave}
            className="bar" 
            style={{height: `${amt * 2}px`}}
        >
        </div>
        <span className="day">
            {day}
        </span>
    </div>
  )
}

export default Bar