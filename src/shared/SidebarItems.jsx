import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons/faPlane'
import { faTrain } from '@fortawesome/free-solid-svg-icons/faTrain'
import { faHotel } from '@fortawesome/free-solid-svg-icons/faHotel'
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket'

function SidebarItems() {
  return (
    <div>
      <Sidebar>
          <NavLink to={'/task'}><SidebarItem icon={<FontAwesomeIcon icon={faPlane} size='2xl' className='ml-0.5'/>} text="Flights" /></NavLink>
          <NavLink to={'/event'}><SidebarItem icon={<FontAwesomeIcon icon={faTrain} size='2xl' className='ml-1'/>} text="Trains" /></NavLink>
          <NavLink to={'/note'}><SidebarItem icon={<FontAwesomeIcon icon={faHotel} size='2xl' className='ml-0.5'/>} text="Hotels" /></NavLink>
          <NavLink to={'/list'}><SidebarItem icon={<FontAwesomeIcon icon={faTicket} size='2xl' className='ml-0.5'/>} text="Bookings" /></NavLink>
        </Sidebar>
    </div>
  )
}

export default SidebarItems