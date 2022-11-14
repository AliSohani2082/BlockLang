import React, { useState } from 'react'
import './BlockMenu.css'
import '../../App.css'

const BlockMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* pc sideBar */}
      <div className='blockMenu md_screen'>
        <ul>
          h
        </ul>
      </div>
      {/* mobile sideBar */}
      <div className='sm_screen'>
        mobile side bar
      </div>
      
    </>
  )
}

export default BlockMenu