import React from 'react'
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

import "../App.css";

const Comprarhooks = () => {

  const dispatch = useDispatch()

  return (
    <div className='comprarpoke'>
        <button className="button background1-left-column"onClick={() => dispatch(buy_pokemon_action(1))}>Comprar Pókemon</button>
        
        <button className="button background1-left-column" onClick={() => dispatch(return_pokemon_action(1))}>Regresar Pókemon</button>
    </div>
  )
}

export default Comprarhooks