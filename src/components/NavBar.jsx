import React from 'react'
import toogle from '../assets/icons/tooglemenu.svg'

export function NavBar() {

    const handleChange = (e) => {
        e.preventDefault()
        const showMenu = document.querySelector('.nav-main-menu')
        showMenu.classList.toggle('nav-main-menu-show')
    }

  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            
            <div className='toogle-menu' onClick={handleChange}>
                <img className='toogle-menu-image' src={toogle} alt="" />
            </div>
            <div className='nav-main-menu'>
                <ul className=''>
                    <li className='nav-main-menu-list'>Brauzz shop <span>i</span></li>
                    <li className='nav-main-menu-list'>Ontdekken <span>i</span></li>
                    <li className='nav-main-menu-list'>Over Brauzz <span>i</span></li>
                </ul>
            </div>
            <div>
                <span>logo</span>
            </div>
            <div>
                <span>iconP</span>
                <span>iconG</span>
            </div>
        </div>

    </nav>
  )
}