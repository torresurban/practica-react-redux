import React from 'react'
import { useSelector } from 'react-redux'

const Cantidadhook = () => {

    const game_shop = useSelector((state) => state.game_shop);

  return (
    <div>
        Unidades: {game_shop.pokemon}
    </div>
  )
}

export default Cantidadhook