import './Modal.css';
import {useSelector, useDispatch} from 'react-redux';

const Modal = () => {
    const favArr = useSelector(state => state.favArr);
    const tempoArr = useSelector(state => state.tempoArr);
    const dispatch = useDispatch();

    const inputFav = (e) => {
        console.log("hi");
        // Check the existence of the coin
        if (favArr.indexOf(e.target.id) >= 0 && tempoArr.length > 0) {
            favArr.splice(favArr.indexOf(e.target.id), 1);
            dispatch({type: 'FAV_DATA', favData: tempoArr});
            dispatch({type: 'TEMPO_DATA', tempoData: null});
        }
    }
    
    const btnClose = () => { // modal closing button
        dispatch({type: 'TEMPO_DATA', tempoData: null});
    }

    return(
        <div>
            <div className="modal-contaienr">
                <div className='modal-content'>
                    <div>
                        <button onClick={btnClose} className="close-button">X</button>
                    </div>
                    <div className="modal-header">
                        <h2>Your Report List</h2>
                        <p>You can add up to 5 coins to the list.
                        Please remove one coin from the list,
                        in order to add a new one.</p>
                    </div>

                    {favArr !== undefined ? favArr.map(coin => {return(
                        <div className="modal-toggle" key={coin}>
                            <div>
                                <p>{coin}</p>
                            </div>
                            <div>
                                <button onClick={inputFav} id={coin} type="button" className="btn-check">❤️</button>
                            </div>
                        </div>
                    )}) : null}
                </div>
            </div>
        </div>
    );
}
export default Modal;