import React from 'react'
import Logo from './Logo'
import NomeLogo from './NomeLogo'
import BtLogin from './ButtonLogin'
import './style.css'

function Header() {
  return (
    <div className='Header'>
      <div className='Logo-name'>
        <Logo/>
        <NomeLogo/>
      </div>
      
      <BtLogin/>
    </div>
  )
}

export default Header;