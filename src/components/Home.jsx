import React, { useState, useEffect } from 'react'
// import { getDataTotalProductsSell, getDataTotalCarrousel } from '../assets/js'
import { MainContainer } from './MainContainer'
import { Footer } from './Footer'

export function Home() {
    const [quantity, setQuantity] = useState(0)
    const [discover, setDiscover] = useState('')

    const URLPRODUCTSELL = `https://gradistore-spi.herokuapp.com/orders`
    const URLDISCOVER = `https://gradistore-spi.herokuapp.com/products/all`

    useEffect( () => async() => {
        setQuantity( await getDataTotalProductsSell());
        setDiscover(await getDataTotalCarrousel())
    }, [])

    const getDataTotalProductsSell = async() => {
      const data = await fetch(`${URLPRODUCTSELL}`)
          .then(res => res.json())
          .then(res => res)
          .catch(err => console.log(err));
          
      const orders = data.orders.nodes;
      let lineItemsTotal = 0;
  
      for (const order of orders) {
          for (const lineitem of order.lineItems.nodes) {
              lineItemsTotal += lineitem.quantity
          }
      }
      return Math.floor(lineItemsTotal / orders.length); 
  }
  
  const getDataTotalCarrousel = async() => {
    try{
        
        const data = await fetch(`${URLDISCOVER}`)
            .then(data => data.json())
            .then(res => res)
            .catch(err => console.log(err))

        const products = data.products.nodes;

        return products;

    }catch(err){
        console.log('err', err)
    }
}



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