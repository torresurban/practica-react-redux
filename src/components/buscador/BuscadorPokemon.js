import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

import "../../App.css";

const BuscadorPokemon = () => {

  const dispatch = useDispatch()
  const[pokemon_name, setPokemon_name] = useState('mewtwo')

  return (
    <div className='buscadorpokemon'>
        <label htmlFor="buscar_pokemon" className='form_label'>Buscar Pokemon</label>
        <input type="text" id="buscar_pokemon"  placeholder=' ' className='form_input' value={pokemon_name}
        onChange={
          (event) => {
            setPokemon_name(event.target.value)
          }
        }
        />
        <button className='button2 background1-left-column' 
        onClick={
          () => {
            dispatch(fetchPokemon(pokemon_name))
          }
        }
        >Enviar</button>
    
    </div>
  )
}

export default BuscadorPokemon