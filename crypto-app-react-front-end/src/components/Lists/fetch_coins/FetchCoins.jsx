import './FetchCoins.css';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from '../modal/Modal';
import CardCoins from '../card_coins/CardCoins';

const FetchCoins = () => {
    const arr = useSelector(state=>state.arr);
    const tempoArr = useSelector(state=>state.tempoArr);
    const dispatch = useDispatch();
    
    useEffect(async () => { // Fetch CoinGecko API on load
        try {
            let res = await fetch('https://api.coingecko.com/api/v3/coins');
            let data = await res.json();
            dispatch({type: 'MAIN_DATA', mainData: data});
        } catch (err) {
            console.error(err);
        }
        dispatch({type: 'SEARCH_VALUE', searchValue: null}); // Clear search value
    }, []);

    return(
        <section className="coins-section">
            {arr.map(coin => {
                return (
                    <CardCoins coin={coin} key={coin.id}/>
                )
            })}
            {tempoArr !== null ? <Modal/> : null} 
        </section>
    );
}
export default FetchCoins;