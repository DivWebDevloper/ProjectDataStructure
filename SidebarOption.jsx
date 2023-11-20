import React from 'react'
import "./SidebarOption.css"
function SidebarOption({text}) {
  return (
    <div className='SidebarOption'>
      <i class='bx bx-home'></i>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
