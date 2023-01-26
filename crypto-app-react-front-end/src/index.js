import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux'; // Import redux functions
import { arrReducer, favArrReducer, searchValueReducer, tempoArrReducer } from './components/Lists/redux/reducers';
// import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(combineReducers({ // Creacting the store
  arr: arrReducer,
  favArr: favArrReducer, 
  tempoArr: tempoArrReducer,
  searchValue: searchValueReducer,
})) // Multi reducer nested in single reducer

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

