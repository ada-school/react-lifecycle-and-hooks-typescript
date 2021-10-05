import { useState } from 'react'
//fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(resp => resp.json()).then(data => console.log(data))

interface IPokemon {
  id: number
}

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState('')
  const [requestInProgress, setRequestInProgress] = useState(false)
  const [pokemon, setPokemon] = useState<null | IPokemon>(null)

  async function handleClick() {
    try {
      setRequestInProgress(true)
      const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)).json()
      setPokemon(data)
    } catch (error) {
      console.error(error)
    } finally {
      setRequestInProgress(false)
    }
  }

  return (
    <div>
      <label htmlFor="pokemon-input">
        Ingresa nombre del pokemon:
        <input id="pokemon-input" name="pokemon-input" value={pokemonName} onChange={event => setPokemonName(event.currentTarget.value)}/>
      </label>
      <button onClick={() => handleClick()}>
        buscar  
      </button>
      {requestInProgress ? 'Cargando...' : null}
      {pokemon === null ? null : <p>{pokemon.id}</p>}
    </div>
  )
}
