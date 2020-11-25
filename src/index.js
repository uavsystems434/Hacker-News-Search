import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/search__reducer.js";
import './index.css';
import Searchbar from "./component/SearchBar/SearchBar.js";
import { loadHits } from './actions/ResultsAction.js';
import App from "./App.js";

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}> <App /> </Provider> , document.getElementById('root'));

