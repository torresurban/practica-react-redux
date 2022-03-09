import React from 'react'
import { useSelector } from 'react-redux'

const ResultadoPokemon = () => {

  const buscador = useSelector((state) => state.buscador)

  return (
    <div>
        <h3>Resultado</h3>
        {buscador.loading && <div>Buscando...</div>}
        {buscador.pokemon.length >= 1 && <div>
            <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
            <span>{buscador.pokemon[0].name}</span>
        </div>}
        {buscador.error !== '' && <span>{buscador.error}</span>}
    </div>
  )
}

export default ResultadoPokemon