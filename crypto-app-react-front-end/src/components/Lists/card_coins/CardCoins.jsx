import './CardCoins.css';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MoreInfo from '../more_info/MoreInfo';

const CardCoins = (props) => {    
    const [isChecked, setIsChecked] = useState('💔');
    const [moreInfo, setMoreInfo] = useState(undefined);
    const [collapseState, changeState] = useState({activeObject: null });
    const favArr = useSelector(state=>state.favArr);
    const dispatch = useDispatch();
    
    const favFn = (e) => {
        console.log("Clemc");
        if (favArr.indexOf(e.target.id) < 0 
        && favArr.length < 5) { // add coin to the report list
            setIsChecked('❤️');
            dispatch({type: 'FAV_DATA', favData: e.target.id});
        } else if (favArr.indexOf(e.target.id) < 0 
        && favArr.length === 5) { // add coin to temporary array
            dispatch({type: 'TEMPO_DATA', tempoData: e.target.id});
        } else { // delete coins from report list
            setIsChecked('💔');
            favArr.splice(favArr.indexOf(e.target.id), 1);
        }
    }

    useEffect(() => { // Set checked icons on load
        if(favArr.indexOf(props.coin.symbol) >= 0) {
            setIsChecked('❤️');
        } else {
            setIsChecked('💔');
        }
    }, [favArr]);
    
    const toggleActive = (index) => { // More info toggle
        if (collapseState.activeObject !== index) {
            setMoreInfo(index);
            changeState({...collapseState, activeObject: index});
        } else {
            changeState({...collapseState, activeObject: null});
        }
    }

    const toggleActiveStyle = (index) => { // Set toggle style
        if(index === collapseState.activeObject) {
            return 'active-modal';
        } else {
            return 'hidden-modal';
        }
    }

    return(
        <div className="card text-dark">
            <div>
                <h3><b>{props.coin.symbol}</b></h3>
                <p>{props.coin.name}</p>
                <button 
                className={`btn-info ${props.coin.id}`} 
                onClick={() => {
                    toggleActive(props.coin.id)
                }} 
                type="button"
                >More Info</button>

                <div className={toggleActiveStyle(props.coin.id)}>
                    <MoreInfo moreInfo={moreInfo}/>
                </div> 
            </div>

            <div>
                <button onClick={favFn} id={props.coin.symbol} type="button" >{isChecked}</button>
            </div>
        </div>
    ); 
}
export default CardCoins;