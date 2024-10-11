import { useEffect, useState } from 'react'
import './../App.css'
import Text from './Text'

function FullCocktail({strDrinkThumb: imageUrl, strDrink: name, strInstructions: description, strGlass, setIsShowFull}) {
    
  return (
    <div className='full'>
        <button className='backBtn' onClick={() => setIsShowFull(false)}>Back</button>
        <h2>Cocktail details</h2>
        <div>
            <img className='fullImg' src={imageUrl} />
            <h3>{name}</h3>
            <Text copy={description} />
            <p><span>Serve in:</span> {strGlass}</p>
        </div>
    </div>
  )
}

export default FullCocktail
