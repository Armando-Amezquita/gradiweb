import React from 'react'
import { listFooter } from '../assets/js'
import { ListFooter } from './ListFooter'
import social from '../assets/icons/Vector (2).png'

export function Footer() {

    const handleChange = (e) => {
        e.preventDefault()
        const showMenu = document.querySelector('.footer-submenu-product')
        showMenu.classList.toggle('footer-submenu-product-show')
    }

    
  return (
    <footer className='footer'>
        <div className='footer-brand'>
            <p>brauzz.</p>
        </div>
        <div className='footer-container'>
            <div className='footer-produts'>
                {
                    listFooter.map(item => (
                        <ListFooter 
                            key={item.id}
                            title={item.title}
                            subtitles={item.subtitles}
                            showMenu={handleChange}
                        />
                    ))
                }
                <div className='footer-contact'>
                    <p className='footer-contact-title'>Contact</p>
                <div>
                    <span> {/* <img src={social} alt="" /> */}</span>
                    <span></span>
                </div>
            </div>
                
            </div>
        </div>
        <div className='footer-copyr'>
            <span> © 2021 All rights reserved</span>
        </div>
    </footer>
  )
}
