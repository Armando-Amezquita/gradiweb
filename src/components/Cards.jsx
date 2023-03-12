import React from 'react'

export function Cards({image, title, score, minprice, maxprice}) {
  return (
    <div className='card'>
      <img className='card-image' src={image} alt="" />
      <div className='card-container'>
          <span className='card-container-descont'>desi</span>
          <button className='card-container-button'>see more</button>
      </div>
      <div className='card-description'>
          <p>{title}</p>
          <span>start <span>{score}</span></span>
          <p>€{maxprice} <span>€{minprice}</span></p>
      </div>
    </div>
  )
}
