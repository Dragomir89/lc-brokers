import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import store from './store/storeFonfig';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import offersReducer from './reducers/offersReducer';
import optionsReducer from './reducers/otionsReducer';
import offerPostStatusReducer from './reducers/offerPostStatusReducer';
import editOfferReducer from './reducers/editOfferReducer';

const reducers = combineReducers({
    offers: offersReducer, 
    options: optionsReducer,
    offerPostStatus: offerPostStatusReducer,
    editOffer: editOfferReducer
});

const store = createStore(reducers, (applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

