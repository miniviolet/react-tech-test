import { useEffect, useState } from 'react'
import Summary from './components/Summary'
import './App.css'
import FullCocktail from './components/FullCocktail'
import List from './components/List'

function App() {
  const [isShowFull, setIsShowFull] = useState(false)
  const [cocktailList, setCocktailList] = useState(null)
  const [currentCocktail, setCurrentCocktail] = useState(null)

  useEffect(() => {
    async function getCocktails() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
        .then(response => response.json())
        .then((data) => {
            setCocktailList(data.drinks.slice(0,10));
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
    };
    
    if(!cocktailList || cocktailList.length === 0) {
      getCocktails()
    }
  }, [])

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
    </>
  )
}

export default App
