import React, { useState, useEffect } from 'react'
import './App.scss'
import { Home } from './components/Home'

function App() {

  const URLPRODUCTSELL = `https://gradistore-spi.herokuapp.com/orders`
  const URLDISCOVER = `https://gradistore-spi.herokuapp.com/products/all`
  const [quantity, setQuantity] = useState(0)
  const [discover, setDiscover] = useState('')

  const getDataTotalProductsSell = async() => {
    console.log('prpducttoz')
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
  useEffect( () => async() => {
    console.log('userEffect')
      setQuantity( await getDataTotalProductsSell());
      setDiscover(await getDataTotalCarrousel())
  }, [])

  return (
    <div className="App">
      <Home quantity={quantity} discover={discover} />
    </div>
  )
}

export default App
