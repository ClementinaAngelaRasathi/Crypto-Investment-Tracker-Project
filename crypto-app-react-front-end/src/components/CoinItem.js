import React from 'react'
import { Button } from 'react-bootstrap'

import './Coins.css'

const CoinItem = (props) => {

    // const Getid =() =>{
    //     console.log(this.id)
    // }


    return (
        <div className='coin-row '>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>
            {/* <Button className='hide-mobile' id={props.coins.id}
            //  onClick={Getid(this.id)}
              >Add to watchlist</Button> */}
        </div>
    )
}

export default CoinItem
