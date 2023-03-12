import React from 'react'

export function ListFooter({id, title, subtitles, showMenu}) {
    
  return (
    <div>
        <p className='footer-products-titles' onClick={showMenu}>
            {title} <span></span>
        </p>

        <div className='footer-submenu-product' id={id} >
            {
                subtitles.map((e, idx) => (
                    <span className='footer-submenu-product-title' key={idx}>{e}</span>
                ))
            }
        </div>
    </div>
  )
}
