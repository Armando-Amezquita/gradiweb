import React, { useState, useEffect } from 'react'
// import { getDataTotalProductsSell, getDataTotalCarrousel } from '../assets/js'
import { MainContainer } from './MainContainer'
import { Footer } from './Footer'

export function Home({quantity, discover}) {
  
  return (
    <div className='container'>
        <div className='film'>
            <p>Gratis verzending vanaf €30</p>
        </div>  
        <MainContainer quantity={quantity} discover={discover} />
        <Footer />
    </div>
  )
}