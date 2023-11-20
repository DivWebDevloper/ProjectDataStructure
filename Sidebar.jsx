import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption'
function Sidebar() {
  return (
    <div className='Sidebar'>
      <i class='bx bxl-twitter'></i>

      <SidebarOption text="Home"/>
      <SidebarOption text="Explore"/>
      <SidebarOption text="Notification"/>
      <SidebarOption text="Message"/>
      <SidebarOption text="Bookmarks"/>
      <SidebarOption text="Lists"/>
      <SidebarOption text="Profile"/>
      <SidebarOption text="More"/>

      <button className='sidebarTweet'>Tweet</button>
    </div>
  )
}

export default Sidebar
