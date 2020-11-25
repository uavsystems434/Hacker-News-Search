import { combineReducers } from 'redux';

let defaultState = {
    searches: [],
    results: []
}

const mainReducer=(state=false, action = {} ) => {
switch (action.type) {
    case 'SEARCH_HN':
        return {
            ...state,
            searches: [...state.searches, action.terms]
        }
        break;
    case "GET_RESULTS":
        return {
            ...state,
            results: action.results
        }
        break;

default: 
    return state;
    }

}

export default mainReducer;
