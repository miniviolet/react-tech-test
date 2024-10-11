import { useEffect, useState } from 'react'
import './App.css'
import FullCocktail from './components/FullCocktail'
import List from './components/List'

function App() {
  const [isShowFull, setIsShowFull] = useState(false)
  const [cocktailList, setCocktailList] = useState(null)
  const [currentCocktail, setCurrentCocktail] = useState(null)
  const [maxCocktails, setMaxCocktails] = useState(10)
  const [showLoadBtn, setShowLoadBtn] = useState(true)

  const getCocktails = async() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
      .then(response => response.json())
      .then((data) => {
          setCocktailList(data.drinks.slice(0, maxCocktails));
          if (data.drinks.length < maxCocktails) setShowLoadBtn(false)
      })
      .catch((error) => {
          console.log(error);
          return null;
      });
  };

  useEffect(() => {
    if(!cocktailList || cocktailList.length === 0) {
      getCocktails()
    }
  }, [])

  useEffect(() => {
    getCocktails()
  }, [maxCocktails])

  const setCocktail = (id) => {
    if(!id) return;
    const cocktailMatch = cocktailList.filter((cocktail) => cocktail.idDrink === id)
    setCurrentCocktail({...cocktailMatch[0]})
    setIsShowFull(true)
  }

  return (
    <>
      <h1>Your Cocktail inspiration</h1>
      {isShowFull ? 
        <FullCocktail {...{...currentCocktail, setIsShowFull}} /> : 
        <List {...{cocktailList, setCocktail}} />}
      {showLoadBtn && !isShowFull ? <button className='loadBtn' onClick={() => setMaxCocktails(maxCocktails + 10)}>Load more...</button> : null}
    </>
  )
}

export default App
