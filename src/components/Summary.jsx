import './../App.css'
import Text from './Text'

function Summary({id, imageUrl, name, description, setCocktail}) {
    const handleClick = () => {
        setCocktail(id)
    }

  return (
    <div className='summary' onClick={handleClick}>
      <img className='thumbnail' src={imageUrl} />
      <div>
        <h3>{name}</h3>
        <Text copy={description} isLimited />
      </div>
    </div>
  )
}

export default Summary
