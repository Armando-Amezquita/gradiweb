import React, { useEffect, useState } from 'react'
import { Cards } from './Cards';
import image1 from '../assets/img/image3.png';
import arrowleft from '../assets/icons/arrow-left.svg'
import arrowright from '../assets/icons/arrow-right.svg'
import image2 from '../assets/img/image25.png';

export function Carousel({discover}) {
    const images = [image1, image2]
    const [selectIndex, setSelectIndex] = useState(0)
    const [selectImage, setSelectImage] = useState(images[0]);

    const selectNewImage = (index, image, next = true) => {
        const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
        const nextIndex = next ? (condition ? selectIndex + 1 : 0) : condition ? selectIndex - 1 : image.length -1 
        setSelectImage(images[nextIndex])  
        setSelectIndex(nextIndex) 
    }

    const prev = () => {
        selectNewImage(selectIndex, images, false)  
    }

    const next = () => {
        selectNewImage(selectIndex, images)
    }

  return (
    <div>
        <section className='discover'>
            <h2 className='discover-title'>Discover our <br /> planet-friendly offer</h2>
            <div className='discover-buttons-container'>
                <button onClick={prev} className='discover-button'>
                    <span className='discover-button-icon1'> <img src={arrowright} alt="" /></span>
                </button>
                <button onClick={next} className='discover-button'>
                    <span className='discover-button-icon2'><img src={arrowleft} alt="" /></span>
                </button>
            </div>
            <div className='cards-container'>
                {
                    discover.length > 0 ? discover.map( prod => (
                        <Cards
                            key={prod.id} 
                            image={image1}
                            title={prod.title} 
                            score={prod.tags[0]} 
                            minprice={prod.prices.min.amount} 
                            maxprice={prod.prices.max.amount}
                        />
                    )) : <h1>Cargando</h1>
                }
            </div>
            <button className='discover-button'>Browse all products</button>
        </section>
        {/* <img src={selectImage} alt="img" />
        <button onClick={prev}>derecha</button>
        <button onClick={next}>izq</button> */}
    </div>
  )
}
