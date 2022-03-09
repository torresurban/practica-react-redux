import React from 'react'
import { connect } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction'

import "../App.css";

const CompraPokemon = (props) => {
  return (
    <div className='comprarpoke'>
        <button className="button background1-left-column" onClick={() => props.buy_pokemon_action(1)}>Comprar Pókemon</button>
        
        <button className="button background1-left-column" onClick={() => props.return_pokemon_action(1)}>Regresar Pókemon</button>
    </div>
  )
}


const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action
}


export default connect(null, mapDispatchToProps) (CompraPokemon)