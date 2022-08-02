import './App.css';
import { useEffect, useState } from 'react';
// import { type } from '@testing-library/user-event/dist/type';

const App = () => {
const [pokemon, setpokemon] = useState(null)
const [random, setRandom] = useState(1)
useEffect(() => {
  pokemonData()
}, [])

const RandomClickButton = () => {
  const randomNumber = Math.floor(Math.random() * 151)
  setRandom(randomNumber)
  pokemonData()
}

  const pokemonData = async () => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    const response = await request.json()
    setpokemon(response)
  }
  console.log(random)

  if (pokemon === null) {
    return( 
      <div className='loader'>
        <h1>LOADING</h1>
      </div>
    )
  }else{
    return (
    <>
    <div className='container'>
    <div className='card'>
      <img src={pokemon.sprites.other.dream_world.front_default}  alt={pokemon.name}/>
      <div>
      <h1>Name : {pokemon.species.name}</h1>
      <p>Height : {pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
      <ul>
        {pokemon.types.map((typePokemon) => {
          return(
            <li>{typePokemon.type.name}</li>
          )
        })}
      </ul>
      </div>
      <button onClick={RandomClickButton}> Pick Random Pokemon</button>
    </div>
    </div>
    </>
  )}
}

export default App;
