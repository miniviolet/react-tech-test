import './../App.css'
import Summary from './Summary'

function List({cocktailList, setCocktail}) {
  return (
    <>
        <h2>Cocktail list</h2>
        <div className="listWrapper">
            {cocktailList?.length > 0 &&  cocktailList.map((cocktail) => {
                const { idDrink:id, strDrink: name, strDrinkThumb: imageUrl, strInstructions: description } = cocktail
                return <Summary key={`cocktail${id}`} {...{ id, name, imageUrl, description, setCocktail}} />
            })}
        </div>
    </>
  )
}

export default List
