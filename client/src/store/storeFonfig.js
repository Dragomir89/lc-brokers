import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import offersReducer from '../reducers/offersReducer';

export default createStore(combineReducers({
    offers: offersReducer
}, applyMiddleware(reduxThunk)));