import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import {pizzaReducer} from './store/reducers/pizza'
import {customerReducer} from './store/reducers/customer'
import {orderReducer} from './store/reducers/order'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import AddPizza from './AddPizza';

const p = createStore(combineReducers({ pizz:pizzaReducer,cust:customerReducer,ord:orderReducer}), composeWithDevTools())
ReactDOM.render(
  <React.StrictMode>
  <Provider store={p}>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
